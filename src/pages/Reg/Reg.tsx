import { Button } from "@/src/shared/ui/Button/Button"
import './Reg.css'
import { FormEvent, useState } from "react"
import useRegister from "./model"
import { Input } from "@/src/shared/ui/Input/Input"

export default function Reg() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const { register } = useRegister()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        register({ email, username, password })
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
                    <Button text="Войти" className="login-button" />
                </div>
            </form>
        </div>
    )
}