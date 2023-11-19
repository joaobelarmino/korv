import styled from "styled-components";

export const Grid = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-top: 1.5rem;
`;

export const UserProfilePic = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 64px;
	height: 64px;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.colors.primary.light};
	border: 2px solid ${({ theme }) => theme.colors.primary.light};
	transition: all 1s ease-in-out;
	margin-right: 1rem;

	img {
		width: 100%;
		height: 100%;
		border-radius: 100%;
		object-fit: cover;
	}
`;

export const UserCard = styled.div`
	display: flex;
	width: 100%;
	max-width: 100%;
	height: fit-content;
	padding: 1rem;
	border: 2px solid ${({ theme }) => theme.colors.primary.light};
	background-color: ${({ theme }) => theme.colors.primary.lighter};
	border-radius: 4px;
	transition: all 400ms ease-in-out;

	@media screen and (min-width: 858px) {
		max-width: 405px;
	}

	@media screen and (max-width: 425px) {
		${UserProfilePic} {
			display: none;
		}
	}

	&:hover {
		cursor: pointer;
		border-color: ${({ theme }) => theme.colors.primary.main};
		background-color: ${({ theme }) => theme.colors.primary.light};

		${UserProfilePic} {
			border-color: ${({ theme }) => theme.colors.primary.lighter};
			background-color: ${({ theme }) => theme.colors.primary.lighter};
		}
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const UserName = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 2rem;
	color: ${({ theme }) => theme.colors.dark.black};
	max-width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	text-wrap: nowrap;
`;

export const UserEmail = styled.span`
	font-size: 1rem;
	line-height: 1.5rem;
	color: ${({ theme }) => theme.colors.dark.black};
	max-width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	text-wrap: nowrap;
`;

export const UserRole = styled.span`
	background-color: ${({ theme }) => theme.colors.primary.main};
	border-radius: 1rem;
	padding: 4px 1rem;
	color: ${({ theme }) => theme.colors.primary.lighter};
	height: fit-content;
	margin-left: auto;
`;


export const NoDataContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	margin: 3rem 0;

	svg {
		width: 50%;
		height: auto;
	}

	span {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 500;
		text-align: center;
		color: ${({ theme }) => theme.colors.dark.black};
	}
`;
