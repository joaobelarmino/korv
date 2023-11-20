import styled, { keyframes } from "styled-components";

interface ITimeBar {
	progress: string;
}

const enter = keyframes`
	from {
		transform: scale(0);
	}
	to {
		transform: scale(1);
	}
`;

const leave = keyframes`
	from {
		transform: scale(1);
	}
	to {
		transform: scale(0);
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 16px;
    border-radius: 8px;
    gap: 16px;
    max-width: 100%;
	width: 425px;
	border-left: 4px solid transparent;
	transition: all 0.4s ease-in-out;
	position: relative;
	overflow: hidden;

	&[data-type="error"] {
		background-color: ${({ theme }) => theme.colors.danger.background};
		border-left-color: ${({ theme }) => theme.colors.danger.lighter};
	};

	&[data-type="success"] {
		background-color: ${({ theme }) => theme.colors.green.background};
		border-left-color: ${({ theme }) => theme.colors.green.lighter};
	}

	&[data-type="info"] {
		background-color: ${({ theme }) => theme.colors.primary.light};
		border-left-color: ${({ theme }) => theme.colors.primary.main};
	}

	&[data-visible="true"] {
		animation: ${enter} 0.4s forwards;
	}

	&[data-visible="false"] {
		animation: ${leave} 0.2s forwards;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Icon = styled.img`
	width: 32px;
	height: 32px;
`;

export const Title = styled.h1`
	font-size: 24px;
	line-height: 32px;
	color: ${({ theme }) => theme.colors.dark.black };
	font-weight: 500;
`;

export const Message = styled.p`
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.dark.black };
`;

export const TimeBar = styled.div<ITimeBar>`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 4px;
	background-color: ${({ theme }) => theme.colors.primary.light};

	&::before {
		content: "";
		display: block;
		height: 100%;
		width: ${(props) => ((props.progress))}%;
		background-color: ${({ theme }) => theme.colors.primary.medium};
	}
`;
