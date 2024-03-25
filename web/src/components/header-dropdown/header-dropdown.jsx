import user from "../../assets/Images/user.svg";
import {User, LogOut} from "lucide-react";
import {Link} from "react-router-dom";
import "./header-dropdown.css";

export function HeaderDropdown() {
	return (
		<div className="dropdown">
			<button className="dropbtn">
				<img src={user} alt="user-image" />
			</button>
			<div className="dropdown-menu">
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
