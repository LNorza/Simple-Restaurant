import user from "../../assets/Images/user.svg";
import {User, LogOut} from "lucide-react";
import {Link} from "react-router-dom";
import "./header-dropdown.css";

export function HeaderDropdown() {
    return (
        <div className="dropdown">
            <button className="dropbtn">
                <img src={user} alt="user-image" />
                <div className="user-info">
                    <p>Samuel</p>
                    <p className="stand">Gerente general</p>
                </div>
            </button>
            <div className="dropdown-menu">
                <div>
                    <button className="dropdown-menu-button">
                        <User />
                        <span>Perfil</span>
                    </button>
                    <Link to="/">
                        <button className="dropdown-menu-button">
                            <LogOut />
                            <span>Salir</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
