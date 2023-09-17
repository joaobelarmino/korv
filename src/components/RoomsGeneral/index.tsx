import React from "react";
import { ReactComponent as SyncIcon } from "../../assets/imgs/sync-icon.svg";

import { RoomsHeader, NumberBubble, ItemsContainer } from "./styles";
import { Text, Small } from "../../pages/Home/styles";

import Button from "../Layout/Button";


const RoomsGeneral: React.FC = () => {
	return (
		<RoomsHeader>
			<ItemsContainer>
				<Text>Salas pendentes</Text>
				{/* {TODO: Remove mock} */}
				<NumberBubble>
					<span>9+</span>
				</NumberBubble>
			</ItemsContainer>
			<ItemsContainer>
				{/* {TODO: Remove mock} */}
				<Small>Última atualização há alguns segundos</Small>
				<Button icon={SyncIcon} variant="secondary"/>
			</ItemsContainer>
		</RoomsHeader>
	);
};

export default RoomsGeneral;
