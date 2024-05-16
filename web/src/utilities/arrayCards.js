import command from "../assets/Images/Commands-Dashboard.svg";
import inventory from "../assets/Images/inventario-dashboard.svg";
import multipleUsers from "../assets/Images/MultipleUsers-Dashboard.svg";
import analitycs from "../assets/Images/Analitycs-Dashboard.svg";
import table from "../assets/Images/table-dashboard.svg";
import CookingPot from "../assets/Images/CookingPot-Dashboard.svg";
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
	{
		imagePath: table,
		text: "Gestión de mesas",
		direction: "/tables",
	},
	{
		imagePath: CookingPot,
		text: "Gestión de platillos",
		direction: "/dishes",
	},
];
