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

	async updateLocalesSensors() {
		return this.httpClient.put("/sensors/status/update", {body: {}});
	}
}

export default LocalesService;
