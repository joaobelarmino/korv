import React, { ReactNode } from "react";
import { Card } from "./styles";

interface RoomCardRootProps {
	children: ReactNode,
	isOn?: boolean
}

const RoomCardRoot = ({ children, isOn = true }: RoomCardRootProps) => {
	return <Card $isOn={isOn}>
		{children}
	</Card>;
};

export default RoomCardRoot;
