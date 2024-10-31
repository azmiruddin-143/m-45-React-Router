import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Header = () => {
    return (
        <div>
            <div className="flex justify-between px-24 items-center my-6">
                <div>
                    <h1 className="text-black font-bold text-3xl">Clothing Shop</h1>
                </div>
                <div>
                    <ul className="flex gap-8">
                     <NavLink to="/" className={({isActive}) => isActive ? "text-red-600" : "text-black"} >Home</NavLink>
                     <NavLink to="/shop" className={({isActive}) => isActive ? "text-red-600" : "text-black"} >Shop</NavLink>
                     <NavLink to="/blog" className={({isActive}) => isActive ? "text-red-600" : "text-black"} >Blog</NavLink>
                     <NavLink to="/users" className={({isActive}) => isActive ? "text-red-600" : "text-black"} >Users</NavLink>
                     <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-600" : "text-black"} >Contact Us</NavLink>
                     
                    </ul>
                </div>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;