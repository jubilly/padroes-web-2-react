import styled from 'styled-components';

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`;

const Options = styled.ul`
    display: flex;
`;

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    text-transform: uppercase;

    p {
        margin: 21px 0;
    }
`;

export { MenuContainer, Options, Option };
