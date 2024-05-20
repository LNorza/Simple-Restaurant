import { Delete } from 'lucide-react';
import React, { useState } from 'react'
import { AddTableCommand } from './AddTableCommand';
import { AddPeopleCommand } from './AddPeopleCommand';
import { CreateCommand } from './CreateCommand';

export const AddCommand = ({ isOpen, onClose, page }) => {
    const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const [numberTable, setNumberTable] = useState("");
    const [numberPerson, setNumberPerson] = useState("");

    const [stateTable, setStateTable] = useState(false);
    const [statePeople, setStatePeople] = useState(false);
    const [input, setInput] = useState('');

    const handleChangeState = (state, value) => {
        if (state === 'table') {
            setStateTable(true);
            setNumberTable(value);
        } else {
            setStatePeople(true);
            setNumberPerson(value);
        }
    }

    const handleNumberClick = (number) => {
        setInput((prevInput) => prevInput + number.toString());
    };

    const onEraseNumber = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    }

    const onCloseModal = () => {
        onClose();
    };


    return (
        <div className="modal-custom">
            <div onClick={onCloseModal} className="overlay"></div>
            {/* <div className="modal-container"> */}
            <div className={`${stateTable && statePeople ? 'modal-container-large' : 'modal-container'}`}>
                {!stateTable &&
                    <AddTableCommand
                        onCloseTable={onCloseModal}
                        changeState={handleChangeState}
                        arrayNumbers={arrayNumbers}
                    />
                }

                {!statePeople && stateTable &&
                    <AddPeopleCommand
                        onCloseTable={onCloseModal}
                        changeState={handleChangeState}
                        arrayNumbers={arrayNumbers}
                    />
                }

                {stateTable && statePeople &&
                    <CreateCommand
                        onCloseTable={onCloseModal}
                        changeState={handleChangeState}
                        arrayNumbers={arrayNumbers}
                    />
                }

            </div>
        </div>
    )
}
