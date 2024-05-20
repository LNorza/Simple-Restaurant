import {useState, useEffect} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./inventory.css";
import {SearchForm} from "../../components/search-form/search-form.jsx";
import {AddButton} from "../../components/add-button/add-button.jsx";
import TableCustom from "../../components/tableCustom/table-custom.jsx";
import {BASE_URL} from "../../utilities/petitionConst.js";

export function InventoryPage() {
	const [openAddModal, setOpenAddModal] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = () => {
		fetch(`${BASE_URL}/products`)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				console.error("Error fetching dishes:", error);
			});
	};

	const handleSearch = (searchTerm) => {
		console.log("Hola");
	};

	const openModal = () => {
		setOpenAddModal(true);
	};

	const closeModal = () => {
		getProducts();
		setOpenAddModal(false);
	};

	const headerColumns = [
		{id: 2, title: "Producto", dataKey: "NombreProducto"},
		{id: 3, title: "Proveedor", dataKey: "NombreProveedor"},
		{id: 4, title: "Costo unitario", dataKey: "Precio"},
		{id: 5, title: "Unidad de medida", dataKey: "Unidad"},
		{id: 6, title: "Cantidad en físico", dataKey: "Cantidad"},
	];

	const deleteProduct = async (id) => {
		try {
			await fetch(`${BASE_URL}/products/${id}`, {
				method: "DELETE",
			});
			getDishes();
		} catch (error) {
			console.error("Error al eliminar el platillo:", error);
		}
	};

	return (
		<div className="commands-page">
			<Header />
			<div className="menu-container">
				<Navbar />

				<div className="principal-container">
					<div className="header-container">
						<h2>Gestión de inventario</h2>

						<div className="search">
							<SearchForm
								placeholder="Buscar producto..."
								onSearch={handleSearch}
							/>
							<AddButton message="Agregar Producto" />
						</div>
					</div>

					{/* Add Component TableCustom */}
					<TableCustom
						mainPage="commands"
						headerColumnsTable={headerColumns}
						infoForTable={products}
						nColumns={4}
						namePage="platillo"
						deleteFunction={deleteProduct}
						useIn="inventory"
						getFunction={getProducts}
					/>
				</div>
			</div>
		</div>
	);
}
