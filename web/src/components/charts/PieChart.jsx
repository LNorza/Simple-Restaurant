import {useState} from "react";
import Chart from "react-apexcharts";
import "./charts.css";

export const PieChart = () => {
	const [options, setOptions] = useState({
		chart: {
			width: "100%",
			type: "pie",
		},
		labels: ["Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
		colors: ["#6f8cae", "#416180", "#294b69", "#123552", "#0a1e2f"],
		plotOptions: {
			pie: {
				dataLabels: {
					style: {
						fontSize: "14px", // Ajusta el tamaño de la fuente de las etiquetas
					},
				},
			},
		},
	});

	const [series, setSeries] = useState([44, 55, 13, 43, 22]);

	return (
		<div className="container-chart">
			<h2>Promedio de ventas por día</h2>
			<Chart options={options} series={series} type="pie" height={400} />
		</div>
	);
};
