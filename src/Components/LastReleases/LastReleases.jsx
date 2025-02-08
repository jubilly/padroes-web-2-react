import React from 'react';
import LastReleasesContainer from './styles';
import Shelf from '../Shelf';
import { lastreleasesData } from '../../mocks/lastReleasesData';
import Title from '../Title';

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title color="#000" content="Últimos lançamentos!" />
            <Shelf items={lastreleasesData} />
        </LastReleasesContainer>
    );
}

export default LastReleases;
