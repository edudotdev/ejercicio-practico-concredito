import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DOCUMENT, PROFILEPROSPECTO, PROSPECTOSTATUS, STATUS } from '../types'
import { ButtonLink, EditStatus } from '../components/'
import { Status } from '../components/ui'
import { useFetch } from '../hooks/useFetch'

export const Prospecto = () => {
  const { id } = useParams<{ id: string }>()
  const { data, hydrateData } = useFetch<PROFILEPROSPECTO>(`http://localhost:3000/api/prospectos/${id}`)
  const [showModal, setShowModal] = useState(false)

  const prospecto = data?.prospecto
  const document = data?.document

  const defaultStatus: STATUS = 'Sent' 
  const defaultObservations: string = ''

  const [formStatus, setFormStatus] = useState<PROSPECTOSTATUS>({ status: defaultStatus, observations: defaultObservations})

  useEffect(() => {
    setFormStatus({
      status: prospecto?.status ?? defaultStatus,
      observations: prospecto?.observations ?? defaultObservations
    })
  }, [data])

  return (
    <div className='flex flex-col gap-7'>
      <header>
        <ButtonLink url='/' text='Back' />
      </header>
      <div className='p-4 border border-gray-200 bg-gray-100 w-full rounded-xl'>
        <h2 className='text-2xl font-semibold'>Prospecto Information</h2>
        <div className='mt-4'>
        { prospecto &&
          <div className='grid md:grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2'>
              <p> <span className='font-semibold'>Name:</span> {`${prospecto.name} ${prospecto.first_lastName} ${prospecto.second_lastName}`}</p>
              <p> <span className='font-semibold'>Phone number:</span> {`${prospecto.phone}`}</p>
              <p> <span className='font-semibold'>RFC:</span> {prospecto.phone}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p> <span className='font-semibold'>Street:</span> {prospecto.street}</p>
              <p> <span className='font-semibold'>Street 2:</span> {`${prospecto.street2}`}</p>
              <p> <span className='font-semibold'>Number:</span> {`${prospecto.house_number}`}</p>
              <p> <span className='font-semibold'>Postal Code:</span> {`${prospecto.postal_code}`}</p>
            </div>
          </div>
        }
        </div>
      </div>

      <div className='p-4 border border-gray-200 bg-gray-100 w-full rounded-xl'>
        <h2 className='text-xl font-semibold '>Files</h2> 
        <div className='flex flex-col items-start'>
          {document?.map((doc: DOCUMENT) => (
            <a href={`http://localhost:3000/api/file/${doc.name}`} target='_blanck' key={doc.id} className='hover:underline hover:text-blue-500 block'>{doc.name}</a>
          ))}
        </div>
      </div>

      <div className='p-4 border border-gray-200 bg-gray-100 w-full rounded-xl'>
        <div>
          <div className='flex justify-between'>
          <h2 className='text-xl font-semibold mb-3'>Prospecto status</h2>
          <button onClick={() => {setShowModal(true)}} className='bg-gray-800 hover:bg-black shadow-sm text-white font-semibold py-2 px-4 rounded-lg transition-colors'>
            Edit
          </button>
          </div>
          { prospecto &&
            <div className='flex flex-col items-start gap-1'>
              <div className='flex items-center gap-4'>
                <p className='font-semibold'>Status:</p>
              <Status status={prospecto.status} style='text' />
              </div>
              <div className='flex flex-col gap-3 w-full'>
                <p className='font-semibold'>Observations:</p>
                <div className='w-full rounded-lg min-h-32 max-h-32 resize-none bg-white border border-gray-300 shadow-sm p-3'>
                  {prospecto.observations || ''}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      {prospecto &&
      <EditStatus 
        formStatus={formStatus} 
        setFormStatus={setFormStatus} 
        showModal={showModal} 
        setShowModal={setShowModal}
        hydrateData={hydrateData}
      />
    }
    </div>
  )
}
