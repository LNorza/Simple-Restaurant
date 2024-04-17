import React, { useState } from "react";
import { Loading } from "../Loading/Loading";
import { SquarePen, Trash2 } from "lucide-react";
import "./table-custom.css";

export const TableCustom = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { headerColumnsTable, infoForTable, nColumns } = props;

    const numColumns = nColumns + 1;

    console.log(numColumns);
    return (
        <div className="table-container">
            <div className="table">
                <div className={`table-display-${numColumns}-header table-header`}>
                    {headerColumnsTable.map((column) => (
                        <div className="table-header-text" key={column.id}>
                            {column.title}
                        </div>
                    ))}
                </div>

                {isLoading && <Loading />}

                <div className="data-container">
                    {infoForTable.map((row) => (
                        <div className={`table-display-${numColumns}-data info-table`} key={row.id}>
                            {/* Renderiza dinámicamente las columnas según el número de columnas */}
                            {headerColumnsTable.map((column) => (
                                <span
                                    key={`${row.id}-${column.id}`}
                                    className={column.id == 1 ? "center-info-table" : ""}
                                >
                                    {row[column.dataKey]} {/* Muestra el dato correspondiente a la columna */}
                                </span>
                            ))}

                            <div className="boton-container">
                                {/* Botón para abrir modal (pasando el ID correspondiente) */}
                                <button className="button" onClick={() => onOpenModal(row.id)}>
                                    <SquarePen size={28} color="#294B69" />
                                </button>
                                {/* Botón para eliminar (pasando el ID correspondiente) */}
                                <button className="button" onClick={() => onOpenModal(row.id)}>
                                    <Trash2 color="#294B69" size={28} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TableCustom;
