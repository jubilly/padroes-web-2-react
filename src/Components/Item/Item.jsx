import React from 'react';
import { ItemContainer } from './styles';

function Item({ item, index }) {
    return (
        <ItemContainer key={index}>
            <p>{item.nome}</p>
            <img src={item.src} alt={item.nome} />
        </ItemContainer>
    );
}

export default Item;
