import { useContext } from 'react';
import FavoriteChampionsContext from "../context/FavoriteChampionsContext";

const useFavoriteChampions = () => useContext(FavoriteChampionsContext)
export default useFavoriteChampions