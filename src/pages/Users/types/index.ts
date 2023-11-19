export interface IUsers {
	id: number,
	name: string,
	email: string,
	roles: string[],
	activated: boolean,
	createdAt?: string | null,
	lastLoginAt?: string | null,
	profilePic?: string,
}
