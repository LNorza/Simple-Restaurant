import { useState } from 'react';
import './AddElement.css';
import { Delete } from 'lucide-react';

export const AddPeopleCommand = ({ onCloseTable, changeState }) => {
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
        changeState('people', input);
    }


    return (
        <>
            <div className="modal-custom-header">
                Numero de personas

                <button onClick={onCloseModal}>✖</button>
            </div>

            <div className="number-container">
                <div className="input-number-container">
                    <input type="text"
                        className='input-number'
                        placeholder='Numero de personas'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button className='erase-btn' onClick={onEraseNumber}>
                        <Delete
                            size={40}
                        />
                    </button>
                </div>
                <div className="numeric-keypad">
                    {arrayNumbers.map((number) => (
                        <button key={number} onClick={() => handleNumberClick(number)}>
                            {number}
                        </button>
                    ))}

                    <button
                        className='btn-next wide'
                        onClick={onNext}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    )
}
