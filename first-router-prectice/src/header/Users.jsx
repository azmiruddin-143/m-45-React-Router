import { useLoaderData } from "react-router-dom";
import User from "../users/User";
import { useEffect, useState } from "react";

const Users = () => {
        
    
  const [selectUser,setSelectUser] = useState([])

    const users = useLoaderData()
    useEffect(() =>{
        setSelectUser(users)
    },[])

    const diletitem = (id) =>{
        const diletitem = selectUser.filter(d => d.id != id)
        setSelectUser(diletitem);
        
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 px-24  ">
                {
                    selectUser?.map(userloop => <User key={userloop.id} diletitem ={diletitem}  userloop={userloop}></User>)
                }
            </div>
        </div>
    );
};

export default Users;