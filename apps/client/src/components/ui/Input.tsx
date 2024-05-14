interface Props {
  type: string
  name: string
  placeholder: string
  required?: boolean
}

export const Input = ({
  type,
  name,
  placeholder,
  required = false
}:Props) => {
  return (
    <input type={type} name={name} placeholder={placeholder} required={required} className='border text-sm border-gray-200 focus:border-gray-400 bg-white shadow-sm py-2 px-3 inline-flex select-none rounded-lg transition-colors outline-none' />
  )
}
