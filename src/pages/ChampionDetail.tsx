import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import { GeneralUrl } from '../constants/urls/general';
import ImageGallery from 'react-image-gallery';
import Loading from '../components/Loading';
import AnimationMotion from '../components/AnimationMotion';
import { ChampionDetailType } from '../types/champion.type';
import ListTags from '../components/Tags';
import Abilities from '../components/Abilities';
import BtnFavorite from '../components/BtnFavorite';
import PageTransition from '../components/PageTransition';
import useChampions from '../hooks/useChampions';

const ChampionDetail = (): JSX.Element => {
  const params = useParams()
  const { champions } = useChampions()
  const [detailChampion, setDetailChampion] = useState<ChampionDetailType>({} as ChampionDetailType)
  const [loading, setLoading] = useState<boolean>(false)
  const [seeMore, setSeeMore] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    if (params.id) {
      const getChampionDetail = async (id: string) => {
        try {
          setLoading(true)
          const response = await axios.get(GeneralUrl.CHAMPION_DETAIL_DATA_URL.replace('{id}', id), {
            signal: controller.signal
          })
          const { data: responseDetail } = response.data
          isMounted && setDetailChampion(responseDetail[id])
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      getChampionDetail(params.id.trim())
    }

    window.scrollTo(0, 0)
    return () => {
      isMounted = false
      controller.abort()
    }

  }, [champions, params.id])

  const renderCarousel = (): JSX.Element => {
    const { skins } = detailChampion;

    const items = skins.map((item, i) => ({
      original: GeneralUrl.CHAMPION_SPLASH_IMAGE_URL
        .replace('{id}', detailChampion.id)
        .replace('{num}', `${item.num}`),
      thumbnail: GeneralUrl.CHAMPION_SPLASH_IMAGE_URL
        .replace('{id}', detailChampion.id)
        .replace('{num}', `${item.num}`),
      description: i === 0 ? detailChampion.name : item.name
    }))

    return (
      <AnimationMotion>
        <ImageGallery
          items={items}
          lazyLoad={true}
          autoPlay={true}
          infinite={true}
          showPlayButton={false}
          thumbnailPosition='left'
          slideInterval={10000}
        />
      </AnimationMotion>
    )
  }

  if (loading) return <Loading full={true} />

  return (
    <>
      {
        params.id && typeof detailChampion === 'object' && Object.keys(detailChampion).length > 0
        &&
        <PageTransition>
          <div className="champion-details pb-10">
            <div className="champion-details__banner">
              <img
                className='champion-details__splash--bg'
                src={GeneralUrl.CHAMPION_SPLASH_IMAGE_URL
                  .replace('{id}', detailChampion.id)
                  .replace('{num}', '0')}
                alt={detailChampion.id}
              />
            </div>
            <div className="champion-details__content">
              <div className="max-w-6xl w-full mx-auto pt-10 px-4">
                <AnimationMotion>
                  <div className="champion-details__splash relative">
                    <img
                      className="champion-details__splash--img"
                      src={GeneralUrl.CHAMPION_SPLASH_IMAGE_URL
                        .replace('{id}', detailChampion.id)
                        .replace('{num}', '0')}
                      alt={detailChampion.id}
                    />
                    <BtnFavorite
                      data={{
                        id: detailChampion.id,
                        name: detailChampion.name,
                        title: detailChampion.title,
                        tags: detailChampion.tags
                      }}
                    />
                  </div>
                </AnimationMotion>
                <div className="text-center mb-10">
                  <span className='text-xl uppercase'>{detailChampion.title}</span>
                  <h2 className='text-6xl font-bold uppercase'>{detailChampion.name}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="text-center my-6 md:my-0">
                    <span className='block pb-2 text-xs'>ROLE</span>
                    <ListTags championTags={detailChampion.tags} />
                  </div>
                  <div className="text-center mx-auto">
                    <span className='block pb-2 text-xs'>CHARACTER</span>
                    <div className='overflow-hidden'>
                      <img
                        className='scale-125'
                        src={GeneralUrl.CHAMPION_MINI_IMAGE_URL.replace('{id}', detailChampion.image.full)}
                        alt={detailChampion.name} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-8 mb-10">
                  <div className="mb-6 max-w-md mx-auto">
                    <h3 className='text-xl mb-4 text-center font-bold'>LORE</h3>
                    <p className='inline' dangerouslySetInnerHTML={{ __html: (!seeMore ? detailChampion.blurb : detailChampion.lore) }}>
                    </p>
                    &nbsp;
                    <button
                      className='text-sm text-secondary'
                      onClick={() => setSeeMore(!seeMore)}
                    >
                      {!seeMore ? 'SEE MORE' : ' SEE LESS'}
                    </button>
                  </div>
                  <div className="max-w-md mx-auto">
                    <h3 className='text-xl mb-4 text-center font-bold'>ABILITIES</h3>
                    <Abilities
                      passive={detailChampion.passive}
                      spells={detailChampion.spells}
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-7xl w-full mx-auto pt-10 px-4">
                <div className="carousel-splash my-6">
                  {renderCarousel()}
                </div>
              </div>
            </div>
          </div>
        </PageTransition>
      }
    </>
  )
}

export default ChampionDetail