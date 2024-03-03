import React from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import {DatePicker} from "antd";
import {arrayAnalitycs} from "../../utilities/arrayCardsAnalitycs.js";
import {DefaultCard} from "../../components/card/card.jsx";
import "./analitycs.css";
import {ColumnChart} from "../../components/charts/ColumnChart.jsx";
import {PieChart} from "../../components/charts/PieChart.jsx";

export function AnalitycsPage() {
    const handleDateRangeChange = (dates, dateStrings) => {
        console.log("Selected Range:", dates);
        console.log("Formatted Selected Range:", dateStrings);
    };

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
                        <div className="input-container">
                            <DatePicker.RangePicker
                                onChange={handleDateRangeChange}
                            />
                        </div>
                    </div>

                    <div className="card-container">
                        {arrayAnalitycs.map(({title, value, percentage}) => (
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

                    <div className="table-container">Table</div>
                </div>
            </div>
        </div>
    );
}
