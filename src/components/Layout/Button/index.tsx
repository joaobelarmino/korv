import React from "react";
import Lottie from "react-lottie";
import spinnerPrimary from "../../../assets/lotties/spinner__white.json";
import spinnerSecondary from "../../../assets/lotties/spinner__purple.json";

import { Button as SButton } from "./styles";

interface ButtonProps {
	text: string;
	type?: "button" | "submit" | "reset";
	isLoading?: boolean;
	onClick?: React.MouseEventHandler;
}

const Button = ({text, type = "button", isLoading = false, onClick}: ButtonProps) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: spinnerPrimary,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<SButton onClick={onClick} type={type}>
			{isLoading ? (
				<Lottie options={defaultOptions} height={64} width={64} />
			): (
				<span>
					{text}
				</span>
			)}
		</SButton>
	);
};

export default Button;
