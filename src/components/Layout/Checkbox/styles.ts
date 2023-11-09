import styled from "styled-components";

export const CheckboxContainer = styled.div`
	display: grid;
	grid-template-columns: 1.5rem auto;
	gap: 0.5rem;
	padding: 1.5rem 1.25rem;
	background-color: ${({ theme }) => theme.colors.primary.light};
	border-radius: 4px;
	max-width: 100%;
	width: 254px;
	position: relative;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
`;

export const Checkbox = styled.input`
	&[type="checkbox"] {
		-webkit-appearance: none;
		appearance: none;
		display: grid;
		place-content: center;
		background-color: transparent;
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid ${({ theme }) => theme.colors.primary.main };
		border-radius: 4px;
		padding: 4px;

		&::before {
			content: "";
			width: 1rem;
			height: 1rem;
			transform: scale(0);
			transition: 200ms transform ease-in-out;
			border-radius: 2px;
			box-shadow: inset 1rem 1rem ${({ theme }) => theme.colors.primary.medium };
		}

		&:checked {
			border-color: ${({ theme }) => theme.colors.primary.medium };

			&::before {
				transform: scale(1);
			}

			& + label {
				color: ${({ theme }) => theme.colors.primary.medium };
				font-weight: 500;
			}
		}
	}
`;

export const CheckboxLabel = styled.label`
	font-size: 1.25rem;
	line-height: 1.5rem;
	color: ${({ theme }) => theme.colors.dark.black };
	transition: color 200ms ease-in-out;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		display: block;
		left: 0;
		top: 0;
		cursor: pointer;
	}
`;
