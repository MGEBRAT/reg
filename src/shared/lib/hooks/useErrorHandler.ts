// import { RequestError } from '../../api/main'

import { useCallback } from 'react'

export type ErrorHandlerType = (error: unknown) => void
function useErrorHandler(): ErrorHandlerType {
    return useCallback(() => {
        // const error = requestError as RequestError
        // // @ts-ignore
        // const telegram = window.Telegram.WebApp
        // if (telegram.initData) {
        //     telegram.showPopup({
        //         title: 'Ошибка',
        //         message: error.messageBack || 'Произошла неизвестная ошибка'
        //     })
        // } else {
        //     alert(error.messageBack)
        // }
    }, [])
}
export default useErrorHandler
