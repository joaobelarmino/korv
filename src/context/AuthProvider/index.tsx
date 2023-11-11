import React, { createContext, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import LoginService from "../../services/LoginService";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
	const [user, setUser] = useState<IUser | null>(() => getUserLocalStorage());

	async function authenticate (email: string, password: string) {
		const response = await LoginService.attempLogin(email, password);

		const payload = { token: response.token, email, isAdmin: response.roles.includes("KORV_ADMIN") };

		setUser(payload);
		setUserLocalStorage(payload);
	}

	function logout () {
		setUser(null);
		setUserLocalStorage(null);
	}

	return (
		<AuthContext.Provider value={{...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
