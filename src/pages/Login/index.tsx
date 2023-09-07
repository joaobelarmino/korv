import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

import { Container, Title, Subtitle, Form } from "./styles";
import { Wrapper } from "../../components/Layout/styles";
import ThemedToaster from "../../components/Layout/ThemedToaster";
import Button from "../../components/Layout/Button";
import InputText from "../../components/Layout/InputText";

interface IFormInputs {
	login: string;
	password: string;
}

const Login: React.FC = () => {
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInputs>();
	const navigate = useNavigate();
	const auth = useAuth();

	const onSubmit: SubmitHandler<IFormInputs> = async ({login, password}: IFormInputs) => {
		try {
			setIsLoading(true);
			await auth.authenticate(login, password);
		} catch {
			toast.custom((t) => <ThemedToaster
				type="error"
				title={"Login inválido"}
				message="Verifique os campos informados e tente novamente."
				toastConfig={t}
			/>);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if(auth.email) {
			navigate("/");
		}
	}, [auth]);

	return (
		<Wrapper>
			<Container>
				<Title>Bem-vindo ao <strong>Korv</strong></Title>
				<Subtitle>Otimize seu tempo de forma segura e objetiva.</Subtitle>
				<Form onSubmit={handleSubmit(onSubmit)} noValidate>
					<InputText
						isFullWidth
						id="login"
						type="email"
						placeholder="E-mail"
						register={register}
						required="Informe um e-mail para realizar o acesso."
						errorsFromValidations={errors}
						watch={watch}
					/>
					<InputText
						isFullWidth
						id="password"
						type="password"
						placeholder="Senha"
						register={register}
						required="Informe uma senha para realizar o acesso."
						errorsFromValidations={errors}
						watch={watch}
					/>
					<Link to="">Esqueceu sua senha?</Link>
					<Button isFullWidth type="submit" isLoading={isLoading} text="Entrar"/>
				</Form>
			</Container>
		</Wrapper>
	);
};

export default Login;
