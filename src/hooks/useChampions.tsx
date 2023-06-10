import { useContext } from 'react';
import ChampionsContext from "../context/ChampionsContext";

const useChampions = () => useContext(ChampionsContext)
export default useChampions