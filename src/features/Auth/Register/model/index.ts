import { authApi, AuthModel } from '@/src/entities/Auth'
import { TRegister } from '@/src/entities/Auth/model/types'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
    const navigate = useNavigate()
    const store = AuthModel.AuthStore
    const register = async (data: TRegister) => {
        try {
            const result = await authApi.register(data)
            if (result) {
                store.token = result.jwt ?? ''
                store.userName = result.user?.username ?? ''
                navigate('/')
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error)
        }
    }
    return { register }
}
export default useRegister