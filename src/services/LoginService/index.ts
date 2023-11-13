import HttpClient from "../utils/HttpClient";

class LoginService {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient(import.meta.env.VITE_API_URL);
	}

	async attempLogin(username: string, password: string) {
		return this.httpClient.post("/login", {body: { username, password }});
	}
}

export default new LoginService();
