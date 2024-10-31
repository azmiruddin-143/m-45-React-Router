import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const user = useLoaderData()
    const {website,phone} = user
    const{name} = user.company

    return (
        <div className="bg-[orange] w-fit py-5 px-14 rounded-md space-y-5 mx-auto flex flex-col">
            <h1>Company Name : {name} </h1>
            <h1>Phone Number : {phone}</h1>
            <h1>Website link : {website}</h1>
            <Link to= "/users"><button className="bg-white w-fit py-2 px-5 rounded-md">Back to Users</button></Link>
            
        </div>
    );
};

export default Details;