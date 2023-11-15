import HttpClient from "../utils/HttpClient";

class UsersService {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient("/");
	}

	async getUsers() {
		return this.httpClient.get("usersMock.json");
	}
}

export default new UsersService();
