import React from 'react';
import './styles.js';
import { MenuContainer, Options, Option } from './styles.js';

export default function Menu() {
    const options = ['Categorias', 'Minha estante', 'Favoritos', 'Sobre Nós'];

    return (
        <MenuContainer>
            <Options>
                {options.map((option, index) => {
                    return (
                        <Option key={index}>
                            <p>{option}</p>
                        </Option>
                    );
                })}
            </Options>
        </MenuContainer>
    );
}
