
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({ userloop,diletitem}) => {

   
    const { name, email, id } = userloop
    const { city, zipcode } = userloop.address

 


    return (
        <div className='bg-[#24aca8] py-3 px-6 space-y-2 rounded-md'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <p>Email : {email}</p>
            <h1> City : {city}</h1>
            <p>Post code : {zipcode}</p>
            <div className='flex justify-between'>
                <Link to={`/user/${id}`}><button className='bg-[orange] text-black font-bold py-1 my-3 px-4 rounded-md'>View Details</button></Link>
                <button onClick={() => diletitem(id)} className='bg-[orange] text-black font-bold py-1 my-3 px-4 rounded-md'>Dilet Card</button>
            </div>
        </div>
    );
};

User.propTypes = {
    userloop: PropTypes.object.isRequired,
    diletitem:PropTypes.func
}

export default User;