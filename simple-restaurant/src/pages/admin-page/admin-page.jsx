import logo from "../../assets/Images/Logo-icon.svg";
import user from "../../assets/Images/user.svg";
import category from "../../assets/Images/Category.svg";
import commands from "../../assets/Images/Personal.svg";
import inventory from "../../assets/Images/inventario.svg";
import personal from "../../assets/Images/muliple-users.svg";
import analitycs from "../../assets/Images/analitycs.svg";
import "./admin-page.css";

export function AdminPage() {
    return (
        <div className="admin-page-container">
            <div className="admin-page-header">
                <div className="logo-container">
                    <img src={logo} alt="simpleRestaurant" />
                    <h1>SimpleRestaurant</h1>
                </div>

                <div className="user">
                    <img src={user} alt="user-foto" />
                    <div className="user-info">
                        <p>Samuel</p>
                        <p className="puesto">Gerente general</p>
                    </div>
                </div>
            </div>

            <div className="admin-page-aside">
                <ul>
                    <li className="category-menu">
                        <img src={category} alt="" />
                    </li>
                    <li>
                        <img src={commands} alt="" />
                    </li>
                    <li>
                        <img src={inventory} alt="" />
                    </li>
                    <li>
                        <img src={personal} alt="" />
                    </li>
                    <li>
                        <img src={analitycs} alt="" />
                    </li>
                </ul>
            </div>

            <div className="admin-page-main"></div>
        </div>
    );
}
