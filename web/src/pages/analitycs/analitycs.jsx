import React from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import {DatePicker} from "antd";
import "./analitycs.css";

export function AnalitycsPage() {
	const handleDateRangeChange = (dates, dateStrings) => {
		console.log("Selected Range:", dates);
		console.log("Formatted Selected Range:", dateStrings);
	};

	return (
		<div className="analitycs-page">
			<Header />
			<div className="menu-container">
				<Navbar />
				<div className="principal-container">
					<div className="header-container">
						<div className="text-container">
							<h2>Gestión de personal</h2>
						</div>
						<div className="input-container">
							<DatePicker.RangePicker
								onChange={handleDateRangeChange}
							/>
						</div>
					</div>

					<div></div>
				</div>
			</div>
		</div>
	);
}
