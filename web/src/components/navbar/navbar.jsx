import { Link, useLocation } from "react-router-dom";
import dashboard from "../../assets/Images/Dashboard.svg";
import commands from "../../assets/Images/Commands.svg";
import inventory from "../../assets/Images/inventario.svg";
import personal from "../../assets/Images/muliple-users.svg";
import analitycs from "../../assets/Images/analitycs.svg";
import table from "../../assets/Images/table.svg";
import cookingPot from "../../assets/Images/cooking-pot.svg";
import "./navbar.css";

export const Navbar = () => {
    const location = useLocation();
    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul>
                    <Link
                        to="/home"
                        className={`${location.pathname === "/home" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={dashboard} alt="" />
                        </li>
                    </Link>
                    <Link
                        to="/commands"
                        className={`${location.pathname === "/commands" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={commands} alt="" />
                        </li>
                    </Link>
                    <Link
                        to="/inventory"
                        className={`${location.pathname === "/inventory" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={inventory} alt="" />
                        </li>
                    </Link>
                    <Link
                        to="/personal"
                        className={`${location.pathname === "/personal" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={personal} alt="" />
                        </li>
                    </Link>
                    <Link
                        to="/analitycs"
                        className={`${location.pathname === "/analitycs" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={analitycs} alt="" />
                        </li>
                    </Link>
                    <Link
                        to="/tables"
                        className={`${location.pathname === "/tables" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={table} alt="" />
                        </li>
                    </Link>
                    <Link
                        to="/dishes"
                        className={`${location.pathname === "/dishes" ? "category-menu" : ""
                            } non-selected`}
                    >
                        <li>
                            <img src={cookingPot} alt="" />
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
