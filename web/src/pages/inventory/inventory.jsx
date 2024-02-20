import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./inventory.css";

export function InventoryPage() {
	return (
		<div className="inventory-page">
			<div className="header-container">
				<Header />
			</div>
			<div>
				<Navbar />
			</div>
		</div>
	);
}
