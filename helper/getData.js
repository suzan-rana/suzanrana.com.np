import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize"


const getAllBlogs = () => {
  //gives frontmatter of all blogs
  const allMdxFiles = fs.readdirSync(path.join("posts"));
  const blogs = allMdxFiles.map((fileName) => {
    const dataFromFile = fs.readFileSync(path.join("posts", fileName), "utf-8");

    const { data: frontmatter } = matter(dataFromFile);

    return {
      frontmatter,
      slug: fileName.replace(".mdx", ""),
    };
  });
  return {
    blogs, 
  };
};

const getAllSlugs = () => {
    const allMdxFiles = fs.readdirSync(path.join("posts"));
    const paths = allMdxFiles.map( fileName => {
        const slug = fileName.replace('.mdx', '');
        return {
          params: {
            slug,
          }
        }
    })
    return paths; // ['slug1', 'slug2', slug3, slug4]
};

const getBlogPost = async ( slug ) => {
    const blogData = fs.readFileSync(path.join('posts', `${slug}.mdx`), "utf-8")
    const { data:frontmatter, content } = matter(blogData)
    const MDXData = await serialize(content)

    return {
      frontmatter,
      MDXData
    }

   
};

export { getAllBlogs, getAllSlugs, getBlogPost };
