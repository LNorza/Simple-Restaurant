import {useState} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "../inventory/inventory.css";
import {SearchForm} from "../../components/search-form/search-form.jsx";
import {AddButton} from "../../components/add-button/add-button.jsx";
import TableCustom from "../../components/tableCustom/table-custom.jsx";

export function DishesPage() {
	const handleSearch = (searchTerm) => {
		console.log("Hola");
		// const searchedEmployees = allEmployees.filter(
		//     (employee) =>
		//         employee.NombreEmp.toLowerCase().includes(searchTerm.toLowerCase()) ||
		//         employee.ApellidosEmp.toLowerCase().includes(searchTerm.toLowerCase()) ||
		//         employee.NSS.toLowerCase().includes(searchTerm.toLowerCase()) ||
		//         employee.RFC.toLowerCase().includes(searchTerm.toLowerCase()) ||
		//         employee.Telefono.toLowerCase().includes(searchTerm.toLowerCase())
		// );
		// setPersonal(searchedEmployees);
	};

	const headerColumns = [
		{id: 1, title: "Clave", dataKey: "clave"},
		{id: 2, title: "Platillo", dataKey: "dish"},
		{id: 3, title: "Grupo", dataKey: "group"},
		{id: 4, title: "Precio", dataKey: "price"},
	];

	const tempDataInventory = [
		{
			id: 1,
			clave: 1,
			dish: "Pizza clásica",
			group: "Platillos fuertes",
			price: 120,
		},
		{
			id: 2,
			clave: 2,
			dish: "Hamburguesa clásica",
			group: "Platillos fuertes",
			price: 150,
		},
		{
			id: 3,
			clave: 3,
			dish: "Papas a la francesa",
			group: "Entradas",
			price: 50,
		},
		{
			id: 4,
			clave: 4,
			dish: "Tacos de pastor",
			group: "Platillos fuertes",
			price: 70,
		},
		{
			id: 5,
			clave: 5,
			dish: "Agua de horchata",
			group: "Bebidas",
			price: 20,
		},
		{
			id: 6,
			clave: 6,
			dish: "Tacos de bistec",
			group: "Platillos fuertes",
			price: 70,
		},
		{
			id: 7,
			clave: 7,
			dish: "Agua de jamaica",
			group: "Bebidas",
			price: 20,
		},
		{
			id: 8,
			clave: 8,
			dish: "Tacos de pollo",
			group: "Platillos fuertes",
			price: 70,
		},
		{
			id: 9,
			clave: 9,
			dish: "Coca cola",
			group: "Bebidas",
			price: 20,
		},
		{
			id: 10,
			clave: 10,
			dish: "Tacos de carnitas",
			group: "Platillos fuertes",
			price: 70,
		},
		{
			id: 11,
			clave: 11,
			dish: "Pepsi",
			group: "Bebidas",
			price: 20,
		},
		{
			id: 12,
			clave: 12,
			dish: "Tacos de chorizo",
			group: "Platillos fuertes",
			price: 70,
		},
		{
			id: 13,
			clave: 13,
			dish: "Agua de limón",
			group: "Bebidas",
			price: 20,
		},
	];

	return (
		<div className="commands-page">
			<Header />
			<div className="menu-container">
				<Navbar />

				<div className="principal-container">
					<div className="header-container">
						<h2>Gestión de Platillos</h2>

						<div className="search">
							<SearchForm
								placeholder="Buscar PLatillo"
								onSearch={handleSearch}
							/>
							<AddButton message="Agregar Platillo" />
						</div>
					</div>

					{/* Add Component TableCustom */}
					<TableCustom
						mainPage="commands"
						headerColumnsTable={headerColumns}
						infoForTable={tempDataInventory}
						nColumns={6}
						namePage="Producto"
					/>
				</div>
			</div>
		</div>
	);
}
