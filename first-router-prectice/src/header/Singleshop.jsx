
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
const Singleshop = ({ shoptransfer }) => {
    const { image, name, brand, price, country, color ,id } = shoptransfer

    // const handelclick = () =>{
    //     Navigate(`/shop/${id}`)
    // }
    return (
        <div className='w-fit '>
            <img className='w-[500px] rounded-lg' src={image} alt="" />
            <h1 className='text-3xl my-2 font-bold'>{name}</h1>
            <div className='flex justify-between my-2'>
                <div className=' text-black'>
                    <p>Brand: {brand}</p>
                    <span>Price: {price} Taka</span>
                </div>
                <div className=' items-center text-black'>
                    <h1>Country: {country}</h1>
                    <span>Color: {color}</span>
                </div>
            </div>

            <Link to={`/blog/${id}`}><button  className='bg-[#7a3e22] text-white py-2 px-5 rounded-md my-3'>Buy Now</button></Link>
        </div>
    );
};

Singleshop.propTypes = {
    shoptransfer: PropTypes.object.isRequired,

}

export default Singleshop;