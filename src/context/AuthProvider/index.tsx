import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { IAuthProvider, IContext, IToken, IUser } from "./types";
import LoginService from "../../services/LoginService";
import { getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
	const [user, setUser] = useState<IUser | null>(() => getUserLocalStorage());

	async function authenticate (email: string, password: string) {
		const response = await LoginService.attempLogin(email, password);

		const payload = { token: response.token, email };

		setUser(payload);
		setUserLocalStorage(payload);
	}

	function isAdmin() {
		const data = getUserLocalStorage();
		const { roles } = jwtDecode<IToken>(data.token);

		if (roles.includes(import.meta.env.VITE_ADMIN_ROLE)) {
			return true;
		}

		return false;
	}

	function logout () {
		setUser(null);
		setUserLocalStorage(null);
	}

	return (
		<AuthContext.Provider value={{...user, authenticate, logout, isAdmin }}>
			{children}
		</AuthContext.Provider>
	);
};
