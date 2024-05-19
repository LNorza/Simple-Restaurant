import {useState} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "../inventory/inventory.css";
import {SearchForm} from "../../components/search-form/search-form.jsx";
import {CirclePlus} from "lucide-react";
import AddModalDishes from "../../components/add-modal/add-modal-dishes.jsx";
import TableCustom from "../../components/tableCustom/table-custom.jsx";

export function DishesPage() {
	const handleSearch = (searchTerm) => {
		console.log("Hola");
	};
	const [openAddModal, setOpenAddModal] = useState(false);
	const [dishes, setDishes] = useState([
		{
			id: 1,
			clave: 1,
			dish: "Pizza clásica",
			group: "Platos fuertes",
			price: 120,
		},
		{
			id: 2,
			clave: 2,
			dish: "Hamburguesa clásica",
			group: "Platos fuertes",
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
			group: "Platos fuertes",
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
			group: "Platos fuertes",
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
			group: "Platos fuertes",
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
			group: "Platos fuertes",
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
			group: "Platos fuertes",
			price: 70,
		},
		{
			id: 13,
			clave: 13,
			dish: "Agua de limón",
			group: "Bebidas",
			price: 20,
		},
	]);

	const openModal = () => {
		setOpenAddModal(true);
	};

	const closeModal = () => {
		setOpenAddModal(false);
	};

	const addDish = (newDish) => {
		setDishes([...dishes, newDish]);
		closeModal();
	};

	const headerColumns = [
		{id: 1, title: "Clave", dataKey: "clave"},
		{id: 2, title: "Platillo", dataKey: "dish"},
		{id: 3, title: "Grupo", dataKey: "group"},
		{id: 4, title: "Precio", dataKey: "price"},
	];

	return (
		<div className="commands-page">
			<Header />
			<div className="menu-container">
				<Navbar />
				<div className="principal-container">
					<div className="header-container">
						<h2>Gestión de platillos</h2>
						<div className="search">
							<SearchForm
								placeholder="Buscar platillo..."
								onSearch={handleSearch}
							/>
							<button className="add-button" onClick={openModal}>
								<CirclePlus size={20} />
								Agregar platillo
							</button>
						</div>
					</div>
					<TableCustom
						mainPage="commands"
						headerColumnsTable={headerColumns}
						infoForTable={dishes}
						nColumns={4}
						namePage="platillo"
					/>
				</div>
			</div>
			{openAddModal && <AddModalDishes onClose={closeModal} onSave={addDish} />}
		</div>
	);
}
