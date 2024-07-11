import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('@/src/pages/Reg/Reg'))
const LoginPage = lazy(() => import('@/src/pages/Login/Login'))

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <Suspense>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route
                path='/login'
                element={
                    <Suspense>
                        <LoginPage />
                    </Suspense>
                }
            />
        </Routes>
    )
}
