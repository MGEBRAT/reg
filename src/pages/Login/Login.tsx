import { Button } from "@/src/shared/ui/Button/Button"
import './Login.css'
import { FormEvent, useState } from "react"

import { Input } from "@/src/shared/ui/Input/Input"

export default function Reg() {
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [email, setEmail] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
 
      const response = await fetch('http://localhost:1337/api/auth/local', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier:
              email,
              password,
          }),
      });
      if (!response.ok) {
         alert('ошьебка, пароль или почта')
      }
      console.log(response)

  };
    return (
        <div className="content">
            <h1 className="main" >Вход</h1>
            <form onSubmit={onSubmit}  action="" className="form">
                <div className="inputs">
                    <p className="text">Почта</p>
                    <Input placeholder="Glent@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}   />
                    <p className="text">Пароль</p>
                    <Input placeholder="123456789" type="text" value={password} onChange={(e) => setPassword(e.target.value)}   />
                </div>
                <div className="buttons">
                    <Button text="Войти" className="reg-button" />
                </div>
            </form>
        </div>
    )
}