import Layout from "./components/Layout"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ChampionDetail from "./pages/ChampionDetail";
import FavoriteChampions from "./pages/FavoriteChampions";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Home />} />
        <Route path="/champions/:id" element={<ChampionDetail />} />
        <Route path="/favorites" element={<FavoriteChampions />} />
      </Route>
    </Routes>
  )
}

export default App
