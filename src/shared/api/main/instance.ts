import ky, { HTTPError } from 'ky'
import { Config } from '../../config'
import { AuthStore } from '@/src/entities/Auth/model'

declare module 'ky' {
    interface HTTPError {
        messageBack?: string
    }
}

export type RequestError = HTTPError

const api = ky.create({
    retry: 1,
    timeout: 30000,
    throwHttpErrors: true,
    prefixUrl: Config.API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Allow-Origin': '*',
        Authorization: `Bearer ${AuthStore.token || ''}`
    },
    hooks: {
        beforeRequest: [
            async () => {
                // const auth = getAuth()
                // request.headers.set('Authorization-Telegram', auth)
            }
        ],
        afterResponse: [
            (request, options, response): Response => {
                return response
            }
        ],
        beforeError: [
            async (error: HTTPError): Promise<HTTPError> => {
                try {
                    const errorData = (await error.response.json()) as {
                        error: { message: string }
                    }
                    if (errorData.error.message) {
                        error.messageBack = errorData.error.message
                    }
                    // // @ts-ignore
                    // const telegram = window.Telegram.WebApp
                    // if (telegram.initData) {
                    //     telegram.showPopup({
                    //         title: 'Ошибка',
                    //         message:
                    //             error.messageBack ||
                    //             'Произошла неизвестная ошибка'
                    //     })
                    // } else {
                    //     alert(
                    //         error.messageBack || 'Произошла неизвестная ошибка'
                    //     )
                    // }
                    return error
                } catch {
                    return error
                }
            }
        ]
    }
})

export default api