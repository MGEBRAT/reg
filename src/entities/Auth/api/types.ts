export type TLoginResponse = {
    jwt?: string
    user?: {
        id?: string
        username?: string
        email?: string
        blocked?: boolean
        confirmed?: boolean
        provider?: string
        createdAt?: string
        updatedAt?: string
    }
    error?: TErrors
}

type TErrors = {
    status: number
    name: string
    message: string
}

export type TRegisterResponse = {
    jwt?: string
    user?: {
        id?: string
        username?: string
        email?: string
        blocked?: boolean
        confirmed?: boolean
        provider?: string
        createdAt?: string
        updatedAt?: string
    }
    errors?: TErrors
}