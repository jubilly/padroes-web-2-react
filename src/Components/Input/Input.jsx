import React from 'react';
import { InputContainer } from './styles';

function Input({ placeholder, setState }) {
    const handleOnInput = (e) => {
        setState(e.target.value);
    };
    return (
        <InputContainer
            type="text"
            placeholder={placeholder}
            onInput={handleOnInput}
        />
    );
}

export default Input;
