import React from 'react';
import { CartRecommendation, Header, LastReleases, Search } from './Components';
import AppContainer from './styles/app.style';
import { book3 } from './assets/image';

function App() {
    return (
        <AppContainer>
            <Header />
            <Search />
            <LastReleases />
            <CartRecommendation
                title={'Talvez você se interesse por'}
                subtitle={'Angular 11'}
                description={
                    'Construindo uma aplicação com a plataforma Google'
                }
                imgSrc={book3}
            />
        </AppContainer>
    );
}

export default App;
