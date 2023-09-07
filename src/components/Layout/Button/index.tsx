import React, { FunctionComponent, SVGProps } from "react";
import Lottie from "react-lottie";
import spinnerPrimary from "../../../assets/lotties/spinner__white.json";

import { Button as SButton } from "./styles";

interface ButtonProps {
	text?: string;
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary";
	isFullWidth?: boolean;
	icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
	isLoading?: boolean;
	onClick?: React.MouseEventHandler;
}

const Button = ({
	text,
	type = "button",
	variant = "primary",
	isFullWidth = false,
	icon: Icon,
	isLoading = false,
	onClick
}: ButtonProps) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: spinnerPrimary,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<SButton onClick={onClick} type={type} $variant={variant} $fullWidth={isFullWidth}>
			{isLoading ? (
				<Lottie options={defaultOptions} height={64} width={64} />
			) : (
				<>
					{Icon && (<Icon />)}
					{text && (<span>{text}</span>)}
				</>
			)}
		</SButton>
	);
};

export default Button;
