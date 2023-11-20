import styled from "styled-components";

export const Container = styled.div`
	margin-bottom: 4rem;
`;

export const Rows = styled.div`
	margin-top: 1.5rem;
`;

export const RowRegion = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};
	border-radius: 4px;
	gap: 1rem;

	button {
		width: 64px;
	}

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.primary.lighter};
	}

	& + & {
		margin-top: 1.5rem;
	}
`;

export const RegionName = styled.h3`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	width: 100%;
	color: ${({ theme }) => theme.colors.dark.black};
`;
