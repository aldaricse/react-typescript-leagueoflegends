import { HiArrowUp } from 'react-icons/hi'

const Footer = (): JSX.Element => {
  const handleClickGoUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo(0, 0)
  }
  return (
    <footer className='bg-gray-900 text-white'>
      <div className="flex justify-center items-center">
        <a href="#" onClick={handleClickGoUp} className='flex gap-2 py-4 items-center'>
          Go up
          <HiArrowUp />
        </a>
      </div>
    </footer>
  )
}

export default Footer