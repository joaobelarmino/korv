export interface IRoomCardStatus {
	sensors: {
		id: number,
		type: "eletric" | "lock",
		status: boolean
		name: string,
		isActivated: boolean,
		localId: number,
	}[]
}
