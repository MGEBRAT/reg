import { Options } from 'ky'
import api from './instance'

// type TResponse<T> = Promise<T | undefined>
type TResponse<T> = Promise<T>
type TURL = {
    url: string
    params?: { [key: string]: string }
}
export type URL = TURL | string

const regex = /(?<=\$)\w+/g
export function urlParamsReplace(data: URL): string {
    if (typeof data === 'string') {
        return data
    }
    if (!data.url.match(regex)) {
        return data.url
    }
    if (data.url.match(regex) && data.params === undefined) {
        throw new Error('no params yet url contains $')
    }
    return data.url.replace(regex, (key: string) => {
        if (!data.params || !data.params[key]) {
            throw new Error(`key ${key} not found`)
        }
        return data.params[key]
    })
}

export function get<T>(url: URL, params?: Options): TResponse<T> {
    return api.get(urlParamsReplace(url), params).json()
}
export function create<T>(url: URL, params?: Options): TResponse<T> {
    return api.post(urlParamsReplace(url), params).json()
}
export function update<T>(url: URL, params?: Options): TResponse<T> {
    return api.put(urlParamsReplace(url), params).json()
}
export function patch<T>(url: URL, params?: Options): TResponse<T> {
    return api.patch(urlParamsReplace(url), params).json()
}
export function remove<T>(url: URL, params?: Options): TResponse<T> {
    return api.delete(urlParamsReplace(url), params).json()
}
