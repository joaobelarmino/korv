import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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

	async makeRequest(path: string, options: { body?: object, method?: string, headers?: object }) {
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
			throw new Error(error.message);
		}
	}

	async get(path: string) {
		return this.makeRequest(path, { method: "GET" });
	}

	post(path: string, options: { body: object, headers?: object }) {
		return this.makeRequest(path, { method: "POST", body: options.body, headers: options.headers });
	}
}
