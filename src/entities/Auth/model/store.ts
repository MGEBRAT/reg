import { makeAutoObservable } from 'mobx'
class AuthStore {
    private _token: string
    private _userName: string
    constructor() {
        makeAutoObservable(this)
        this._token = localStorage.getItem('token') || ''
        this._userName = localStorage.getItem('userName') || ''
    }
    clear() {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        this._token = ''
        this._userName = ''
    }
    get token() {
        return this._token
    }
    get userName() {
        return this._userName
    }
    private setLocalStorageToken(token: string) {
        localStorage.setItem('token', token)
    }
    private setUserName(userName: string) {
        localStorage.setItem('userName', userName)
    }
    set token(token: string) {
        this._token = token
        this.setLocalStorageToken(token)
    }
    set userName(userName: string) {
        this._userName = userName
        this.setUserName(userName)
    }
}
export default new AuthStore()