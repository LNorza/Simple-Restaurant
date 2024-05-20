import { useState } from "react";
import Chart from "react-apexcharts";
import "./charts.css";

export const ColumnChart2 = () => {
    const [options, setOptions] = useState({
        chart: {
            type: "bar",
            width: "100%",
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                },
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "40%",
                distributed: true,
                borderRadius: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: [
                ["Entradas"],
                ["Platillos"],
                ["Postres"],
                ["Bebidas"],
                ["Cocteleria"],
            ],
            labels: {
                style: {
                    fontSize: "14px",
                },
            },
            axisTicks: {
                show: false,
            },

            axisBorder: {
                show: true,
            },
        },
        colors: ["#416180"],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
            seriesName: "Ventas",
        },
    });

    const [series, setSeries] = useState([
        {
            name: "Ventas",
            data: [
                5800, 1500, 3200, 3300, 2000
            ],
        },
    ]);

    return (
        <div className="container-chart">
            <h2>Costos de alimentos por categorías de platillos</h2>
            <Chart options={options} series={series} type="bar" height={400} />
        </div>
    );
};
