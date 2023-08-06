import { Toast } from "react-hot-toast/headless";

export interface IThemedToaster {
	title: string;
	message: string;
	type: "error" | "success" | "info";
	toastConfig: Toast
}
