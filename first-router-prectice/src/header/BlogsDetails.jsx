import { Link, useLoaderData } from "react-router-dom";


const BlogsDetails = () => {
    const singleblog = useLoaderData()
    return (
        <div className=" bg-[#8a19a9] py-6 rounded-md  w-fit mx-auto  px-8"> 
            <h1 className="text-3xl font-bold pb-3 text-white ">Blog ID :  {singleblog.id}</h1>
            <h1 className="text-2xl pb-3 text-white ">Show All Blog Content!</h1>
            <Link to="/blog"><button className="bg-[#00ff0d] text-black py-2 px-5 rounded-md ">Back to All Blog</button></Link>
        </div>
    );
};

export default BlogsDetails;