import { useState } from 'react';
import './AddElement.css';

export const CreateCommand = ({ onCloseTable, changeState }) => {
    const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [stateTable, setStateTable] = useState(false);
    const [input, setInput] = useState('');

    const handleNumberClick = (number) => {
        setInput((prevInput) => prevInput + number.toString());
    };

    const onEraseNumber = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    }

    const onCloseModal = () => {
        onCloseTable();
    };

    const onNext = () => {
        changeState('table', input);
    }


    return (
        <div className='aux-container'>
            <div className="modal-custom-header">
                Toma de comanda

                <button onClick={onCloseModal}>✖</button>
            </div>

        </div>
    )
}
