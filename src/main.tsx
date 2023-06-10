import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ChampionsProvider } from './context/ChampionsContext.tsx';
import { FavoriteChampionsProvider } from './context/FavoriteChampionsContext.tsx';
import './index.css'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChampionsProvider>
      <FavoriteChampionsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoriteChampionsProvider>
    </ChampionsProvider>
  </React.StrictMode>,
)
