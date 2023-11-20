import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";

import { useSearchParamsState } from "../../hooks/useSearchParams";
import useAuth from "../../hooks/useAuth";

import { ReactComponent as SyncIcon } from "../../assets/imgs/sync-icon.svg";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow.svg";
import { ReactComponent as EmptySection } from "../../assets/imgs/empty-data.svg";
import { ReactComponent as VoidSection } from "../../assets/imgs/void-illustration.svg";

import { RoomsSection, RoomsHeader, NumberBubble, ItemsContainer, RoomsGrid, SeeMore, NoLocalsToShow, NoDataTitle, NoDataText } from "./styles";
import { Text, Small } from "../../pages/Home/styles";

import { RegionFilterContext } from "../../context/RegionsFilterProvider";
import { IRegion } from "../../context/RegionsFilterProvider/types";

import Button from "../Layout/Button";
import { RoomCard } from "../RoomCard";
import { IRoomCardStatus } from "../RoomCard/RoomCardStatus/type";
import Loading from "../Layout/Loading";
import ThemedToaster from "../Layout/ThemedToaster";

import LocalesService from "../../services/LocalesService";

interface LocalsArray extends IRoomCardStatus {
	idLocal: number
	nameLocal: string,
	regionId: number,
	regionInfo?: IRegion
}

const RoomsGeneral: React.FC = () => {
	const [maxVisibleRooms, setMaxVisibleRooms] = useState(window.innerWidth > 936 ? 12 : 4);
	const [searchParams] = useSearchParamsState("regionFilter");
	const [localsArray, setLocalsArray] = useState<LocalsArray[]>([]);
	const [isLocalsLoading, setIsLocalsLoading] = useState(true);
	const concludedRooms = localsArray.filter((local) => (local.sensors.every(sensor => !sensor.status)));
	const pendingRoomsFullArray = localsArray.filter((local) => (local.sensors.some(sensor => sensor.status)));
	const filteredArray = pendingRoomsFullArray.slice(0, maxVisibleRooms);
	const pendingRooms = filteredArray.filter((local) => (local.sensors.some(sensor => sensor.status)));
	const { regionsList, isLoading: isRegionsLoading } = useContext(RegionFilterContext);
	const auth = useAuth();
	const localesService = new LocalesService(auth.token);

	function getRoomSection (array: LocalsArray[], onlyOn: boolean): React.ReactNode {
		return array.map((local, index) => {
			if(onlyOn && pendingRoomsFullArray.length > maxVisibleRooms && index === filteredArray.length - 1) {
				return (
					<SeeMore key="See all">
						<span>Visualizar todos</span>
						<Arrow aria-description="Arrow illustration"/>
					</SeeMore>
				);
			}

			if(!local.sensors.length) return null;

			return (
				<RoomCard.Root key={local.idLocal} isOn={onlyOn}>
					<RoomCard.Info roomName={local.nameLocal} blockName={local?.regionInfo?.name} />
					<RoomCard.Status sensors={local.sensors} />
				</RoomCard.Root>
			);
		});
	}

	function handleResizeEvent (event: Event) {
		const target = event.currentTarget as Window;

		if(target.innerWidth <= 936) {
			setMaxVisibleRooms(4);
		} else {
			setMaxVisibleRooms(12);
		}
	}

	async function getLocalesData() {
		try {
			if(!regionsList.length) return null;

			setIsLocalsLoading(true);
			const data: LocalsArray[] = await localesService.getLocalesList();
			const localsWithRegionData = data.map(local => {
				return {...local, regionInfo: [...regionsList].find((region) => region.id === local.regionId)};
			});

			setLocalsArray(localsWithRegionData);
		} catch (error) {
			toast.custom((t) => <ThemedToaster
				type="error"
				title={"Falha ao obter as informações dos locais"}
				message={"Houve um erro interno no servidor. Contate a equipe da CTI."}
				toastConfig={t}
			/>);
		} finally {
			setIsLocalsLoading(false);
		}
	}

	useEffect(() => {
		getLocalesData();
		window.addEventListener("resize", handleResizeEvent);

		return () => {
			window.removeEventListener("resize", handleResizeEvent);
		};
	}, [searchParams, regionsList]);

	return (
		<>
			<Loading isLoading={(isLocalsLoading || isRegionsLoading)}/>
			{!isLocalsLoading && !localsArray.length ? (
				<NoLocalsToShow>
					<div>
						<NoDataTitle>Não encontramos locais cadastrados a serem exibidos.</NoDataTitle>
						<NoDataText>Se você acredita que isso é um erro, contate a equipe da CTI.</NoDataText>
					</div>
					<EmptySection />
				</NoLocalsToShow>
			) : (
				<>
					<RoomsSection>
						<RoomsHeader>
							<ItemsContainer>
								<Text>Locais pendentes</Text>
								<NumberBubble>
									<span>
										{`${pendingRoomsFullArray.length > maxVisibleRooms
											? `${maxVisibleRooms}+`
											: pendingRoomsFullArray.length}`
										}
									</span>
								</NumberBubble>
							</ItemsContainer>
							<ItemsContainer>
								{/* {TODO: Remove mock} */}
								<Small>Última atualização há alguns segundos</Small>
								<Button icon={SyncIcon} variant="secondary" />
							</ItemsContainer>
						</RoomsHeader>
						{!pendingRooms.length && !(isLocalsLoading || isRegionsLoading) ? (
							<NoLocalsToShow>
								<NoDataTitle>Não encontramos locais pendentes :)</NoDataTitle>
								<EmptySection />
							</NoLocalsToShow>
						) : (
							<RoomsGrid>
								{getRoomSection(pendingRooms, true)}
							</RoomsGrid>
						)}
					</RoomsSection>
					<RoomsSection>
						<RoomsHeader>
							<Text>Locais concluídos</Text>
						</RoomsHeader>
						{!concludedRooms.length && !(isLocalsLoading || isRegionsLoading) ? (
							<NoLocalsToShow>
								<div>
									<NoDataTitle>Não existem locais concluídos.</NoDataTitle>
									<NoDataText>Verifique os locais pendentes listados acima!</NoDataText>
								</div>
								<VoidSection />
							</NoLocalsToShow>
						) : (
							<RoomsGrid>
								{getRoomSection(concludedRooms, false)}
							</RoomsGrid>
						)}
					</RoomsSection>
				</>
			)}
		</>
	);
};

export default RoomsGeneral;
