import React from 'react'
import { useStore } from '../useStore'
import { useNavigate } from 'react-router-dom'

const Modal = ({ email }) => {
  console.log(email)
  const navigate = useNavigate()
  const modalOpen = useStore((state) => state.modalOpen)
  const setModalOpen = useStore((state) => state.setModalOpen)

  const handleModal = () => {
    setModalOpen(false)
    navigate('/login')
  }

  return (
    <div
      className={`modal modal-bottom sm:modal-middle ${
        modalOpen ? 'modal-open' : ''
      }`}>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Confirmation Email Sent</h3>
        <p className='py-4'>
          Please Confirm your email address to complete your registration. Email
          sent on {email}
        </p>
        <div className='modal-action'>
          <label onClick={handleModal} htmlFor='my-modal-6' className='btn'>
            Yay!
          </label>
        </div>
      </div>
    </div>
  )
}

export default Modal
