import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./inventory.css";

export function InventoryPage() {
	return (
		<div className="inventory-page">
			<Header />
			<div className="menu-container">
				<Navbar />
			</div>
		</div>
	);
}
