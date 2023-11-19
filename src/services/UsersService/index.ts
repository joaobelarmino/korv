import HttpClient from "../utils/HttpClient";

class UsersService {
	httpClient: HttpClient;
	token?: string | null;

	constructor(token?: string | undefined) {
		this.token = token || null;
		this.httpClient = new HttpClient(import.meta.env.VITE_API_URL, token);
	}

	async getUsers() {
		return fetch("/usersMock.json").then((data) => data.json());
	}

	async createUser(name: string, email: string, password = "123", roles: string) {
		return this.httpClient.post("/user", {body: { name, email, password, roles: [roles] }});
	}
}

export default UsersService;
