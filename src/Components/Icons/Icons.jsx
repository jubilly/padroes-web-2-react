import React from 'react';
import { profile, bag } from '../../assets/image';
import { IconsContainer, IconImage } from './styles';

function Icons() {
    const icons = [profile, bag];

    return (
        <IconsContainer>
            {icons.map((icon, index) => {
                return <IconImage key={index} src={icon} />;
            })}
        </IconsContainer>
    );
}

export default Icons;
