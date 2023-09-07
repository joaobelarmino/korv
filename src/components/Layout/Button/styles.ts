import styled, { css } from "styled-components";

type ButtonProps = {
	$variant: string,
	$fullWidth: boolean,
}

export const Button = styled.button<ButtonProps>`
	${({ theme, $variant, $fullWidth }) => css`
		width: ${$fullWidth ? "100%" : "fit-content"};
		padding: 0 ${$variant === "secondary" ? "0.875rem" : "1rem"};
		border: ${$variant === "secondary" ? `2px solid ${theme.colors.primary.main}` : "none"};
		background-color: ${$variant === "primary" ? theme.colors.primary.main : "transparent"};
		color: ${$variant === "secondary" ? theme.colors.primary.main : theme.colors.white.default};

		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 100%;
		border-radius: 0.25rem;
		height: 4rem;
		gap: 1rem;
		transition: all 400ms ease-in-out;

		&:hover {
			${$variant === "secondary" && css`
				color: ${theme.colors.primary.medium};
				border-color: ${theme.colors.primary.medium};
			`}
			${$variant === "primary" && css`
				background-color: ${theme.colors.primary.medium};
			`}
		}
		&:active {
			${$variant === "secondary" && css`
				color: ${theme.colors.primary.dark};
				border-color: ${theme.colors.primary.dark};
			`}
			${$variant === "primary" && css`
				background-color: ${theme.colors.primary.dark};
			`}
		}

		span {
			font-size: 24px;
			line-height: 32px;
			font-weight: bold;
		}

		@media screen and (max-width: 767px) {
			width: 100%;
		}
	`};
`;
