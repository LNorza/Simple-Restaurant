import React from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import {useEffect, useState} from "react";
import {DatePicker} from "antd";
import {arrayAnalitycs} from "../../utilities/arrayCardsAnalitycs.js";
import {DefaultCard} from "../../components/card/card.jsx";
import "./analitycs.css";
import {ColumnChart} from "../../components/charts/ColumnChart.jsx";
import {PieChart} from "../../components/charts/PieChart.jsx";

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
						<div>
							<h2>Estadísticas</h2>
						</div>
						<div>
							<DatePicker.RangePicker
								className="date-picker"
								onChange={handleDateRangeChange}
							/>
						</div>
					</div>

					<div className="analitycs-card-container">
						{arrayAnalitycs.map(({title, value, percentage}) => (
							<DefaultCard
								key={title}
								title={title}
								value={value}
								percentage={percentage}
							/>
						))}

						{console.log(arrayAnalitycs)}
					</div>

					<div className="chart-container">
						<ColumnChart />
						<PieChart />
					</div>

					<div className="analitycs-table-text">
						<h2>Platillos más vendidos</h2>
					</div>

					<div className="analitycs-table-container">
						<div className="tabla">
							<div className="tabla-encabezado">
								<div className="texto-encabezado">Platillo</div>
								<div className="texto-encabezado">Precio</div>
								<div className="texto-encabezado">Unidades</div>
								<div className="texto-encabezado">Ventas</div>
							</div>
							<div className="contenedor-datos"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
