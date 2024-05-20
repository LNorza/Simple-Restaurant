import { useState } from "react";

import { Header } from "../../components";
import { Navbar } from "../../components";

import { AddButton, SearchForm, TableCustom } from "../../components";

import "./commands.css";

export function CommandsPage() {
    const [isLoading, setIsLoading] = useState(true);

    const handleSearch = (searchTerm) => {
        console.log(allEmployees);
        const searchedEmployees = allEmployees.filter(
            (employee) =>
                employee.NombreEmp.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.ApellidosEmp.toLowerCase().includes(
                    searchTerm.toLowerCase()
                ) ||
                employee.NSS.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.RFC.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.Telefono.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPersonal(searchedEmployees);
    };

    const headerColumns = [
        { id: 1, title: "NºCuenta", dataKey: "nCuenta" },
        { id: 2, title: "Mesero", dataKey: "mesero" },
        { id: 3, title: "Mesa", dataKey: "mesa" },
        { id: 4, title: "Hora", dataKey: "hora" },
    ];

    const tempDataCommands = [
        {
            id: 1,
            nCuenta: 1,
            mesero: "Juan Perez Soto",
            mesa: 1,
            hora: "12:00",
        },
        {
            id: 2,
            nCuenta: 2,
            mesero: "Pedro Luis Meza Rivera",
            mesa: 2,
            hora: "12:30",
        },
        {
            id: 3,
            nCuenta: 3,
            mesero: "Luis Carlos Lie Norzagaray",
            mesa: 3,
            hora: "13:00",
        },
        {
            id: 4,
            nCuenta: 4,
            mesero: "Alan Meza Valenzuela",
            mesa: 4,
            hora: "13:30",
        },
        {
            id: 5,
            nCuenta: 5,
            mesero: "Alberto Rafael Cardenas Zazueta",
            mesa: 5,
            hora: "14:00",
        },
    ];

    return (
        <div className="commands-page">
            <Header />
            <div className="menu-container">
                <Navbar />

                <div className="principal-container">
                    <div className="header-container">
                        <h2>Gestión de comandas</h2>

                        <div className="search">
                            <SearchForm
                                placeholder="Buscar una comanda por mesa..."
                                onSearch={handleSearch}
                            />
                            <AddButton
                                message="Crear Comanda"
                                namePage="Comanda"
                            />
                        </div>
                    </div>

                    {/* Add Component TableCustom */}
                    <TableCustom
                        mainPage="commands"
                        headerColumnsTable={headerColumns}
                        infoForTable={tempDataCommands}
                        nColumns={4}
                        namePage="Comandas"
                    />
                </div>
            </div>
        </div>
    );
}
