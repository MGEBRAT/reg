import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './app/router'
import { QueryClientProvider } from './app/providers'

function App() {
    return (
        <QueryClientProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
