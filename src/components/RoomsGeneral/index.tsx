import React, { useEffect, useState } from "react";
import { ReactComponent as SyncIcon } from "../../assets/imgs/sync-icon.svg";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow.svg";

import { RoomsSection, RoomsHeader, NumberBubble, ItemsContainer, RoomsGrid, SeeMore } from "./styles";
import { Text, Small } from "../../pages/Home/styles";

import Button from "../Layout/Button";
import { RoomCard } from "../RoomCard";
import { IRoomCardStatus } from "../RoomCard/RoomCardStatus/type";

interface SensorsArray extends IRoomCardStatus {
	name: string,
	block: string,
	id: number
}

const RoomsGeneral: React.FC = () => {
	const [maxVisibleRooms, setMaxVisibleRooms] = useState(window.innerWidth > 936 ? 12 : 4);
	const [sensorsArray, setSensorsArray] = useState<SensorsArray[]>([
		{ name: "Sala C01", block: "Bloco A", id: 1, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C02", block: "Bloco A", id: 2, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C03", block: "Bloco A", id: 3, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C04", block: "Bloco A", id: 4, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C05", block: "Bloco A", id: 5, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C06", block: "Bloco A", id: 6, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C07", block: "Bloco A", id: 7, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C08", block: "Bloco A", id: 8, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C09", block: "Bloco A", id: 9, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C10", block: "Bloco A", id: 10, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C11", block: "Bloco A", id: 11, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C12", block: "Bloco A", id: 12, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.round(Math.random())) }] },
		{ name: "Sala C13", block: "Bloco A", id: 13, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] },
		{ name: "Sala C14", block: "Bloco A", id: 14, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] },
		{ name: "Sala C15", block: "Bloco A", id: 15, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] },
		{ name: "Sala C16", block: "Bloco A", id: 16, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] },
		{ name: "Sala C17", block: "Bloco A", id: 17, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] },
		{ name: "Sala C18", block: "Bloco A", id: 18, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] },
		{ name: "Sala C19", block: "Bloco A", id: 19, statuses: [{ type: "eletricity", enabled: Boolean(Math.round(Math.random())) }, { type: "lock", enabled: Boolean(Math.floor(Math.random())) }] }
	]);
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
					<RoomCard.Info roomName={sensor.name} blockName={sensor.block} />
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

	useEffect(() => {
		window.addEventListener("resize", handleResizeEvent);

		return () => {
			window.removeEventListener("resize", handleResizeEvent);
		};
	}, []);

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
