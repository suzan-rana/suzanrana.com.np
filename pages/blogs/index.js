import { getAllBlogs } from "../../helper/getData";
import Link from "next/link";

const getStaticProps = async () => {
    const blogs = getAllBlogs();
    return {
        props: blogs,
    }
}

const Blogs = ({ blogs }) => {
    return(
        <>
         {
            blogs.map( blog => {
                const {frontmatter, slug } = blog;
                return(
                    <>
                    <div>{frontmatter.title}</div>
                    <div> <Link href={`blogs/${slug}`}>{slug}</Link></div>
                    <br />
                    </>
                )

            })
        }
        </>
       
    )

}
export default Blogs;
export { getStaticProps }