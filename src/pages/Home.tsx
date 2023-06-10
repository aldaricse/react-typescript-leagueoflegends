import { useEffect } from 'react';
import FilterChampions from '../components/FilterChampions'
import ListChampions from '../components/ListChampions'
import useChampions from '../hooks/useChampions';
import PageTransition from '../components/PageTransition';

const Home = (): JSX.Element => {
  const { champions, loading } = useChampions()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <div className="container mx-auto py-10 px-4">
        <div className="xl:pt-2 pb-6 xl:pb-10 text-center">
          <h1 className='text-secondary text-2xl font-bold'>CHOOSE YOUR CHAMPIONS</h1>
        </div>
        <section className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <aside className="lg:max-w-[200px] xl:max-w-[220px] w-full lg:sticky lg:top-[6rem] lg:self-start">
            <FilterChampions />
          </aside>
          {/* <div className="lg:max-w-[calc(100%_-_200px)] xl:max-w-[calc(100%_-_220px)] w-full lg:ml-[calc(200px_+_1rem)] xl:ml-[calc(220px_+_1rem)]"> */}
          <div className="container mx-auto">
            <ListChampions
              listChampions={champions}
              loading={loading}
            />
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default Home