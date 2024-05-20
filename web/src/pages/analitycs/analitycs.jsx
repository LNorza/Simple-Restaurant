import React from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { arrayAnalitycs } from "../../utilities/arrayCardsAnalitycs.js";
import { DefaultCard } from "../../components/card/card.jsx";
import "./analitycs.css";
import { ColumnChart } from "../../components/charts/ColumnChart.jsx";
import { PieChart } from "../../components/charts/PieChart.jsx";
import { TableCustom } from "../../components/index.js";

export function AnalitycsPage() {
    const handleDateRangeChange = (dates, dateStrings) => {
        console.log("Selected Range:", dates);
        console.log("Formatted Selected Range:", dateStrings);
    };

    const headerColumns1 = [
        { id: 1, title: "Id", dataKey: "nId" },
        { id: 2, title: "Platillo", dataKey: "Platillo" },
        { id: 3, title: "Precio", dataKey: "Precio" },
        { id: 4, title: "Unidades", dataKey: "Unidades" },
        { id: 5, title: "Ventas", dataKey: "Ventas" }
    ];

    const tempData1 = [
        {
            id: 1,
            nId: "458-LS-W",
            Platillo: "Taco Gobernador",
            Precio: "$6,000",
            Unidades: 13,
            Ventas: 1278,
        },
        {
            id: 2,
            nId: "715-SF-X",
            Platillo: "Pizza Clasica",
            Precio: "$22,419.20",
            Unidades: 20,
            Ventas: "817",
        },
        {
            id: 3,
            nId: "200-GR-M",
            Platillo: "Fetuccini Alfredo",
            Precio: "$120",
            Unidades: 21,
            Ventas: 65,
        },
    ];

    const tempData2 = [
        {
            id: 1,
            nId: "459-LS-W",
            Platillo: "Taco de Cabeza",
            Precio: "$6,000",
            Unidades: 13,
            Ventas: 1278,
        },
        {
            id: 2,
            nId: "720-SF-X",
            Platillo: "Pizza Vegana",
            Precio: "$22,419.20",
            Unidades: 20,
            Ventas: "817",
        },
        {
            id: 3,
            nId: "215-GR-M",
            Platillo: "Sandwich Artesanal",
            Precio: "$120",
            Unidades: 21,
            Ventas: 65,
        },
    ];

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
                        {arrayAnalitycs.map(({ title, value, percentage }) => (
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

                    <TableCustom
                        mainPage="Analytics"
                        headerColumnsTable={headerColumns1}
                        infoForTable={tempData1}
                        nColumns={5}
                        namePage="Analitycs"
                    />

                    <div className="analitycs-table-text">
                        <h2>Platillos menos vendidos</h2>
                    </div>

                    <TableCustom
                        mainPage="Analytics"
                        headerColumnsTable={headerColumns1}
                        infoForTable={tempData2}
                        nColumns={5}
                        namePage="Analitycs"
                    />
                </div>
            </div>
        </div>
    );
}
