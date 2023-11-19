import React from "react";
import Lottie from "react-lottie";
import spinnerSecondary from "../../../assets/lotties/spinner__purple.json";

import { LoadingWrapper, Backdrop } from "./styles";

const Loading = ({isLoading}: {isLoading: boolean}) => {
	if(!isLoading) return null;

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: spinnerSecondary,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<LoadingWrapper>
			<Backdrop/>
			<Lottie options={defaultOptions} height={128} width={128} />
		</LoadingWrapper>
	);
};

export default Loading;
