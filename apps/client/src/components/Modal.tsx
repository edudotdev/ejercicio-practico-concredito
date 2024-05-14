import React from 'react'

interface Props {
  title: string
  showModal: boolean
  setShowModal: (value: boolean) => void
  children: React.ReactNode
}

export const Modal = ({ 
  title,
  showModal,
  setShowModal,
  children
}: Props) => {
  
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
      <div className='bg-white w-full max-w-lg rounded-xl border border-gray-200 shadow overflow-hidden'>
        <header className='flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <button className="border text-sm border-gray-300 bg-white shadow-sm hover:bg-gray-100 py-2 px-3 inline-flex select-none rounded-lg transition font-semibold" onClick={() => setShowModal(false)}>Cerrar</button>
        </header>
        <div className="bg-white rounded-lg p-4 z-50">
          {children}
        </div>
      </div>
    </div>
  )
}
