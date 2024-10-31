import { useLoaderData } from "react-router-dom";
import Singleshop from "./Singleshop";

const Shop = () => {

    const shop = useLoaderData()
    console.log(shop);
    return (
        <div className="bg-[#cfcfcf] grid grid-cols-3 py-10 px-10 place-items-center gap-x-10 gap-y-14 mx-24 rounded-lg">
            
             {
                shop.map(shoploop => <Singleshop key={shoploop.id} shoptransfer ={shoploop}></Singleshop>  )
             }
        </div>
    );
};

export default Shop;