import styled from 'styled-components';

const InputContainer = styled.input`
    border: 1px solid #fff;
    background: transparent;
    border: 1px solid #fff;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
    &::placeholder {
        color: #fff;
        font-size: 16px;
        opacity: 0.8;
    }
    &:focus-visible {
        outline: none;
    }
    &:focus {
        border: 1px solid #c8c8c8;
    }
`;

export { InputContainer };
