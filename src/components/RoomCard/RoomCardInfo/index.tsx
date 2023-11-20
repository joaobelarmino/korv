import React from "react";

import { Container, Heading, Text } from "./styles";

interface RoomCardInfoProps {
	roomName: string,
	blockName?: string,
}

const RoomCardInfo = ({roomName, blockName = ""}: RoomCardInfoProps) => {
	return <Container>
		<Heading>{roomName}</Heading>
		<Text>{blockName}</Text>
	</Container>;
};

export default RoomCardInfo;
