import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <ul className="flex space-x-3 px-4 mb-10">
                <li><NavLink className={({isActive})=>isActive?"underline bg-blue-200 px-3 py-1":""} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"underline bg-blue-200 px-3 py-1":""} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"underline bg-blue-200 px-3 py-1":""} to="/product/10/milk">Product</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;

// <NavLink className={({isActive})=>isActive?"underline":""} to="/product/:id/:name">Product</NavLink>