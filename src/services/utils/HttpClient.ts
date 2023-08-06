export default class HttpClient {
	baseURL: string | URL;

	constructor(baseURL: string | URL) {
		this.baseURL = baseURL;
	}

	async makeRequest(path: string, options: {body: object, method?: string, headers?: Headers}) {
		const headers = new Headers();

		if (options.body) {
			headers.append("Content-Type", "application/json");
		}

		const response = await fetch(`${this.baseURL}${path}`, {
			method: options.method,
			body: JSON.stringify(options.body),
			headers,
		});

		let body = null;
		const contentType = response.headers.get("Content-Type");

		if (contentType && contentType.includes("application/json")) {
			body = await response.json();
		}

		if (response.ok) {
			return body;
		}

		throw new Error(body.error);
	}

	async get(path: string) {
		const response = await fetch(`${this.baseURL}${path}`);
		const contentType = response.headers.get("Content-Type");
		let body = null;

		if (contentType && contentType.includes("application/json")) {
			body = await response.json();
		}

		if (response.ok) {
			return body;
		}
	}

	post(path: string, options: {body: object, method?: string, headers?: Headers}) {
		return this.makeRequest(path, {
			method: "POST",
			body: options?.body,
			headers: options?.headers,
		});
	}
}
