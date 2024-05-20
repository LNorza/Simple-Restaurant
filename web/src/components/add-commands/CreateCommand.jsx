import { useState } from 'react';
import './AddElement.css';
import { ArrowLeft, ArrowRight, Beef, Check, Cigarette, CircleMinus, CirclePlus, CupSoda, Notebook, NotebookPen, RotateCcw, TextSearch, Trash, Trash2, Utensils, X } from 'lucide-react';
import TableCustom from '../tableCustom/table-custom';

import SoapImage from '../../assets/Images/SoapImage.png';
import burgerImage from '../../assets/Images/PapasImages.png';
import camaronImage from '../../assets/Images/camaronImage.png';
import commands from "../../assets/Images/Commands.svg";

export const CreateCommand = ({ onCloseTable, changeState }) => {
    const headerColumns = [
        { id: 1, title: "Cantidad", dataKey: "Cantidad" },
        { id: 2, title: "Descripcion", dataKey: "NombrePlatillo" },
        { id: 3, title: "Precio Unitario", dataKey: "Precio" },
        { id: 4, title: "Importe", dataKey: "Importe" },
    ];

    const commandData = [
        { Cantidad: 2, NombrePlatillo: "Hamburguesa", Precio: '$129', Importe: "$258" },
        { Cantidad: 1, NombrePlatillo: "Papas", Precio: '$50', Importe: "$50" },
        { Cantidad: 3, NombrePlatillo: "Refresco", Precio: '$25', Importe: "$75" },
    ];


    const onCloseModal = () => {
        onCloseTable();
    };

    return (
        <div className='aux-container'>
            <div className="modal-custom-header">
                Toma de comanda

                <button onClick={onCloseModal}>✖</button>
            </div>

            <div className="main-create-command">
                <div className='div1'>
                    <div className="command-header">
                        <div className="command-option">
                            <CircleMinus size={40} />
                        </div>
                        <div className="command-option">
                            <CirclePlus size={40} />
                        </div>
                        <div className="command-option">
                            <Trash size={40} />
                            <p>Eliminar Prod</p>
                        </div>
                        <div className="command-option">
                            <Trash2 size={40} />
                            <p>Eliminar Todo</p>
                        </div>
                        <div className="command-option">
                            <p className='value-command'>1.00</p>
                        </div>
                    </div>

                    <TableCustom
                        mainPage="commands"
                        headerColumnsTable={headerColumns}
                        infoForTable={commandData}
                        nColumns={3}
                        namePage="createCommand"
                    />
                </div>

                <div className='div1'>
                    <div className="command-header">
                        <div className="command-option">
                            <Utensils size={40} />
                            <p>Todos</p>
                        </div>
                        <div className="command-option">
                            <Beef size={40} />
                            <p>Alimentos</p>
                        </div>
                        <div className="command-option">
                            <CupSoda size={40} />
                            <p>Bebidas</p>
                        </div>
                        <div className="command-option">
                            <Cigarette size={40} />
                            <p>Otros</p>
                        </div>
                        <div className="command-option">
                            <RotateCcw size={40} />
                            <p>Repetir Prod</p>
                        </div>
                    </div>

                    <div className="command-header">
                        <div className="command-option">
                            <ArrowLeft size={40} />
                        </div>
                        <div className="command-option">
                            Hamburguesa
                        </div>
                        <div className="command-option">
                            Cortes
                        </div>
                        <div className="command-option">
                            Pizzas
                        </div>
                        <div className="command-option">
                            Postres
                        </div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4">
                            <ArrowRight size={40} />
                        </div>
                    </div>

                    <div className="command-header">
                        <div className="command-option">
                            <ArrowLeft size={40} />
                        </div>
                        <div className="command-option">
                            <img src={SoapImage} alt="image" />
                            <div className='al-center'>
                                <p className='option-text-img'>Ensalda cesar</p>
                            </div>
                        </div>
                        <div className="command-option">
                            <img src={burgerImage} alt="image" />
                            <div className='al-center'>
                                <p className='option-text-img'>Papas fritas</p>
                            </div>
                        </div>
                        <div className="command-option">
                            <img src={camaronImage} alt="image" />
                            <div className='al-center'>
                                <p className='option-text-img'>Alitas de pollo</p>
                            </div>
                        </div>
                        <div className="command-option"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4"></div>
                        <div className="command-option mt-4">
                            <ArrowRight size={40} />
                        </div>
                    </div>

                    <div className="command-header">
                        <div className="command-option">
                            <NotebookPen size={40} />
                            <p>Comentario</p>
                        </div>
                        <div className="command-option">
                            <TextSearch size={40} />
                            <p>Resumen</p>
                        </div>
                        <div className="command-option">
                            <Notebook size={40} />
                            <p>Cerrar comand</p>
                        </div>
                        <div className="command-option">
                            <X size={40} />
                            <p>Cancelar</p>
                        </div>
                        <div
                            onClick={onCloseModal}
                            className="command-option"
                        >
                            <Check size={40} />
                            <p>Terminar</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
