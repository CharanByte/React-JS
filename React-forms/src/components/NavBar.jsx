
import { NavLink } from "react-router-dom";

function NavBar(){

    return(<>
    <div className="nav">
    <ul>
        <li>
            <NavLink to="/home">Home</NavLink>
        </li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

    </ul>
    </div>
    </>)
}
export default NavBar;
