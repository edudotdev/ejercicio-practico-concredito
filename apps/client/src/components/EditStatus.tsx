import React, { ChangeEvent, useRef } from 'react'
import { Modal } from './Modal'
import { useParams } from 'react-router-dom'
import { PROSPECTOSTATUS } from '../types'

interface Props {
  formStatus: PROSPECTOSTATUS
  setFormStatus: (value: PROSPECTOSTATUS) => void
  showModal: boolean
  setShowModal: (value: boolean) => void
  hydrateData: () => void
}

export const EditStatus = ({
  formStatus,
  setFormStatus,
  showModal,
  setShowModal,
  hydrateData
}:Props) => {
  const { id } = useParams<{ id: string }>()
  const statusForm = useRef<HTMLFormElement>(null)


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const statusForm = event.target as HTMLFormElement
		const formData = new FormData(statusForm)

    fetch(`http://localhost:3000/api/prospectos/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({   
        "status": formData.get('status'),
        "observations": formData.get('observations')
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error on update status')
      }
      setShowModal(false)
      alert('Status changed')
      hydrateData()
      
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormStatus({
      ...formStatus,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title='Edit status'>
      <form ref={statusForm} onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div className='flex gap-4'>
          <div className='flex gap-1'>
            <input type="radio" id="sent" name="status" required onChange={handleChange} value="Sent" defaultChecked={formStatus.status === 'Sent'}/>
            <label htmlFor='sent' className='cursor-pointer'>Sent</label>
          </div>
          <div className='flex gap-1'>
            <input type="radio" id="approved" name="status" required onChange={handleChange} value="Approved" defaultChecked={formStatus.status === 'Approved'}/>
            <label htmlFor='approved' className='cursor-pointer'>Approved</label>
          </div>
          <div className='flex gap-1'>
            <input type="radio" id="declined" name="status" required onChange={handleChange} value="Declined" defaultChecked={formStatus.status === 'Declined'}/>
            <label htmlFor='declined' className='cursor-pointer'>Declined</label>
          </div>
        </div>
        <textarea name="observations" required={formStatus.status === 'Sent' ? false: true} onChange={handleChange} value={formStatus.observations || ''} className='bg-gray-50 border border-gray-300 resize-none p-3 rounded-lg w-full'></textarea>
        <button type='submit' className='bg-gray-800 hover:bg-black text-white p-3 w-full rounded-lg font-semibold transition-colors'>Update</button>
      </form>
    </Modal>
  )
}
