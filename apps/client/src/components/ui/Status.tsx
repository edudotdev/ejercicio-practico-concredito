import { clsx } from 'clsx';
import { STATUS } from '../../types'

interface Props {
  status: STATUS
  style: 'button' | 'text'
}

export const Status = ({
  status,
  style
}:Props) => {

  const appearance = clsx('text-sm font-semibold', 
  {
    'text !bg-transparent !border-none': style === 'text',
    'inline-block py-1.5 px-2.5 rounded-md': style === 'button',
    'bg-gray-200 text-gray-600 border border-gray-300': status === 'Sent',
    'bg-green-100 text-green-500 border border-green-200': status === 'Approved',
    'bg-rose-100 text-rose-500 border border-rose-200': status === 'Declined'
  })

  return (
    <div className={appearance}>
      {status}
    </div>
  )
}
