import React from 'react';
import CartRecommendationContainer from './styles';

function CartRecommendation({ title, subtitle, description, imgSrc }) {
    return (
        <CartRecommendationContainer>
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
            <p>{description}</p>
            <img src={imgSrc} />
            <button>Saiba mais</button>
        </CartRecommendationContainer>
    );
}

export default CartRecommendation;
