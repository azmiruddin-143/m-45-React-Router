
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Singleblog = ({blogloop}) => {
    const {title,body,id} = blogloop
    return (
        <div className='bg-black text-white py-3 px-5 space-y-6 flex flex-col '>
            <h1 className='text-3xl '>Title : {title}</h1>
            <h1 className='flex-grow'>Description : {body}</h1>
            <Link to={`/singleblog/${id}`}><button className='bg-[red]  py-2 px-5 rounded-md'>view Details</button></Link>
        </div>
    );
};

Singleblog.propTypes = {
    blogloop: PropTypes.object.isRequired
}

export default Singleblog;