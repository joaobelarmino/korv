import styled from "styled-components";

export const RoomsHeader = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 3.5rem;

	button {
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
	}

	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}
`;

export const ItemsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const NumberBubble = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5rem;
	height: 1.5rem;
	border: 1px solid ${({theme}) => theme.colors.primary.medium};
	border-radius: 100%;
	color: ${({theme}) => theme.colors.primary.medium};

	span {
		font-size: 0.75rem;
		line-height: 1rem;
	}
`;
