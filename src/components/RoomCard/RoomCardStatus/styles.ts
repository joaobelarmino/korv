import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const ChipOn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 0 0.75rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.colors.primary.medium};
	color: ${({ theme }) => theme.colors.white.default};

	svg {
		width: 12px;
		height: 12px;
	}

	span {
		font-size: 1rem;
		line-height: 1.5rem;
	}
`;

export const ChipOff = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: ${({ theme }) => theme.colors.gray.dark};

	svg {
		width: 12px;
		height: 12px;
	}

	span {
		font-size: 1rem;
		line-height: 1.5rem;
	}
`;
