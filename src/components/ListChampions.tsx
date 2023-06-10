import { useEffect, useState } from 'react';
import { ChampionType } from '../types/champion.type';
import CardChampion from './CardChampion';
import Teemo from '../assets/teemo.gif';
import Loading from './Loading';

interface Props {
  listChampions: ChampionType[],
  loading?: boolean
  nodeNotFound?: JSX.Element | null
}

const ListChampions = ({ listChampions, loading = false, nodeNotFound = null }: Props): JSX.Element => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (loading) return <Loading />

  return (
    <>
      {
        mounted && (listChampions.length > 0
          ?
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8 2xl:grid-cols-7'>
            {
              listChampions.map((item: ChampionType) => <CardChampion key={item.id} {...item} />)
            }
          </div>
          : (
            nodeNotFound ? nodeNotFound : <div className="flex flex-col items-center gap-2 mx-auto mt-4">
              <span>Results not found...</span>
              <img className='max-w-xs' src={Teemo} alt="Teemo" />
            </div>
          ))
      }
    </>
  )
}

export default ListChampions