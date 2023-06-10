import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { ChampionType } from "../types/champion.type"
import useFavoriteChampions from "../hooks/useFavoriteChampions"

interface Props {
  data: ChampionType,
}

const BtnFavorite = ({ data }: Props): JSX.Element => {
  const { favoritechampions, toggleFavoriteChampions } = useFavoriteChampions()
  const isFavorite = favoritechampions?.find(item => item.id === data.id)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    toggleFavoriteChampions?.(data)
  }

  return (
    <button
      className={`star ${isFavorite ? 'active' : ''}`}
      onClick={handleClick}>
      {
        isFavorite ?
          <AiFillHeart className="text-2xl text-secondary hover:scale-150" />
          :
          <AiOutlineHeart className="text-2xl text-secondary hover:scale-150" />
      }
    </button>
  )
}

export default BtnFavorite