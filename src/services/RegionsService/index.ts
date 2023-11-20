import HttpClient from "../utils/HttpClient";

class RegionsService {
	httpClient: HttpClient;
	token?: string | null;

	constructor(token?: string | undefined) {
		this.token = token || null;
		this.httpClient = new HttpClient(import.meta.env.VITE_API_URL, token);
	}

	async getRegionsList() {
		return this.httpClient.get("/regions");
	}

	async createRegion(name: string) {
		return this.httpClient.post("/region", {body: {name}});
	}

	async updateRegion(id: number, name: string) {
		return this.httpClient.put(`/region/${id}`, {body: {name}});
	}

	async deleteRegion(id: number) {
		return this.httpClient.delete(`/region/${id}`);
	}
}

export default RegionsService;
