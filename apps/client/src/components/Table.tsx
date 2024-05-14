import { ButtonLink } from './'
import { Status, EmptyState } from './ui'
import { PROPSPECTO } from '../types'

interface Props {
  prospectos: PROPSPECTO[]
}

export const Table = ({
  prospectos = []
}: Props) => {

  return (
    <div className='w-full border rounded-xl overflow-hidden shadow-sm'>
      {prospectos?.length > 0 ?
        <table className="table-auto w-full">
        <thead className='bg-gray-50 border-b border-gray-200'>
          <tr className=' text-left'>
            <th className='py-3 px-4'>Nombre</th>
            <th className='py-3 px-4'>Apellido</th>
            <th className='py-3 px-4 w-24'>Estatus</th>
            <th className='py-3 px-4 w-24'></th>
          </tr>
        </thead>
        <tbody className=''>
          {prospectos?.map((prospecto: PROPSPECTO) => (
            <tr className='even:bg-gray-50 odd:bg-white hover:bg-gray-100 mt-1' key={prospecto.id}>
              <td className='py-3 px-4 text-gray-700'>{prospecto.name}</td>
              <td className='py-3 px-4 text-gray-700'>{`${prospecto.first_lastName} ${prospecto.second_lastName ? prospecto.second_lastName : ''}`}</td>
              <td className='py-3 px-4 text-gray-700'><Status status={prospecto.status} style='button' /></td>
              <td className='py-3 px-4 text-gray-700'>
              <ButtonLink url={`/prospecto/${prospecto.id}`} text='View' />
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
      :
        <EmptyState />
      }
    </div>
  )
}
