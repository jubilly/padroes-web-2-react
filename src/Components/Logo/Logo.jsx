import React from 'react';
import { logo } from '../../assets/image';
import { LogoContainer, ImageLogo } from './styles';

export default function Logo() {
    return (
        <LogoContainer>
            <ImageLogo src={logo} />
            <p>
                <strong>Amanda Prates</strong> <i>Store</i>
            </p>
        </LogoContainer>
    );
}
