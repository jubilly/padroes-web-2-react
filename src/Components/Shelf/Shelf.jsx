import React from 'react';
import { ShelfContainer } from './styles';
import Item from '../Item/Item';

function Shelf({ items }) {
    return (
        <ShelfContainer>
            {items.map((item, index) => {
                return <Item item={item} key={index} />;
            })}
        </ShelfContainer>
    );
}

export default Shelf;
