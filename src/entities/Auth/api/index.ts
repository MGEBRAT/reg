import { CRUD } from '@/src/shared/api'
import { TLoginResponse, TRegisterResponse } from './types'
import { TLogin, TRegister } from '../model/types'
export const Api = {
    login: (data: TLogin) => {
        return CRUD.create<TLoginResponse>('api/auth/local', {
            body: JSON.stringify(data)
        })
    },
    register: (data: TRegister) => {
        return CRUD.create<TRegisterResponse>('api/auth/local/register', {
            body: JSON.stringify(data)
        })
    }
}