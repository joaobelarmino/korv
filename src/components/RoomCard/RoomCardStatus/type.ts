export interface IRoomCardStatus {
	statuses: {
		type: "eletricity" | "lock",
		enabled: boolean
	}[]
}
