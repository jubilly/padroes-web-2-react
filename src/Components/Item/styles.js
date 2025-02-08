import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid transparent;
    gap: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    &:hover {
        border: 1px solid #000;
    }
`;

export { ItemContainer };
