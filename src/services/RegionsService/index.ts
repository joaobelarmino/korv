import HttpClient from "../utils/HttpClient";

class RegionsService {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient("/");
	}

	async getRegionsList() {
		return this.httpClient.get("regionsMock.json");
	}
}

export default new RegionsService();
