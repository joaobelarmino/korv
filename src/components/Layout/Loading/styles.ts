import styled from "styled-components";

export const LoadingWrapper = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 999999999999999;
`;

export const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	backdrop-filter: blur(2px);
`;
