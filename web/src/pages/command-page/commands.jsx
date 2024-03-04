import {useEffect, useState} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./commands.css";

export function CommandsPage() {
	// const [state, setState] = useState([]);
	// async function fetchData() {
	// 	const result = await fetch(
	// 		"https://simplerestaurant-api-production.up.railway.app/api/employees"
	// 	).then((response) => response.json());
	// 	setState(result);
	// }
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	// console.log(state);
	return (
		<div className="commands-page">
			<Header />
			<div>
				<Navbar />
			</div>
		</div>
	);
}
