import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReactComponent as SearchIcon } from "../../assets/imgs/search-icon.svg";

import { HeaderWrap, Container, Form as SForm } from "./styles";

import Header from "../../components/Header";
import InputText from "../../components/Layout/InputText";
import Button from "../../components/Layout/Button";
import RoomsGeneral from "../../components/RoomsGeneral";

type IFormInputs = {
	searchbar: string;
};

const Home: React.FC = () => {
	const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInputs>();

	const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
		//TODO: Make request for filtered results by query.
		return data;
	};

	return (
		<>
			<HeaderWrap>
				<Header />
				<Container>
					<SForm onSubmit={handleSubmit(onSubmit)} noValidate>
						<InputText
							isFullWidth
							id="searchbar"
							placeholder="Busque por uma sala"
							register={register}
							watch={watch}
							errorsFromValidations={errors}
							required="Esse campo é obrigatorio"
						/>
						<Button icon={SearchIcon} type="submit" />
					</SForm>
				</Container>
			</HeaderWrap>
			<Container>
				<RoomsGeneral />
			</Container>
		</>
	);
};

export default Home;
