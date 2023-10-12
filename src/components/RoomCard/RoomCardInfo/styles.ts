import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Heading = styled.h1`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.dark.black};
`;

export const Text = styled.span`
	font-size: 1rem;
	line-height: 1.5rem;
	color: ${({ theme }) => theme.colors.dark.black};
`;
