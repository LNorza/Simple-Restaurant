import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import {CirclePlus} from "lucide-react";
import {MenuCard} from "../../components/menu-card/menu-card.jsx";
import {arrayTables} from "../../utilities/arrayTables.js";
import "./tables.css";

export function TablesPage() {
	return (
		<div>
			<Header />
			<div className="menu-container">
				<Navbar />
				<div className="principal-container">
					<div className="header-container">
						<h2>Gestión de mesas</h2>
						<button className="add-button">
							<CirclePlus size={20} />
							Agregar Mesa
						</button>
					</div>
					<div className="card-container">
						{arrayTables.map(({imagePath, text, direction}) => (
							<MenuCard
								key={text}
								imagePath={imagePath}
								text={text}
								direction={direction}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
