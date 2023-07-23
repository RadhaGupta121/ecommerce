import React from "react";
import { Link } from "react-router-dom";

const Navigation_tab=()=>{
    return(
       
        <div>
            <ul className="nav-ul">
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/main">Main</Link></li>
            </ul>
        </div>
    )
}
export default Navigation_tab;