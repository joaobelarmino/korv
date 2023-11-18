import styled from "styled-components";

export const Container = styled.div`
	width: 796px;
	max-width: 100%;
`;

export const SForm = styled.form`
	width: 100%;
	margin-top: 1.5rem;
`;

export const Title = styled.h1`
	font-size: 2rem;
	line-height: 2.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.dark.black};
`;

export const SelectBox = styled.div`
	margin-top: 1.5rem;
`;
