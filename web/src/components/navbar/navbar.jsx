import {Link, useLocation} from "react-router-dom";
import dashboard from "../../assets/Images/Dashboard.svg";
import commands from "../../assets/Images/Commands.svg";
import inventory from "../../assets/Images/inventario.svg";
import personal from "../../assets/Images/muliple-users.svg";
import analitycs from "../../assets/Images/analitycs.svg";
import "./navbar.css";

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="navbar">
            <ul>
                <li
                    className={
                        location.pathname === "/home" ? "category-menu" : ""
                    }
                >
                    <Link to="/home">
                        <img src={dashboard} alt="" />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/commands" ? "category-menu" : ""
                    }
                >
                    <Link to="/commands">
                        <img src={commands} alt="" />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/inventory"
                            ? "category-menu"
                            : ""
                    }
                >
                    <Link to="/inventory">
                        <img src={inventory} alt="" />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/personal" ? "category-menu" : ""
                    }
                >
                    <Link to="/personal">
                        <img src={personal} alt="" />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/analitycs"
                            ? "category-menu"
                            : ""
                    }
                >
                    <Link to="/analitycs">
                        <img src={analitycs} alt="" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
