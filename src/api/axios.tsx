import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig
} from 'axios'

import { API_BASE_URL, ACCESS_TOKEN } from '@env'

const apiResource = () => {
	const service = axios.create({
		baseURL: `${API_BASE_URL}/`,
		withCredentials: false,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Methods': '*',
			'Access-Control-Allow-Origin': API_BASE_URL
		}
	})

	service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		if (!ACCESS_TOKEN) {
			return config
		}

		config.headers!.Authorization = 'Bearer ' + ACCESS_TOKEN

		return config
	})

	service.interceptors.response.use(
		(response: AxiosResponse) => {
			return response
		},
		(error: AxiosError) => {
			if (error?.response === undefined) {
				throw new Error('Unable to connect to internet')
			} else {
				return Promise.reject(error)
			}
		}
	)

	interface IPostProps {
		url: string
		payload?: object
	}

	return {
		get: async (url: string) => {
			try {
				const data = service.get(url)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		post: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.post(url, payload)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		patch: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.patch(url, payload)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		delete: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.delete(url, { data: payload })
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		put: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.put(url, payload)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		}
	}
}

export const _axios = apiResource()
