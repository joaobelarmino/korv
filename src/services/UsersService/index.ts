import HttpClient from "../utils/HttpClient";

class UsersService {
	httpClient: HttpClient;
	token?: string | null;

	constructor(token?: string | undefined) {
		this.token = token || null;
		this.httpClient = new HttpClient(import.meta.env.VITE_API_URL, token);
	}

	async getUsers() {
		return this.httpClient.get("/users");
	}

	async createUser(name: string, email: string, password = "123", roles: string) {
		return this.httpClient.post("/user", {body: { name, email, password, roles: [roles] }});
	}

	async updateUser(id: number, name: string, email: string, roles: string) {
		return this.httpClient.put(`/user/${id}`, {body: {name, email, roles: [roles], activated: true}});
	}
}

export default UsersService;
