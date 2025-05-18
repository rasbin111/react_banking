import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
    const nav = useNavigate();
    return (
        <nav>
            <ul className="navLinks">
                <li>
                    <NavLink to="/" className="navLink"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="navLink"> Login </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
