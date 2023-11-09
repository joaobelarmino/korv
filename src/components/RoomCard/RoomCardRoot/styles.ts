import styled, { css } from "styled-components";

type CardProps = {
	$isOn: boolean
}

export const Card = styled.div<CardProps>`
	${({ theme, $isOn }) => css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: 1px solid ${$isOn ? theme.colors.primary.main : theme.colors.gray.light};
		background-color: ${$isOn ? theme.colors.primary.lighter : theme.colors.gray.lighter};
		padding: 1.5rem;
		height: 120px;
		width: 100%;
		border-radius: 4px;
		transition: all ease-in-out 0.4s;
		cursor: pointer;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.light}
		}
	`}

	@media screen and (max-width: 936px) {
		width: 100%
	}
`;
