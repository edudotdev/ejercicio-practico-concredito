import React, { useRef } from 'react'
import { Input } from '../components/ui'
import { useNavigate } from "react-router-dom"

export const NewProspecto = () => {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement
		const formData = new FormData(form)

    fetch('http://localhost:3000/api/prospectos', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error creating prospecto.')
      } else {
        alert('Prospecto has been created')
        form.reset()
        return response.json()
      }
    })
    .catch(error => {
      console.error('Error:', error)
    })
	}

  const handleCancel = () => {
    const formHTML = form.current

    if(formHTML){
      const formData = new FormData(formHTML);
   
      let hasData = false;

      for (const value of formData.values()) {
        if (value && typeof value !== 'object') {
          hasData = true;
          break;
        }
        if (typeof value === 'object' && value.size > 0) {
          hasData = true;
          break;
        }
      }

      if(hasData) {
        const leaveConfirm = window.confirm('Los datos se perderan')
        if (leaveConfirm) navigate('/')
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div className='flex flex-col gap-7'>
      <header>
        <h1 className='text-xl font-semibold'>New prospecto</h1>
      </header>

      <div className='p-4 border border-gray-200 bg-gray-100 w-full rounded-xl'>
        <form ref={form} action="" onSubmit={handleSubmit} className='max-w-xl mx-auto'>
          <h2 className='text-lg font-semibold mb-3'>Information</h2>
          <div className='grid grid-cols-2 gap-2 mb-4'>
            <Input type='text' name='name' placeholder='name*' required={true} />
            <Input type='text' name='first_lastName' placeholder='first last name*' required={true} />
            <Input type='text' name='second_lastName' placeholder='second last name' />
            <Input type='number' name='phone' placeholder='phone*' required={true} />
            <Input type='text' name='rfc' placeholder='rfc*' required={true} />
          </div>
          <h2 className="text-lg font-semibold mb-3">Address</h2>
          <div className='grid grid-cols-2 gap-2 mb-4'>
            <Input type='text' name='street' placeholder='street*' required={true} />
            <Input type='text' name='street2' placeholder='street 2*' required={true} />
            <Input type='number' name='house_number' placeholder='hause number*' required={true} />
            <Input type='number' name='postal_code' placeholder='postal code*' required={true} />
          </div>

          <h2 className="text-lg font-semibold mb-3">Files</h2>
          <div className='bg-white mb-4 p-4 border-2 border-gray-300 border-dotted rounded-xl'>
            <input type="file" name='file' required multiple />
          </div>

          <div className='flex gap-2'>
            <button type='button' onClick={handleCancel} className='border w-full justify-center border-gray-300 bg-white shadow-sm hover:shadow-md hover:text-rose-500 py-2 px-3 inline-flex select-none rounded-lg transition font-semibold'>Cancel</button>
            <button type='submit' className='border w-full justify-center border-gray-600 bg-black/80 text-white shadow-sm hover:shadow-md hover:bg-black py-2 px-3 inline-flex select-none rounded-lg transition font-semibold'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
