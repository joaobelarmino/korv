import { JwtPayload } from "jwt-decode";

export interface IUser {
    email?: string;
    token?: string;
}

export interface IToken extends JwtPayload {
	roles: string[]
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
	isAdmin: () => boolean;
}

export interface IAuthProvider {
    children: JSX.Element
}
