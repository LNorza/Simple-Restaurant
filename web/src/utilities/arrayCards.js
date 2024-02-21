import command from "../assets/Images/Command-Dashboard.svg";
import inventory from "../assets/Images/inventario-dashboard.svg";
import multipleUsers from "../assets/Images/MultipleUsers-Dashboard.svg";
import analitycs from "../assets/Images/Analitycs-Dashboard.svg";
export const arrayMenu = [
	{
		imagePath: command,
		text: "Gestión de comandas",
		direction: "/commands",
	},
	{
		imagePath: inventory,
		text: "Gestión de inventario",
		direction: "/inventory",
	},
	{
		imagePath: multipleUsers,
		text: "Gestión de personal",
		direction: "/personal",
	},
	{
		imagePath: analitycs,
		text: "Estadísticas",
		direction: "/analitycs",
	},
];
