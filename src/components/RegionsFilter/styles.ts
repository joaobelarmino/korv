import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
`;

export const LinkAction = styled.span`
	color: ${({ theme }) => theme.colors.primary.main};
	font-size: 1rem;
	line-height: 1.5rem;
	text-decoration: underline;
	cursor: pointer;
	transition: all 400ms ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.medium};
	}
`;


export const ModalContainer = styled.div`
	width: 796px;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const ModalHeader = styled.section`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const ModalTitle = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	line-height: 2.5rem;
	color: ${({ theme }) => theme.colors.dark.black};
`;

export const FiltersCounter = styled.span`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary.lighter};
	padding: 0 0.5rem;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.colors.primary.medium};
`;

export const ModalBody = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const ModalGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

export const ModalFooter = styled.section`
	display: flex;
	gap: 1rem;
	margin-top: 2.5rem;
	padding-top: 1.5rem;
	border-top: 2px solid ${({ theme }) => theme.colors.primary.main};

	@media screen and (max-width: 767px) {
		flex-direction: column-reverse;
	}
`;

export const CenteredError = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	svg {
		width: 120px;
		height: auto;
		margin-top: 1.5rem;
	}
`;

export const ErrorTitle = styled.h1`
	color: ${({ theme }) => theme.colors.dark.black};
	line-height: 1.5rem;
`;
