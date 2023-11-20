import HttpClient from "../utils/HttpClient";

class LocalesService {
	httpClient: HttpClient;
	token?: string | null;

	constructor(token?: string | undefined) {
		this.token = token || null;
		this.httpClient = new HttpClient(import.meta.env.VITE_API_URL, token);
	}

	async getLocalesList() {
		return this.httpClient.get("/locals/dashboard");
	}
}

export default LocalesService;
