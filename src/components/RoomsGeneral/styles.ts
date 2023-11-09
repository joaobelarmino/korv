import styled from "styled-components";

export const RoomsSection = styled.section`
	& + & {
		margin-top: 2.5rem;
	}

	&:last-child {
		margin-bottom: 8.5rem;
	}
`;

export const RoomsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;

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

export const RoomsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(288px, 322px));
	grid-template-rows: auto;
	gap: 16px;

	@media screen and (max-width: 1248px) {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	@media screen and (max-width: 936px) {
		flex-direction: column;
	}
`;

export const SeeMore = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border: none;
	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%239A99A3FF' stroke-width='3' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
	background-color: transparent;
	height: 120px;
	width: 100%;
	border-radius: 4px;
	transition: all ease-in-out 0.4s;
	cursor: pointer;
	color: ${({theme}) => theme.colors.gray.medium};
	font-size: 1.75rem;
	line-height: 2rem;
	font-weight: 500;

	@media screen and (max-width: 936px) {
		width: 100%
	}
`;
