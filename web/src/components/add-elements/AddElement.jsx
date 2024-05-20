import { useState } from 'react';
import './AddElement.css';

export const AddElement = ({ isOpen, onClose, page }) => {
    const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [input, setInput] = useState('');

    const handleNumberClick = (number) => {
        setInput((prevInput) => prevInput + number.toString());
    };

    const onCloseModal = () => {
        onClose();
    };

    return (
        <div className="modal-custom">
            <div onClick={onCloseModal} className="overlay"></div>
            <div className="modal-container">
                <div className="modal-custom-header">
                    Selecciona la mesa

                    <button onClick={onCloseModal}>✖</button>
                </div>

                <div className="App">
                    <div className="display">{input}</div>
                    <div className="numeric-keypad">
                        {arrayNumbers.map((number) => (
                            <button key={number} onClick={() => handleNumberClick(number)}>
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
