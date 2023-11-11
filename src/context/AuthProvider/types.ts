export interface IUser {
    email?: string;
    token?: string;
	isAdmin?: boolean;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element
}
