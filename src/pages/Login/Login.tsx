import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Subtitle, Form, Button } from "./styles";
import useAuth from "../../hooks/useAuth";
import InputText from "../../components/Layout";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const auth = useAuth();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//eve.holt@reqres.in
		//cityslicka
		await auth.authenticate(email, password);
	};

	useEffect(() => {
		if(auth.email) {
			navigate("/");
		}
	}, [auth]);

	return (
		<Container>
			<Title>Bem-vindo ao <strong>Cypher</strong></Title>
			<Subtitle>Otimize seu tempo de forma segura e objetiva.</Subtitle>
			<Form onSubmit={onSubmit}>
				{/* TODO: Align with @Samuel if we should use pronctuary as label and ids, or just login or something
                more generic. */}
				<InputText
					id="pronctuary-login"
					value={email}
					onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
					placeholder="Prontuário"
				/>
				<InputText
					id="password-login"
					type="password"
					value={password}
					onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
					placeholder="Senha"
				/>
				<Button type="submit">
					<span>Entrar</span>
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
