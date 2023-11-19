import React, { useState } from "react";

import { Grid, UserCard, UserProfilePic, Column, UserName, UserEmail, UserRole, NoDataContainer } from "./styles";

import RegistrationModal from "../RegistrationModal";

import {ReactComponent as UserIcon} from "../../assets/imgs/user-icon-2.svg";
import {ReactComponent as NoDataFound} from "../../assets/imgs/no-data-found.svg";

import { IUsers } from "../../pages/Users/types";

interface UsersGridProps {
	users: IUsers[],
	isLoading: boolean
}

const UsersGrid = ({users, isLoading}: UsersGridProps) => {
	const [currentEditingUser, setCurrentEditingUser] = useState<IUsers>();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	function handleVisibleModal() {
		setIsModalVisible(prev => !prev);
	}

	function handleEditModal(user: IUsers) {
		setCurrentEditingUser(user);
		handleVisibleModal();
	}

	return (
		!users.length && !isLoading ? (
			<NoDataContainer>
				<span>Não encontramos usuários para serem listados.</span>
				<NoDataFound/>
			</NoDataContainer>
		): (
			<>
				<RegistrationModal
					isEditing={true}
					userInfo={currentEditingUser}
					handleCloseModal={handleVisibleModal}
					isVisible={isModalVisible}
				/>
				<Grid>
					{users.map(user => (
						<UserCard key={user.id} onClick={() => handleEditModal(user)}>
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
							<UserRole>
								{user.roles.includes(import.meta.env.VITE_ADMIN_ROLE) ? "Admin." : "Func."}
							</UserRole>
						</UserCard>
					))}
				</Grid>
			</>
		)
	);
};

export default UsersGrid;
