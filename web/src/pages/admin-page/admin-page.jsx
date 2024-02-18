import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import MenuCard from "../../components/menu-card/menu-card.jsx";
import command from "../../assets/Images/Command-Dashboard.svg";
import inventory from "../../assets/Images/inventario-dashboard.svg";
import multipleUsers from "../../assets/Images/MultipleUsers-Dashboard.svg";
import analitycs from "../../assets/Images/Analitycs-Dashboard.svg";
import "./admin-page.css";

export function AdminPage() {
	return (
		<div className="admin-page">
			<Header />
			<Navbar />
			<div className="card-container">
				<MenuCard imagePath={command} text="Gestión de comandas" />
				<MenuCard imagePath={inventory} text="Gestión de inventario" />
				<MenuCard
					imagePath={multipleUsers}
					text="Gestión de personal"
				/>
				<MenuCard imagePath={analitycs} text="Estadísticas" />
			</div>
		</div>
	);
}
