import React from 'react';
import { HeaderContainer } from './styles';
import { Icons, Logo, Menu } from '../index';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Icons />
        </HeaderContainer>
    );
}
