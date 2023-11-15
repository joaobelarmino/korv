import React from "react";

import { Grid, UserCard, UserProfilePic, Column, UserName, UserEmail, UserRole, NoDataContainer } from "./styles";

import {ReactComponent as UserIcon} from "../../assets/imgs/user-icon-2.svg";
import {ReactComponent as NoDataFound} from "../../assets/imgs/no-data-found.svg";
import { IUsers } from "../../pages/Users/types";

const UsersGrid = ({ users }: IUsers) => {
	return (
		!users.length ? (
			<NoDataContainer>
				<span>Não encontramos usuários correspondentes.</span>
				<NoDataFound/>
			</NoDataContainer>
		): (
			<Grid>
				{users.map(user => (
					<UserCard key={user.id}>
						<UserProfilePic>
							{user.profilePic ?
								<img src={user.profilePic} alt={user.name} /> :
								<UserIcon />
							}
						</UserProfilePic>
						<Column>
							<UserName>{user.name}</UserName>
							<UserEmail>{user.email}</UserEmail>
						</Column>
						<UserRole>{user.roles.includes(import.meta.env.VITE_ADMIN_ROLE) ? "Admin." : "Func."}</UserRole>
					</UserCard>
				))}
			</Grid>
		)
	);
};

export default UsersGrid;
