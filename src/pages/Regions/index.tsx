import React, { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useResponseToast from "../../hooks/useResponseToast";
import useAuth from "../../hooks/useAuth";

import { RegionFilterContext } from "../../context/RegionsFilterProvider";
import { IRegion } from "../../context/RegionsFilterProvider/types";

import { HeaderWrap } from "../Home/styles";
import { Container, RegionName, RowRegion, Rows } from "./styles";
import { HeadText, Row, SearchContainer } from "../Users/styles";

import {ReactComponent as TrashIcon} from "../../assets/imgs/trash-icon.svg";
import {ReactComponent as NoDataFound} from "../../assets/imgs/no-data-found.svg";

import Header from "../../components/Header";
import Button from "../../components/Layout/Button";
import Loading from "../../components/Layout/Loading";
import InputText from "../../components/Layout/InputText";
import ThemedToaster from "../../components/Layout/ThemedToaster";
import ModalRegionRegistration from "../../components/Regions/ModalRegionRegistration";
import { NoDataContainer } from "../../components/UsersGrid/styles";

import RegionsService from "../../services/RegionsService";

const Regions: React.FC = () => {
	const { regionsList, isLoading } = useContext(RegionFilterContext);
	const { register, formState: { errors }, watch } = useForm();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [currentRegionEdit, setCurrentRegionEdit] = useState<IRegion>();
	const { handleToastResponse } = useResponseToast();
	const auth = useAuth();
	const regionsService = new RegionsService(auth.token);
	const SEARCH_INPUT_ID = "region-search";

	function handleVisibleModal() {
		setCurrentRegionEdit(undefined);
		setIsModalVisible((prev) => !prev);
	}

	function handleModalEdit(region: IRegion) {
		setCurrentRegionEdit(region);
		setIsModalVisible(true);
	}

	async function createRegion(name: string) {
		try {
			setIsFetching(true);
			const { status, message } = await regionsService.createRegion(name);

			handleToastResponse({status, message});
		} catch(error) {
			toast.custom((t) => <ThemedToaster
				title="Erro na operação."
				message="Não foi possível cadastrar a região. Contate a equipe da CTI."
				type="error"
				toastConfig={t}
			/>);
		} finally {
			setIsModalVisible(false);
			setIsFetching(false);
		}
	}

	async function updateRegion(id: number, name: string) {
		try {
			setIsFetching(true);
			const { status, message } = await regionsService.updateRegion(id, name);

			handleToastResponse({status, message});
		} catch(error) {
			toast.custom((t) => <ThemedToaster
				title="Erro na operação."
				message="Não foi possível atualizar a região. Contate a equipe da CTI."
				type="error"
				toastConfig={t}
			/>);
		} finally {
			setIsModalVisible(false);
			setIsFetching(false);
		}
	}

	async function deleteRegion(id: number) {
		try {
			setIsFetching(true);
			const { status, message } = await regionsService.deleteRegion(id);

			handleToastResponse({status, message});
		} catch(error) {
			toast.custom((t) => <ThemedToaster
				title="Erro na operação."
				message="Não foi possível remover a região. Contate a equipe da CTI."
				type="error"
				toastConfig={t}
			/>);
		} finally {
			setIsFetching(false);
		}
	}

	const filteredRegions = useMemo(() => [...regionsList].filter((region) => (
		region?.name.toLowerCase().includes(watch(SEARCH_INPUT_ID)?.toLowerCase() || "")
	)), [regionsList, watch(SEARCH_INPUT_ID)]);

	return (
		<>
			{isModalVisible && (
				<ModalRegionRegistration
					regionInfo={currentRegionEdit}
					createRegion={createRegion}
					updateRegion={updateRegion}
					handleCloseModal={handleVisibleModal}
					isLoading={isFetching}
				/>
			)}
			<Loading isLoading={isLoading} />
			<HeaderWrap>
				<Header />
			</HeaderWrap>
			<Container>
				<SearchContainer>
					<InputText
						id={SEARCH_INPUT_ID}
						type="text"
						watch={watch}
						register={register}
						errorsFromValidations={errors}
						placeholder="Busque pelo nome da região"
						isFullWidth
					/>
				</SearchContainer>
				<Row>
					<HeadText>{filteredRegions.length !== 1 ?
						`${filteredRegions.length} resultados` :
						`${filteredRegions.length} resultado`}
					</HeadText>
					<Button text="Cadastrar" type="button" variant="primary" onClick={handleVisibleModal}/>
				</Row>
				<Rows>
					{(!filteredRegions.length && !isLoading) && (
						<NoDataContainer>
							<span>Não encontramos regiões para serem listadas.</span>
							<NoDataFound/>
						</NoDataContainer>
					)}
					{(!isLoading && !!filteredRegions.length) && (
						filteredRegions.map((region) => (
							<RowRegion key={region.id}>
								<RegionName onClick={() => handleModalEdit(region)}>{region.name}</RegionName>
								<Button
									type="button"
									variant="secondary"
									icon={TrashIcon}
									onClick={() => deleteRegion(region.id)}
								/>
							</RowRegion>
						))
					)}
				</Rows>
			</Container>
		</>
	);
};

export default Regions;
