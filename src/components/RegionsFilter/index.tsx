import React, { useEffect, useState, useContext, useMemo } from "react";
import { useForm } from "react-hook-form";

import Button from "../Layout/Button";
import Modal from "../Modal";
import InputText from "../Layout/InputText";
import Checkbox from "../Layout/Checkbox";

import { CenteredError, Container, ErrorTitle, FiltersCounter, LinkAction, ModalBody, ModalContainer, ModalFooter, ModalGrid, ModalHeader, ModalTitle } from "./styles";
import { ReactComponent as FilterIcon } from "../../assets/imgs/filters-icon.svg";
import { ReactComponent as TrashIcon } from "../../assets/imgs/trash-icon.svg";
import { ReactComponent as NoDataIllustration } from "../../assets/imgs/no-data-illustration.svg";
import { RegionFilterContext } from "../../context/RegionsFilterProvider";

const RegionsFilter: React.FC = () => {
	const SEARCH_INPUT_ID = "region-search";
	const { register, formState: { errors }, watch } = useForm();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const {
		regionsList,
		selectedRegions,
		filtersApplied,
		setFilterParams,
		handleRemoveFilters
	} = useContext(RegionFilterContext);
	const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

	function handleFilterModal() {
		setSelectedCheckboxes(selectedRegions);
		setIsModalVisible(prev => !prev);
	}

	function handleSelectedCheckbox(id: string) {
		if (selectedCheckboxes.some((checkbox) => checkbox == id)) {
			setSelectedCheckboxes((prevState) =>
				prevState.filter((checkbox) => checkbox != id)
			);
		} else {
			setSelectedCheckboxes((prevState) => [...prevState, id]);
		}
	}

	function handleFiltersApply(e: React.FormEvent) {
		e.preventDefault();
		setIsModalVisible(false);
		setFilterParams(selectedCheckboxes);
	}

	function handleClearFilters() {
		handleRemoveFilters();
		setIsModalVisible(false);
	}

	useEffect(() => {
		setSelectedCheckboxes(selectedRegions);
	}, [selectedRegions]);

	const filteredRegions = useMemo(() => regionsList.filter((region) => (
		region.name.toLowerCase().includes(watch(SEARCH_INPUT_ID)?.toLowerCase() || "")
	)), [regionsList, watch(SEARCH_INPUT_ID)]);

	if(!regionsList.length) {
		return null;
	}

	return (
		<>
			<Container>
				<Button
					text="Filtros"
					type="button"
					variant="secondary"
					icon={FilterIcon}
					counter={filtersApplied?.length}
					onClick={handleFilterModal}
				/>
				{filtersApplied?.length && <LinkAction onClick={handleRemoveFilters}>Remover filtros</LinkAction>}
			</Container>
			{isModalVisible && (
				<Modal handleCloseModal={handleFilterModal}>
					<form onSubmit={handleFiltersApply}>
						<ModalContainer>
							<ModalHeader>
								<ModalTitle>Filtre pela região</ModalTitle>
								{!!selectedRegions.length && <FiltersCounter>{selectedRegions.length}</FiltersCounter>}
							</ModalHeader>
							<ModalBody>
								<InputText
									id={SEARCH_INPUT_ID}
									type="text"
									watch={watch}
									register={register}
									errorsFromValidations={errors}
									placeholder="Busque pelo nome da região"
									isFullWidth
								/>
								{regionsList.length && (
									<ModalGrid>
										{!filteredRegions.length ? (
											<CenteredError>
												<ErrorTitle>Não foram listadas regiões com esse nome</ErrorTitle>
												<NoDataIllustration />
											</CenteredError>
										): (
											filteredRegions.map(({ id, name }) => {
												let isChecked = false;

												if (filtersApplied) {
													isChecked = filtersApplied.includes(`${id}`);
												}

												return <Checkbox key={id} id={id} label={name} defaultChecked={isChecked} onChange={() => handleSelectedCheckbox(id)} />;
											})
										)}
									</ModalGrid>
								)}
							</ModalBody>
						</ModalContainer>
						<ModalFooter>
							<Button
								onClick={handleClearFilters}
								type="button"
								variant="secondary"
								text="Remover filtros"
								icon={TrashIcon} isFullWidth
							/>
							<Button type="submit" variant="primary" text="Salvar" isFullWidth />
						</ModalFooter>
					</form>
				</Modal>
			)}
		</>
	);
};

export default RegionsFilter;
