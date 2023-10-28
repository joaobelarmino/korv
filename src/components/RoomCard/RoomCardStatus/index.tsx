import React from "react";

import { Container, ChipOn, ChipOff } from "./styles";

import { ReactComponent as EletricityOn } from "../../../assets/imgs/bolt.svg";
import { ReactComponent as EletricityOff } from "../../../assets/imgs/bolt-slash.svg";
import { ReactComponent as LockOpen } from "../../../assets/imgs/lock-open.svg";
import { ReactComponent as LockClosed } from "../../../assets/imgs/lock-closed.svg";
import { IRoomCardStatus } from "./type";

const RoomCardStatus = ({statuses} : IRoomCardStatus) => {
	const enabledStatus = statuses.filter((status) => status.enabled);
	const disabledStatus = statuses.filter((status) => !status.enabled);

	return (
		<Container>
			{enabledStatus.map((status) => (
				<ChipOn key={status.type}>
					{status.type === "eletricity" ? (
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

			{disabledStatus.map((status) => (
				<ChipOff key={status.type}>
					{status.type === "eletricity" ? (
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
