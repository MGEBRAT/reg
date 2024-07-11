import { CRUD } from '@/src/shared/api'
import { TLoginResponse, TRegisterResponse } from './types'
import { TLogin, TRegister } from '../model/types'

export const Api = {
    login: async (data: TLogin) => {
        try {
            const response = await CRUD.create<TLoginResponse>('api/auth/local', {
                body: JSON.stringify(data)
            });
            return response;
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // rethrow the error for handling in the calling code
        }
    },

    register: async (data: TRegister) => {
        try {
            const response = await CRUD.create<TRegisterResponse>('api/auth/local/register', {
                body: JSON.stringify(data)
            });
            return response;
        } catch (error) { 
            console.error('123цй', error);
            throw error; // rethrow the error for handling in the calling code
        }
    }
}