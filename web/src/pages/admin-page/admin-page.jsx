import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import {MenuCard} from "../../components/menu-card/menu-card.jsx";
import {arrayMenu} from "../../utilities/arrayCards.js";
import "./admin-page.css";

export function AdminPage() {
	return (
		<div className="commands-page">
			<Header />

			<div className="menu-container">
				<Navbar />
				<div className="principal-container">
					<div className="card-container">
						{arrayMenu.map(({imagePath, text, direction}) => (
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
