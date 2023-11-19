import { styled } from "styled-components";

export const Container = styled.div<{ $fullWidth?: boolean }>`
	width: ${props => props.$fullWidth ? "100%" : "auto"};

    & + & {
        margin-top: 2rem;
    }
`;

export const InputWrapper = styled.div`
	position: relative;
	border: 2px solid ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.primary.lighter};
    border-radius: 4px;
    height: 64px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	position: relative;

	&[data-is-focused="true"] {
		border: 2px solid ${({ theme }) => theme.colors.primary.dark};
	}

	&[aria-invalid="true"] {
		border-color: ${({ theme }) => theme.colors.danger.main};
		color: ${({ theme }) => theme.colors.danger.main};

		label {
			color: ${({ theme }) => theme.colors.danger.main};
		}
	}
`;

export const Input = styled.input`
	appearance: none;
    width: 100%;
	height: 100%;
	padding: 16px 12px 0;
	border: none;
	outline: none;
	background: none;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.gray.darker};

    &[type="password"] {
        font-weight: bold;
        font-family: sans-serif;
        letter-spacing: 2px;
    }

	&:focus, &.filled {
		& + label {
			position: absolute;
			top: 8px;
			left: 12px;
			font-size: 14px;
			line-height: 16px;
			font-weight: 500;
			color: ${({ theme }) => theme.colors.primary.medium }
		}
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.primary.lighter} inset;
	}
`;

export const Label = styled.label`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary.main};
	font-family: 'Jost', sans-serif;
	letter-spacing: normal;
	font-weight: 400;
	transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	position: absolute;
	top: 18px;
	left: 12px;
	user-select: none;
	cursor: text;
`;

export const InputIcon = styled.img`
	position: absolute;
	right: 12px;
	top: 20px;
	pointer-events: fill;
`;

export const ErrorMessage = styled.span`
	display: inline-block;
	font-size: 1rem;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.danger.main};
	margin-top: 8px;
`;
