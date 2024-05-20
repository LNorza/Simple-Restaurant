import { useState, useEffect } from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "../inventory/inventory.css";
import { SearchForm } from "../../components/search-form/search-form.jsx";
import { CirclePlus } from "lucide-react";
import AddModalDishes from "../../components/add-modal/add-modal-dishes.jsx";
import TableCustom from "../../components/tableCustom/table-custom.jsx";
import { BASE_URL } from "../../utilities/petitionConst.js";

export function DishesPage() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        getDishes();
    }, []);

    const getDishes = () => {
        fetch(`${BASE_URL}/platillos`)
            .then((response) => response.json())
            .then((data) => {
                setDishes(data);
            })
            .catch((error) => {
                console.error("Error fetching dishes:", error);
            });
    };

    const handleSearch = (searchTerm) => {
        console.log("Buscar platillo:", searchTerm);
    };

    const openModal = () => {
        setOpenAddModal(true);
    };

    const closeModal = () => {
        getDishes();
        setOpenAddModal(false);
    };

    const headerColumns = [
        { id: 2, title: "Platillo", dataKey: "NombrePlatillo" },
        { id: 3, title: "Precio", dataKey: "Precio" },
        { id: 4, title: "Grupo", dataKey: "NombreGrupo" },
    ];

    const deleteDish = async (id) => {
        try {
            await fetch(`${BASE_URL}/platillos/${id}`, {
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
                        namePage="createCommand"
                        deleteFunction={deleteDish}
                        useIn="dishes"
                        getFunction={getDishes}
                    />
                </div>
            </div>
            {openAddModal && <AddModalDishes onClose={closeModal} />}
        </div>
    );
}
