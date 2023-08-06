import React from "react";
import { IThemedToaster } from "./types";
import { Container, ContentWrapper, Icon, Title, Message } from "./styles";

import errorIcon from "../../../assets/imgs/info-error-icon.svg";
import infoIcon from "../../../assets/imgs/info-icon.svg";
import successIcon from "../../../assets/imgs/check-icon.svg";

const types = {
	error: {
		icon: errorIcon,
		iconAlt: "Ícone de erro"
	},
	success: {
		icon: successIcon,
		iconAlt: "Ícone de sucesso"
	},
	info: {
		icon: infoIcon,
		iconAlt: "Ícone de informação"
	}
};

const ThemedToaster = ({message, title, type, toastConfig}: IThemedToaster) => {

	return (
		<Container data-type={type} data-visible={toastConfig?.visible}>
			<Icon src={types[type]?.icon} alt={types[type]?.iconAlt} />
			<ContentWrapper>
				<Title>{title}</Title>
				<Message>{message}</Message>
			</ContentWrapper>
		</Container>
	);
};

export default ThemedToaster;
