import HttpClient from "../utils/HttpClient";

class LocalesService {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient("/");
	}

	async getLocalesList() {
		return this.httpClient.get("localesMock.json");
	}
}

export default new LocalesService();
