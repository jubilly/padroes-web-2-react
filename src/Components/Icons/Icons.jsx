import React from 'react';
import { perfil, sacola } from '../../assets/image';
import { IconsContainer, IconImage } from './styles';

function Icons() {
    const icons = [perfil, sacola];

    return (
        <IconsContainer>
            {icons.map((icon, index) => {
                return <IconImage key={index} src={icon} />;
            })}
        </IconsContainer>
    );
}

export default Icons;
