import { getAllSlugs, getBlogPost } from "../../helper/getData";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from 'react-syntax-highlighter'

const getStaticPaths = async () => {
    const paths = getAllSlugs();
    return {
       paths,
        fallback: false,
    }

}
const components= {SyntaxHighlighter}
const getStaticProps = async ({params}) => {
    const { slug } = params
    const props = await getBlogPost(slug)
    return {    
        props,
    }
}
const BlogItem = ({ frontmatter, MDXData}) => {
    const { title, description} = frontmatter
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <MDXRemote {...MDXData}  components={components} />
        </div>

    )
}

export default BlogItem;
export { getStaticPaths, getStaticProps}