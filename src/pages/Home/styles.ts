import styled from "styled-components";

export const HeaderWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	margin-top: 4rem;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		margin-top: 0;
	}
`;

export const SearchbarContainer = styled.div`
	width: 100%;
	max-width: 1001px;
`;

export const Form = styled.form`
	display: flex;
	width: 100%;
	gap: 1rem;

	@media screen and (max-width: 767px) {
		button {
			width: fit-content;
		}
	}
`;
