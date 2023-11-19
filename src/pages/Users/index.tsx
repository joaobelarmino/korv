import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { Container, MainContent, SearchContainer, Row, HeadText } from "./styles";

import Header from "../../components/Header";
import UsersGrid from "../../components/UsersGrid";
import InputText from "../../components/Layout/InputText";
import Button from "../../components/Layout/Button";

import { IUsers } from "./types";
import RegistrationModal from "../../components/RegistrationModal";
import useAuth from "../../hooks/useAuth";
import UsersService from "../../services/UsersService";

const Users: React.FC = () => {
	const auth = useAuth();
	const [usersList, setUsersList] = useState<IUsers[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { register, formState: { errors }, watch } = useForm();
	const searchInput = watch("users-search")?.toLowerCase();
	const filteredUsers = useMemo(() => usersList.filter((user) => (
		user.name.toLowerCase().includes(searchInput) || user.email.toLowerCase().includes(searchInput)
	)), [searchInput, usersList]);

	function handleVisibleModal() {
		setIsModalVisible(prev => !prev);
	}

	useEffect(() => {
		async function getUsersList() {
			const usersService = new UsersService(auth.token);
			const users = await usersService.getUsers();

			setUsersList(users);
		}

		getUsersList();
	}, []);

	return (
		<>
			<RegistrationModal handleCloseModal={handleVisibleModal} isVisible={isModalVisible} />
			<Container>
				<Header />
				<MainContent>
					<SearchContainer>
						<InputText
							id="users-search"
							type="text"
							watch={watch}
							register={register}
							errorsFromValidations={errors}
							placeholder="Busque pelo usuário"
							isFullWidth
						/>
					</SearchContainer>
					<Row>
						<HeadText>{filteredUsers.length !== 1 ?
							`${filteredUsers.length} resultados` :
							`${filteredUsers.length} resultado`}
						</HeadText>
						<Button text="Cadastrar" type="button" variant="primary" onClick={handleVisibleModal}/>
					</Row>
					<UsersGrid users={filteredUsers}/>
				</MainContent>
			</Container>
		</>
	);
};

export default Users;
