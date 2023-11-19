import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: 1rem;
	line-height: 1.5rem;
	color: ${({ theme }) => theme.colors.dark.black};
	margin-bottom: 0.5rem;
`;
