import { Table, ButtonLink} from '../components/'
import { useFetch } from '../hooks/useFetch'
import { PROPSPECTO } from '../types'

export const Home = () => {
  const { data } = useFetch<PROPSPECTO[]>('http://localhost:3000/api/prospectos/')

  return (
    <div className='flex flex-col gap-7 w-full items-center'>
      <header className='flex justify-between w-full max-w-6xl'>
        <h2 className='text-2xl font-semibold'>Prospectos</h2>
        <ButtonLink url='/new-prospecto' text='New prospecto' />
      </header>
      <div className='p-4 border border-gray-200 bg-gray-100 w-full rounded-xl'>
        {data !== null &&  <Table prospectos={data} />}
      </div>
    </div>
  )
}
