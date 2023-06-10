import { ChampionType } from '../types/champion.type'
import { Link } from 'react-router-dom'
import { GeneralUrl } from '../constants/urls/general'
import ListTags from './Tags'
import BtnFavorite from './BtnFavorite'
import AnimationMotion from './AnimationMotion'

const CardChampion = ({ id, name, title, tags }: ChampionType): JSX.Element => {
  return (
    <AnimationMotion>
      <figure className='card-champion' key={id}>
        <Link to={`/champions/${id}`}>
          <div className="card-champion__thumbnail">
            <img
              src={GeneralUrl.CHAMPION_THUMBNAIL_IMAGE_URL.replace('{id}', id)}
              alt={name} />
          </div>
          <div className="card-champion__favorite">
            <BtnFavorite data={{ id, name, title, tags }} />
          </div>
          <canvas className='card-champion__canvas'></canvas>
          <div className="card-champion__body">
            <span className='champion-name text-[16px]'>{name}</span>
            <div className="card-champion__hide">
              <span className='champion-title text-[12px]'>{title}</span>
              <div className="card-champion__tags">
                {
                  <ListTags championTags={tags} />
                }
              </div>
            </div>
          </div>
        </Link>
      </figure>
    </AnimationMotion>
  )
}

export default CardChampion