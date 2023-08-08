import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.gray.darker};
	height: 6rem;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 767px) {
		height: auto;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

export const Text = styled.span`
	font-size: 1rem;
	line-height: 1.5rem;
	color: ${({ theme }) => theme.colors.white.default};
`;

export const ContactsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (max-width: 767px) {
		margin-top: 1rem;
	}
`;

export const Contacts = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	div {
		display: flex;
		align-items: center;
		img {
			margin-right: 0.5rem;
		}
	}

	@media screen and (max-width: 767px) {
		margin-top: 1rem;
		gap: 0.5rem;
	}
`;
