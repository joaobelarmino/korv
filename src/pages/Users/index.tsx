import React, { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { MainContent, SearchContainer, Row, HeadText } from "./styles";
import { HeaderWrap } from "../Home/styles";

import Header from "../../components/Header";
import UsersGrid from "../../components/UsersGrid";
import InputText from "../../components/Layout/InputText";
import Button from "../../components/Layout/Button";
import ThemedToaster from "../../components/Layout/ThemedToaster";
import Loading from "../../components/Layout/Loading";

import { IUsers } from "./types";
import RegistrationModal from "../../components/RegistrationModal";
import useAuth from "../../hooks/useAuth";
import UsersService from "../../services/UsersService";
import useResponseToast from "../../hooks/useResponseToast";

const Users: React.FC = () => {
	const auth = useAuth();
	const [usersList, setUsersList] = useState<IUsers[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { register, formState: { errors }, watch } = useForm();
	const searchInput = watch("users-search")?.toLowerCase();
	const filteredUsers = useMemo(() => [...usersList].filter((user) => (
		user.name.toLowerCase().includes(searchInput) || user.email.toLowerCase().includes(searchInput)
	)), [searchInput, usersList]);
	const { handleToastResponse } = useResponseToast();

	function handleVisibleModal() {
		setIsModalVisible(prev => !prev);
	}

	async function getUsersList() {
		try {
			setIsLoading(true);
			const usersService = new UsersService(auth.token);
			const users = await usersService.getUsers();

			if(users.status) {
				handleToastResponse({status: users.status, message: users.message});
			} else {
				setUsersList(users);
			}
		} catch (error) {
			toast.custom((t) => <ThemedToaster
				type="error"
				title={"Falha ao consultar usuários"}
				message={"Houve um erro interno no servidor. Contate a equipe da CTI."}
				toastConfig={t}
			/>);
		} finally {
			setIsLoading(false);
		}
	}

	//TODO: Update the usersList when create or update an user.

	useEffect(() => {
		getUsersList();
	}, []);

	return (
		<>
			<Loading isLoading={isLoading} />
			<RegistrationModal handleCloseModal={handleVisibleModal} isVisible={isModalVisible} />
			<HeaderWrap>
				<Header />
			</HeaderWrap>
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
				<UsersGrid users={filteredUsers} isLoading={isLoading}/>
			</MainContent>
		</>
	);
};

export default Users;
