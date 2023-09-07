import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
	position: sticky;
	z-index: 3;
	top: 0;
	width: calc(100% + 2rem);
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	background-color: ${({ theme }) => theme.colors.primary.light};
	padding: 1rem;
	cursor: pointer;

	button {
		background-color: transparent;
		border: none;
	}

	@media screen and (min-width: 768px) {
		position: relative;
		background-color: transparent;
		padding: 0;
		width: fit-content;
		transform: none;
		height: 1.25rem;
	}
`;

export const HamburguerIcon = styled.button`
	background-color: transparent;
	border: none;

	div {
		transition: all ease-in-out 400ms;
		width: 2rem;
		height: 0.25rem;
		background: #000;
		border-radius: 1rem;
	}

	div + div {
		margin-top: 0.25rem;
	}

	&[data-dropdown-open="true"] {
		div {
			margin-top: 0;

			&:nth-child(1) {
				transform: rotate(45deg);
			}

			&:nth-child(2) {
				transform: translateY(-4px) rotate(-45deg);
			}

			&:last-of-type {
				opacity: 0;
			}
		}
	}
`;

export const Chevron = styled.img`
	transition: all ease-in-out 400ms;

	&.open {
		transform: rotate(-180deg);
	}
`;

export const DropdownMenu = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	padding: 0 1rem;
	width: 100%;
	transform: translateY(-200%);
	border-radius: 0 0 0.5rem 0.5rem;
	background-color: ${({ theme }) => theme.colors.primary.light};
	transition: all ease-in-out 400ms;

	&[data-dropdown-open="true"] {
		transform: translateY(0);
	}

	@media screen and (min-width: 768px) {
		padding: 0.5rem 1rem;
		top: 2rem;
		min-width: 300px;
		border-radius: 0.5rem;
		opacity: 0;
		transform: scale(0);

		&[data-dropdown-open="true"] {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

export const MenuItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem 0;
	color: ${({ theme }) => theme.colors.gray.darker};
	text-decoration: none;
	position: relative;
	transition: all ease-in-out 400ms;

	svg {
		width: 32px;
		height: 32px;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.primary.medium};
		transition: width ease-in-out 400ms;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.primary.medium};

		&::after {
			width: 100%;
		}
	}
`;

export const LabelItem = styled.span`
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 1.5rem;
`;
