import React, { useEffect, useState } from 'react';
import { SearchContainer } from './styles';
import Input from '../Input';
import { books } from '../../mocks/searchData';
import { lowercase } from '../../utils';
import Shelf from '../Shelf';
import Title from '../Title';
import SubTitle from '../SubTitle';

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        if (inputValue === '') return setSearchValue([]);
        const response = books.filter((book) => {
            const searchValue = lowercase(inputValue);
            return lowercase(book.nome).includes(searchValue);
        });
        setSearchValue(response);
    }, [inputValue]);

    console.log('searchValue', searchValue);

    return (
        <SearchContainer>
            <Title color="#fff" content="Já sabe por onde começar?" />
            <SubTitle content="Encontre o seu produto!" />
            <Input
                placeholder="Digite aqui o que deseja..."
                setState={setInputValue}
            />
            {inputValue != '' && <p>Pesquisado por: {inputValue}</p>}
            {searchValue.length > 0 && (
                <>
                    <p>Resultado(s) encontrados:</p>
                    <Shelf items={searchValue} />
                </>
            )}
        </SearchContainer>
    );
}

export default Search;
