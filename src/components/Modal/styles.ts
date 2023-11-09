import styled, { keyframes } from "styled-components";

const modalAnimationDesktop = keyframes`
	0% {
		transform: translateY(-100vh);
	}
	100% {
		transform: translateY(0);
	}
`;

const modalAnimationMobile = keyframes`
	0% {
		transform: translateY(200vh);
	}
	100% {
		transform: translateY(0);
	}
`;

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(24, 24, 27, 0.25);
	z-index: 3;
`;

export const CloseModalButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	position: absolute;
	top: 32px;
	right: 32px;
	color: ${({ theme }) => theme.colors.dark.black};
`;

export const Container = styled.div`
	position: relative;
	padding: 64px 32px 32px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.white.default};
	animation: ${modalAnimationDesktop} 400ms ease-in-out;
	max-width: 100%;
	overflow-y: auto;

	@media screen and (max-width: 767px) {
		padding: 40px 16px 16px;
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 8px 8px 0 0;
		width: 100%;
		max-height: calc(100% - 40px);
		animation-name: ${modalAnimationMobile};
	}
`;
