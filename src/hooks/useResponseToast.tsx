import React from "react";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import ThemedToaster from "../components/Layout/ThemedToaster";

interface IUseResponseToast {
	status?: string;
	message?: string;
}

const useResponseToast = () => {
	const auth = useAuth();

	const handleToastResponse = ({status, message}: IUseResponseToast) => {
		if(!status || !message) { return null; }

		if(+status === 200) {
			toast.custom((t) => <ThemedToaster
				type="success"
				title={"Operação realizada com sucesso"}
				message={`${message}`}
				toastConfig={t}
			/>);
		} else if (+status === 400) {
			toast.custom((t) => <ThemedToaster
				type="error"
				title={"Falha na operação"}
				message={`${message}`}
				toastConfig={t}
			/>);
		} else if (+status === 401) {
			toast.custom((t) => <ThemedToaster
				type="error"
				title={"Acesso negado"}
				message={
					`Você não tem permissão para realizar essa operação.
					Iremos te redirecionar para o login em 5 segundos.`
				}
				toastConfig={t}
			/>);

			setTimeout(auth.logout, 5000);
		}

		return;
	};

	return { handleToastResponse };
};

export default useResponseToast;
