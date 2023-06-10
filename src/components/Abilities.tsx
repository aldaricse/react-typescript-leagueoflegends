import { useState } from 'react'
import { Passive, Spell } from '../types/champion.type'
import { GeneralUrl } from '../constants/urls/general'

interface Props {
  passive: Passive,
  spells: Spell[]
}

const abilitiesKey = ['Q', 'W', 'E', 'R']

const Abilities = ({ passive, spells }: Props) => {
  const [abilitieActive, setAbilitieActive] = useState(0)

  const handleClickAbilitie = (index: number) => setAbilitieActive(index)

  return (
    <div className="champion-abilities max-w-md mx-auto">
      <ul className="flex gap-x-8 mb-4">
        <li className='flex flex-col'>
          {
            <>
              <span className='text-center text-sm'>PASSIVE</span>
              <button
                className={abilitieActive === 0 ? 'active' : ''}
                title={passive.name}
                onClick={() => handleClickAbilitie(0)}
              >
                <img
                  src={GeneralUrl.CHAMPION_PASSIVE_IMAGE_URL.replace('{id}', passive.image.full)}
                  alt={passive.name} />
              </button>
            </>
          }
        </li>
        {
          spells.map((item: Spell, i: number) => (
            <li className='flex flex-col' key={item.id}>
              <span className='text-center text-sm'>{abilitiesKey[i]}</span>
              <button
                className={abilitieActive === i + 1 ? 'active' : ''}
                title={item.name}
                onClick={() => handleClickAbilitie(i + 1)}
              >
                <img
                  src={GeneralUrl.CHAMPION_SPELL_IMAGE_URL.replace('{id}', item.id)}
                  alt={item.id} />
              </button>
            </li>
          ))
        }
      </ul>

      <div className="champion-abilities__description">
        {
          abilitieActive === 0 ?
            <>
              <h4 className='uppercase block mb-1'>{passive.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: passive.description }} />
            </>
            :
            <>
              <h4 className='uppercase block mb-1'>{spells[abilitieActive - 1].name}</h4>
              <p dangerouslySetInnerHTML={{ __html: spells[abilitieActive - 1].description }} />
            </>
        }
      </div>
    </div>
  )
}

export default Abilities