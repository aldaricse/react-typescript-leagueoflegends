import { createContext, useState } from 'react'
import { ChampionType } from '../types/champion.type';
import { useLocalStorage } from 'react-use';

const initialState = {
  favoritechampions: []
}

interface FavoriteChampionsContextType {
  favoritechampions: ChampionType[],
  toggleFavoriteChampions?: (data: ChampionType) => void
}

const FavoriteChampionsContext = createContext<FavoriteChampionsContextType>(initialState);

export const FavoriteChampionsProvider = ({ children }: { children: JSX.Element }) => {
  const [favLocalStorage, setFavLocalStorage] = useLocalStorage<ChampionType[]>('favorites', [])
  const [favorites, setFavorites] = useState<ChampionType[]>(favLocalStorage ?? [])

  const toggleFavoriteChampions = (data: ChampionType) => {
    const isFavorite = favorites.find(item => item.id === data.id)
    const favoritechampions = isFavorite
      ? favorites.filter(item => item.id !== data.id) //remove favorite
      : [...favorites, data]
    setFavorites(favoritechampions)
    setFavLocalStorage(favoritechampions)
  }

  const values = { favoritechampions: favorites, toggleFavoriteChampions }
  return (
    <FavoriteChampionsContext.Provider value={values}>
      {children}
    </FavoriteChampionsContext.Provider>
  );
}

export default FavoriteChampionsContext