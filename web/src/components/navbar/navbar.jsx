import {Link} from "react-router-dom";
import category from "../../assets/Images/Category.svg";
import commands from "../../assets/Images/Personal.svg";
import inventory from "../../assets/Images/inventario.svg";
import personal from "../../assets/Images/muliple-users.svg";
import analitycs from "../../assets/Images/analitycs.svg";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="admin-page-aside">
			<ul>
				<li className="category-menu">
					<Link to="/home">
						<img src={category} alt="" />
					</Link>
				</li>
				<li>
					<Link to="/commands">
						<img src={commands} alt="" />
					</Link>
				</li>
				<li>
					<Link to="/inventory">
						<img src={inventory} alt="" />
					</Link>
				</li>
				<li>
					<Link to="/personal">
						<img src={personal} alt="" />
					</Link>
				</li>
				<li>
					<Link to="/analitycs">
						<img src={analitycs} alt="" />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

// import React from "react";
// import {Link, useLocation} from "react-router-dom";
// import category from "../../assets/Images/Category.svg";
// import commands from "../../assets/Images/Personal.svg";
// import inventory from "../../assets/Images/inventario.svg";
// import personal from "../../assets/Images/muliple-users.svg";
// import analitycs from "../../assets/Images/analitycs.svg";
// import "./navbar.css";

// const Navbar = () => {
// 	const location = useLocation();

// 	return (
// 		<nav className="admin-page-aside">
// 			<ul>
// 				<li
// 					className={
// 						location.pathname === "/home"
// 							? "router-link-exact-active"
// 							: ""
// 					}
// 				>
// 					<Link to="/home">
// 						<img src={category} alt="" />
// 					</Link>
// 				</li>
// 				<li
// 					className={
// 						location.pathname === "/commands"
// 							? "router-link-exact-active"
// 							: ""
// 					}
// 				>
// 					<Link to="/commands">
// 						<img src={commands} alt="" />
// 					</Link>
// 				</li>
// 				<li
// 					className={
// 						location.pathname === "/inventory"
// 							? "router-link-exact-active"
// 							: ""
// 					}
// 				>
// 					<Link to="/inventory">
// 						<img src={inventory} alt="" />
// 					</Link>
// 				</li>
// 				<li
// 					className={
// 						location.pathname === "/personal"
// 							? "router-link-exact-active"
// 							: ""
// 					}
// 				>
// 					<Link to="/personal">
// 						<img src={personal} alt="" />
// 					</Link>
// 				</li>
// 				<li
// 					className={
// 						location.pathname === "/analytics"
// 							? "router-link-exact-active"
// 							: ""
// 					}
// 				>
// 					<Link to="/analytics">
// 						<img src={analitycs} alt="" />
// 					</Link>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// };

// export default Navbar;
