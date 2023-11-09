import React, { useEffect, useState } from "react";
import { useSearchParamsState } from "../../hooks/useSearchParams";
import { ReactComponent as SyncIcon } from "../../assets/imgs/sync-icon.svg";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow.svg";

import { RoomsSection, RoomsHeader, NumberBubble, ItemsContainer, RoomsGrid, SeeMore } from "./styles";
import { Text, Small } from "../../pages/Home/styles";

import Button from "../Layout/Button";
import { RoomCard } from "../RoomCard";
import { IRoomCardStatus } from "../RoomCard/RoomCardStatus/type";
import LocalesService from "../../services/LocalesService";

interface SensorsArray extends IRoomCardStatus {
	name: string,
	block: BlockSensor,
	id: number
}

interface BlockSensor {
	name: string,
	id: number
}

const RoomsGeneral: React.FC = () => {
	const [maxVisibleRooms, setMaxVisibleRooms] = useState(window.innerWidth > 936 ? 12 : 4);
	const [searchParams] = useSearchParamsState("regionFilter");
	const [sensorsArray, setSensorsArray] = useState<SensorsArray[]>([]);
	const concludedRooms = sensorsArray.filter((sensor) => (sensor.statuses.every(status => !status.enabled)));
	const pendingRoomsFullArray = sensorsArray.filter((sensor) => (sensor.statuses.some(status => status.enabled)));
	const filteredArray = pendingRoomsFullArray.slice(0, maxVisibleRooms);
	const pendingRooms = filteredArray.filter((sensor) => (sensor.statuses.some(status => status.enabled)));

	function getRoomSection (array: SensorsArray[], onlyOn: boolean): React.ReactNode {
		return array.map((sensor, index) => {
			if(onlyOn && pendingRoomsFullArray.length > maxVisibleRooms && index === filteredArray.length - 1) {
				return (
					<SeeMore key="See all">
						<span>Visualizar todos</span>
						<Arrow aria-description="Arrow illustration"/>
					</SeeMore>
				);
			}

			return (
				<RoomCard.Root key={sensor.id} isOn={onlyOn}>
					<RoomCard.Info roomName={sensor.name} blockName={sensor.block.name} />
					<RoomCard.Status statuses={sensor.statuses} />
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
		const data = await LocalesService.getLocalesList();

		setSensorsArray(data);
	}

	useEffect(() => {
		getLocalesData();
		window.addEventListener("resize", handleResizeEvent);

		return () => {
			window.removeEventListener("resize", handleResizeEvent);
		};
	}, [searchParams]);

	return (
		<>
			<RoomsSection>
				<RoomsHeader>
					<ItemsContainer>
						<Text>Salas pendentes</Text>
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
				<RoomsGrid>
					{getRoomSection(pendingRooms, true)}
				</RoomsGrid>
			</RoomsSection>
			<RoomsSection>
				<RoomsHeader>
					<Text>Salas concluídas</Text>
				</RoomsHeader>
				<RoomsGrid>
					{getRoomSection(concludedRooms, false)}
				</RoomsGrid>
			</RoomsSection>
		</>
	);
};

export default RoomsGeneral;
