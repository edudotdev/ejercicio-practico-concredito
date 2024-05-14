import { Link } from 'react-router-dom'

interface Props {
  url: string
  text: string
}

export const ButtonLink = ({
  url,
  text
}:Props) => {
  return (
    <Link to={url} className='border text-sm border-gray-300 bg-white shadow-sm hover:bg-gray-100 py-2 px-3 inline-flex select-none rounded-lg transition font-semibold'>
      {text}
    </Link>
  )
}
