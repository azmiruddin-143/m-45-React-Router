import { useLoaderData } from "react-router-dom";
import Singleblog from "./Singleblog";


const Blog = () => {
    const blog = useLoaderData()
    return (
        <div className="grid grid-cols-4 gap-6 px-24">
             {
                blog.map(blogloop => <Singleblog key={blogloop.id} blogloop ={blogloop} ></Singleblog> )
             }
        </div>
    );
};

export default Blog;