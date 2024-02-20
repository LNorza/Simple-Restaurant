import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./personal.css";

export function PersonalPage() {
	return (
		<div className="personal-page">
			<div className="header-container">
				<Header />
			</div>
			<div>
				<Navbar />
			</div>
		</div>
	);
}
