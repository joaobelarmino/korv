import styled from "styled-components";

export const Button = styled.button`
	width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border: none;
    margin-top: 24px;
    border-radius: 4px;
	height: 64px;

    span {
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white.default};
    }
`;
