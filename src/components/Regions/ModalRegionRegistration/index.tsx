import React from "react";
import Modal from "../../Modal";

import { Container, SForm, Title } from "./styles";
import InputText from "../../Layout/InputText";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegion } from "../../../context/RegionsFilterProvider/types";
import { ModalFooter } from "../../RegionsFilter/styles";
import Button from "../../Layout/Button";

interface IModalRegionRegistration {
	handleCloseModal: () => void;
	regionInfo: IRegion | undefined;
	isLoading: boolean;
	createRegion: (name: string) => Promise<void>;
	updateRegion: (id: number, name: string) => Promise<void>;
}

interface IFormInputs {
	regionName: string;
}

const ModalRegionRegistration = ({handleCloseModal, regionInfo, createRegion, updateRegion, isLoading}: IModalRegionRegistration) => {
	const { watch, register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({
		defaultValues: {
			regionName: regionInfo?.name || "",
		}
	});

	const onSubmit: SubmitHandler<IFormInputs> = async ({regionName}) => {
		if(regionInfo) {
			await updateRegion(regionInfo.id, regionName);
		} else {
			await createRegion(regionName);
		}
	};

	return (
		<>
			<Modal handleCloseModal={handleCloseModal}>
				<Container>
					<Title>
						{regionInfo ? "Atualizar região" : "Cadastrar região"}
					</Title>
				</Container>
				<SForm onSubmit={handleSubmit(onSubmit)} noValidate>
					<InputText
						id="regionName"
						type="text"
						watch={watch}
						register={register}
						required="Esse campo é obrigatório"
						errorsFromValidations={errors}
						placeholder="Nome do usuário"
						isFullWidth
					/>
					<ModalFooter>
						<Button type="submit" variant="primary" text="Salvar" isLoading={isLoading} isFullWidth/>
					</ModalFooter>
				</SForm>
			</Modal>
		</>
	);
};

export default ModalRegionRegistration;
