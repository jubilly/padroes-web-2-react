import React from 'react';
import TitleContainer from './styles';

function Title({ content, color = '#EB9B00' }) {
    return <TitleContainer color={color}>{content}</TitleContainer>;
}

export default Title;
