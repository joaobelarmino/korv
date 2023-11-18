import React from "react";
import { useForm, SubmitHandler, Controller, FieldValues } from "react-hook-form";

import { Title, SForm, Container, SelectBox } from "./styles";
import { ModalFooter } from "../RegionsFilter/styles";

import { IUsers } from "../../pages/Users/types";

import InputText from "../Layout/InputText";
import Button from "../Layout/Button";
import CustomSelect from "../Layout/CustomSelect";
import UsersService from "../../services/UsersService";
import useAuth from "../../hooks/useAuth";

interface IRegistrationFormProps {
	userInfo?: IUsers;
	isEditing: boolean;
}

interface IFormInputs {
	userName: string,
	userEmail: string,
	userRole: string
}

const RegistrationForm = ({ userInfo, isEditing}: IRegistrationFormProps) => {
	const { watch, register, formState: { errors }, handleSubmit, control } = useForm<IFormInputs>({
		defaultValues: {
			userName: userInfo?.name || "",
			userEmail: userInfo?.email || "",
			userRole: userInfo?.roles.includes("KORV_ADMIN") ? "KORV_ADMIN" : "EMPLOYEE",
		}
	});
	const auth = useAuth();

	const selectOptions = [{
		label: "Administrador",
		value: "KORV_ADMIN",
	}, {
		label: "Funcionário",
		value: "EMPLOYEE",
	}];

	async function createUser(userName: string, userEmail: string, userRole: string) {
		const usersService = new UsersService(auth.token);
		const response = await usersService.createUser(userName, userEmail, "3145", userRole);

		console.log(response);
	}

	const onSubmit: SubmitHandler<IFormInputs> = async ({userName, userEmail, userRole}: IFormInputs) => {
		console.log(userEmail, userName, userRole, isEditing);
		if(!isEditing) {
			await createUser(userName, userEmail, userRole);
		}
	};

	return (
		<Container>
			<Title>{isEditing ? `Informações de ${userInfo?.name.split(" ")[0]}` : "Cadastrar novo usuário"}</Title>
			<SForm onSubmit={handleSubmit(onSubmit)} noValidate>
				<InputText
					id="userName"
					type="text"
					watch={watch}
					register={register}
					required="Esse campo é obrigatório"
					errorsFromValidations={errors}
					placeholder="Nome do usuário"
					isFullWidth
				/>
				<InputText
					id="userEmail"
					type="email"
					watch={watch}
					register={register}
					required="Esse campo é obrigatório"
					errorsFromValidations={errors}
					placeholder="Email do usuário"
					isFullWidth
				/>
				<SelectBox>
					<Controller
						control={control}
						render={({field}) => (
							<CustomSelect
								label="Cargo"
								options={selectOptions}
								customDefaultValue={selectOptions.find(c => c.value === field.value)}
								onChange={val => field.onChange(val.value)}
								inputRef={field.ref}
							/>
						)}
						name="userRole"
					/>
				</SelectBox>
				<ModalFooter>
					<Button type="submit" text="Salvar" isFullWidth  />
				</ModalFooter>
			</SForm>
		</Container>
	);
};

export default RegistrationForm;
