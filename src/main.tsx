
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.css"
import { FiltersContextProvider } from './context/FiltersContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersContextProvider>

    <App />
    </FiltersContextProvider>
)
