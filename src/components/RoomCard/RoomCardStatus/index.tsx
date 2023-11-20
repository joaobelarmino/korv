import React from "react";

import { Container, ChipOn, ChipOff } from "./styles";

import { ReactComponent as EletricityOn } from "../../../assets/imgs/bolt.svg";
import { ReactComponent as EletricityOff } from "../../../assets/imgs/bolt-slash.svg";
import { ReactComponent as LockOpen } from "../../../assets/imgs/lock-open.svg";
import { ReactComponent as LockClosed } from "../../../assets/imgs/lock-closed.svg";
import { IRoomCardStatus } from "./type";

const RoomCardStatus = ({sensors} : IRoomCardStatus) => {
	const enabledStatus = sensors.filter((sensor) => sensor.status);
	const disabledStatus = sensors.filter((sensor) => !sensor.status);

	return (
		<Container>
			{enabledStatus.map((sensor) => (
				<ChipOn key={sensor.type}>
					{sensor.type === "eletric" ? (
						<>
							<EletricityOn aria-description="Eletricity on icon" />
							<span>Ligada</span>
						</>
					) : (
						<>
							<LockOpen aria-description="Padlock opened icon" />
							<span>Aberta</span>
						</>
					)}
				</ChipOn>
			))}

			{disabledStatus.map((sensor) => (
				<ChipOff key={sensor.type}>
					{sensor.type === "eletric" ? (
						<>
							<EletricityOff aria-description="Eletricity off icon" />
							<span>Desligada</span>
						</>
					) : (
						<>
							<LockClosed aria-description="Padlock closed icon" />
							<span>Fechada</span>
						</>
					)}
				</ChipOff>
			))}
		</Container>
	);
};

export default RoomCardStatus;
