import { styled } from "styled-components";

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.primary.dark};
    background-color: ${({ theme }) => theme.colors.white.bluish};
    border-radius: 8px;
    padding: 0 16px;
    font-size: 16px;
    height: 48px;
    color: ${({ theme }) => theme.colors.primary.main};
    outline-color: ${({ theme }) => theme.colors.primary.dark};
    text-transform: uppercase;

    &::placeholder {
        color: ${({ theme }) => theme.colors.primary.main};
        font-family: 'Jost', sans-serif;
        letter-spacing: normal;
        font-weight: 400;
        text-transform: capitalize;
    }

    &[type="password"] {
        font-weight: bold;
        font-family: sans-serif;
        letter-spacing: 2px;
    }

    & + & {
        margin-top: 32px;
    }
`;
