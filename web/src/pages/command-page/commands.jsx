import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./commands.css";

export function CommandsPage() {
	return (
		<div className="commands-page">
			<div className="header-container">
				<Header />
			</div>
			<div>
				<Navbar />
			</div>
		</div>
	);
}
