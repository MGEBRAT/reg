import { Button } from "@/src/shared/ui/Button/Button"
import './Reg.css'
import { FormEvent, useState } from "react"

import { Input } from "@/src/shared/ui/Input/Input"

export default function Reg() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [email, setEmail] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            })

            if (!response.ok) {
                throw new Error(`ошьебка ${response.status}`)
            }

            const data = await response.json()
            console.log('Выполнено:', data)
        } catch (error) {
            console.error('ошибка с регистрацией', error)
        }
    }
    return (
        <div className="content">
            <h1 className="main" >Регистрация</h1>
            <form onSubmit={onSubmit}  action="" className="form">
                <div className="inputs">
                    <p className="text">Имя</p>
                    <Input placeholder="Иван" type="text" value={username} onChange={(e) => setUsername(e.target.value)}  />
                    <p className="text">Почта</p>
                    <Input placeholder="Glent@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}   />
                    <p className="text">Пароль</p>
                    <Input placeholder="123456789" type="text" value={password} onChange={(e) => setPassword(e.target.value)}   />
                </div>
                <div className="buttons">
                    <Button text="Зарегистрироваться" className="reg-button" />
                    <a className="login-button" href="/login">Войти</a>
                </div>
            </form>
        </div>
    )
}