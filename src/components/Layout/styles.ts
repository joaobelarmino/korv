import { styled } from "styled-components";

export const Wrapper = styled.div`
    max-width: 1248px;
	width: 100%;
    margin: 0 auto;

	@media screen and (max-width: 1248px) {
		padding: 0 1rem;
	}
`;

export const ContainerRoot = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 100%;
`;
