import { authApi, AuthModel } from '@/src/entities/Auth'
import { TLogin } from '@/src/entities/Auth/model/types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const store = AuthModel.AuthStore
    const navigate = useNavigate()
    const auth = async (data: TLogin) => {
        try {
            const result = await authApi.login(data)
            if (result.jwt) {
                store.token = result.jwt ?? ''
                store.userName = result.user?.username ?? ''
                navigate('/')
            }
        } catch (error) {
            // Обработка ошибки, например, установка сообщения об ошибке
            console.error('Ошибка при аутентификации:', error)
            setErrorMessage('Неверный логин или пароль')
        }
    }

    return { auth, errorMessage }
}