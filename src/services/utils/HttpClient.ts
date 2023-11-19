import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export default class HttpClient {
	private axiosInstance: AxiosInstance;
	private token: string | null;

	constructor(baseURL: string, token?: string) {
		this.token = token || null;
		this.axiosInstance = axios.create({
			baseURL: baseURL,
			headers: {
				"Content-Type": "application/json",
			}
		});

		this.setupInterceptors();
	}

	setupInterceptors() {
		this.axiosInstance.interceptors.request.use(config => {
			const token = this.token;

			if(token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		}, error => Promise.reject(error));
	}

	async makeRequest(path: string, options: { body?: object, method?: string, headers?: object }): Promise<AxiosResponse["data"] | Error> {
		try {
			const response = await this.axiosInstance.request({
				url: path,
				method: options.method,
				data: options.body,
				headers: options.headers
			});

			if (response.status === 200) {
				return response.data;
			}

			throw new Error(response.data.error);
		} catch (error) {
			if(error instanceof AxiosError) {
				if(error.response.status === 401) {
					return {
						status: 401,
						message: "Você não tem acesso a esse recurso ou sua sessão expirou."
					};
				}
			}
		}
	}

	async get(path: string): Promise<AxiosResponse["data"] | Error> {
		return this.makeRequest(path, { method: "GET" });
	}

	async post(path: string, options: { body: object, headers?: object }): Promise<AxiosResponse["data"] | Error> {
		return this.makeRequest(path, { method: "POST", body: options.body, headers: options.headers });
	}

	async put(path: string, options: { body: object, headers?: object }): Promise<AxiosResponse["data"] | Error> {
		return this.makeRequest(path, { method: "PUT", body: options.body, headers: options.headers});
	}
}
