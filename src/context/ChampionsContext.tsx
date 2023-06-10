import { createContext, useEffect, useState } from 'react'
import { ChampionType } from '../types/champion.type';

const initialState = {
  champions: [],
  loading: false,
}

interface ChampionsContextType {
  champions: ChampionType[],
  loading: boolean,
  setChampions?: React.Dispatch<React.SetStateAction<ChampionType[]>>
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

const ChampionsContext = createContext<ChampionsContextType>(initialState);

export const ChampionsProvider = ({ children }: { children: JSX.Element }) => {
  const [champions, setChampions] = useState<ChampionType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    champions.length > 0 && setLoading(false)
  }, [champions])

  const values = { champions, setChampions, loading, setLoading }
  return (
    <ChampionsContext.Provider value={values}>
      {children}
    </ChampionsContext.Provider>
  );
}

export default ChampionsContext