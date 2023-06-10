import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListChampions from '../components/ListChampions'
import useFavoriteChampions from '../hooks/useFavoriteChampions'
import Bard from '../assets/bard.gif';
import PageTransition from '../components/PageTransition';

const FavoriteChampions = (): JSX.Element => {
  const { favoritechampions } = useFavoriteChampions()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <div className="container mx-auto py-10 px-4">
        <div className="xl:pt-2 pb-6 xl:pb-10 text-center">
          <h1 className='text-secondary text-2xl font-bold'>MY FAVORITE CHAMPIONS</h1>
        </div>
        <section className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <div className="container mx-auto">
            <ListChampions
              listChampions={favoritechampions}
              nodeNotFound={(
                <div className="flex flex-col items-center gap-2 mx-auto mt-4">
                  <span>Has no favorites.</span>
                  <span>Add some here.&nbsp;<Link className='text-secondary' to={'/'}>Champions</Link></span>
                  <img className='max-w-xs' src={Bard} alt="Bard" />
                </div>
              )}
            />
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default FavoriteChampions