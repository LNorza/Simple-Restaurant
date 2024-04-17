import { useState } from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import "./inventory.css";
import { SearchForm } from "../../components/search-form/search-form.jsx";
import { AddButton } from "../../components/add-button/add-button.jsx";
import TableCustom from "../../components/tableCustom/table-custom.jsx";

export function InventoryPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (searchTerm) => {
        console.log(allEmployees);
        const searchedEmployees = allEmployees.filter(
            (employee) =>
                employee.NombreEmp.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.ApellidosEmp.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.NSS.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.RFC.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.Telefono.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPersonal(searchedEmployees);
    };

    const headerColumns = [
        { id: 1, title: "Clave", dataKey: "clave" },
        { id: 2, title: "Producto", dataKey: "product" },
        { id: 3, title: "Proveedor", dataKey: "supplier" },
        { id: 4, title: "Costo unitario", dataKey: "costUnitary" },
        { id: 5, title: "Unidad de medida", dataKey: "unitMedition" },
        { id: 6, title: "Cantidad en físico", dataKey: "physicalUnit" },
    ];

    const tempDataInventory = [
        {
            id: 1,
            clave: 1,
            product: "Bolsa de azúcar",
            supplier: "Zulka",
            costUnitary: 20,
            unitMedition: "PZA",
            physicalUnit: 10,
        },
        {
            id: 2,
            clave: 2,
            product: "Refresco de cola",
            supplier: "Coca Cola",
            costUnitary: 40,
            unitMedition: "PZA",
            physicalUnit: 50,
        },
        {
            id: 3,
            clave: 3,
            product: "Tomate",
            supplier: "Fruteria Garmendia",
            costUnitary: 54,
            unitMedition: "KG",
            physicalUnit: 4.3,
        },
        {
            id: 4,
            clave: 4,
            product: "Harina",
            supplier: "Maseca",
            costUnitary: 15,
            unitMedition: "KG",
            physicalUnit: 6,
        },
    ];

    return (
        <div className="commands-page">
            <Header />
            <div className="menu-container">
                <Navbar />

                <div className="principal-container">
                    <div className="header-container">
                        <h2>Gestión de Invetario</h2>

                        <div className="search">
                            <SearchForm placeholder="Buscar Producto" onSearch={handleSearch} />
                            <AddButton message="Agregar Producto" />
                        </div>
                    </div>

                    {/* Add Component TableCustom */}
                    <TableCustom
                        mainPage="commands"
                        headerColumnsTable={headerColumns}
                        infoForTable={tempDataInventory}
                        nColumns={6}
                    />
                </div>
            </div>
        </div>
    );
}
