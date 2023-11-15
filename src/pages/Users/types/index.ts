export interface IUsers {
	users: {
		id: number,
		name: string,
		email: string,
		roles: string[],
		profilePic?: string
	}[]
}
