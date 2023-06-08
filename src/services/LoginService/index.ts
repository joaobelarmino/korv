import HttpClient from "../utils/HttpClient";

class LoginService {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient("https://reqres.in/api");
	}

	async attempLogin(email: string, password: string) {
		return this.httpClient.post("/login", {body: { email, password }});
	}
}

export default new LoginService();
