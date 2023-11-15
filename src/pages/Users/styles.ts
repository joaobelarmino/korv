import styled from "styled-components";

export const Container = styled.div`
	margin-top: 4rem;
`;

export const MainContent = styled.div`
	margin-top: 4rem;
`;

export const SearchContainer = styled.div`
	max-width: 100%;
	width: 720px;
	margin-bottom: 2rem;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const HeadText = styled.h3`
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 2rem;
	color: ${({ theme }) => theme.colors.dark.black};
	width: 100%;
`;
