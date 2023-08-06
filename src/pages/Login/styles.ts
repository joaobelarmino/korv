import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    font-size: 40px;
	color: ${({ theme }) => theme.colors.dark.black};
    font-weight: bold;
    line-height: 48px;
    text-align: center;

    strong {
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.primary.dark } 0%,
            ${({ theme }) => theme.colors.primary.medium } 65%,
            ${({ theme }) => theme.colors.primary.main } 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Subtitle = styled.span`
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 508px;
    width: 100%;
    margin-top: 24px;

	a {
		display: block;
		text-align: right;
		margin-top: 16px;
		color: ${({theme}) => theme.colors.primary.main};
		text-decoration: none;
		font-size: 16px;
		line-height: 24px;
		&:visited {
			color: ${({ theme }) => theme.colors.primary.main};
		}
	}
`;

export const Button = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border: none;
    margin-top: 24px;
    border-radius: 4px;
    padding: 16px 0;

    span {
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white.default};
    }
`;
