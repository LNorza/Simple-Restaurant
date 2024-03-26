import user from "../../assets/Images/user.svg";
import {User, LogOut} from "lucide-react";
import {Link} from "react-router-dom";
import "./header-dropdown.css";
import {useState} from "react";

export function HeaderDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                <img src={user} alt="user-image" />
                <div className="user-info">
                    <p>Samuel</p>
                    <p className="stand">Gerente general</p>
                </div>
            </button>

            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
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
    );
}
