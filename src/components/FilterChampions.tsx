import { ChangeEvent, useEffect, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { Tags } from '../components/Tags';
import { ChampionType } from '../types/champion.type';
import axios from '../api/axios';
import { GeneralUrl } from '../constants/urls/general';
import useChampions from '../hooks/useChampions';

const initialFilter = {
  search: '',
  tags: [] as string[]
}

const FilterChampions = (): JSX.Element => {
  const { setChampions, setLoading } = useChampions();
  const [championsFilter, setChampionsFilter] = useState<ChampionType[]>([])
  const [filter, setFilter] = useState(initialFilter)

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getChampions = async () => {
      try {
        setLoading?.(true)
        const response = await axios.get(GeneralUrl.CHAMPIONS_ALL_DATA_URL, {
          signal: controller.signal
        })
        const { data: responseChampions } = response.data
        isMounted && setChampionsFilter(Object.values(responseChampions))
      } catch (error) {
        console.log(error);
      }
    }
    getChampions()

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, search: e.target.value })
  }

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    setFilter({
      ...filter,
      tags: checked ? [...filter.tags, value] : [...filter.tags.filter(tag => tag !== value)]
    })
  }

  useEffect(() => {
    const resultFilter = championsFilter?.filter(item => (
      item.id.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()) &&
      (filter.tags.length > 0 ? item.tags.some((val: string) => filter.tags.includes(val)) : true)) //compare array of tags
    )

    setChampions?.(resultFilter)
  }, [championsFilter, filter])

  return (
    <div className="mb-8">
      <div className="relative text-gray-600 w-full mb-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-1">
          <HiSearch className="text-lg" />
        </span>
        <input
          type="search"
          name="search"
          autoFocus
          maxLength={100}
          className="py-2 text-sm text-white bg-gray-900 pl-7 focus:outline-none focus:bg-gray-800 w-full"
          placeholder="Search champions..."
          autoComplete="off"
          onChange={handleChangeSearch}
          value={filter.search}
        />
      </div>
      <div className="color-1 mb-2">
        <span>Roles:</span>
      </div>
      <div className="grid grid-cols-fit-120px gap-x-4 gap-y-2">
        {
          Tags.map(item => (
            <div className="flex gap-2 items-center" key={item.name}>
              <div className="flex">
                <input
                  type="checkbox"
                  name="tag"
                  id={item.name}
                  value={item.name}
                  className='regular-checkbox big-checkbox'
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor={item.name}></label>
              </div>
              <label className='flex' htmlFor={item.name}>
                <div className="tags mr-2">
                  {item.icon}
                </div>
                {item.name}
              </label>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default FilterChampions