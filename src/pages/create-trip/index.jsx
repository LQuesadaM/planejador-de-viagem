import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './InviteGuestModal.jsx'
import { ConfirmTripModal } from './ConfirmTripModal.jsx'
import { DestinationDateStep } from './steps/DestinationDateStep.jsx'
import { InviteGuestStep } from './steps/InviteGuestStep.jsx'

export const CreateTripPage = () => {
  const navigate = useNavigate()

  const [isGuestOpen, setGuestOpen] = useState(false)
  const [isGuestModalOpen, setGuestModalOpen] = useState(false)
  const [emailToInvite, setEmailToInvite] = useState([])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const handleClick = () => {
    setGuestOpen(!isGuestOpen)
  }

  const handleModalGuest = () => {
    setGuestModalOpen(!isGuestModalOpen)
  }

  const handleConfirmModalTrip = () => {
    setIsConfirmTripModalOpen(!isConfirmTripModalOpen)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    if (!email) return
    if (emailToInvite.includes(email)) return
    setEmailToInvite([...emailToInvite, email])
    event.currentTarget.reset()
  }

  const removeEmailConvite = (emailToRemove) => {
    const newEmailList = emailToInvite.filter((email) => email !== emailToRemove)
    setEmailToInvite([newEmailList])
  }

  const createTrip = () => {
    navigate('/trips/123')
  }

  return (
    <div className='h-screen flex items-center justify-center bg-hero bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er' />
          <p className='text-zinc-300 text-lg'>Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          {/* Destination and date */}
          <DestinationDateStep isGuestOpen={isGuestOpen} handleClick={handleClick} />

          {/* Modal Selecionar convidados */}
          {isGuestModalOpen && (
            <InviteGuestModal
              handleModalGuest={handleModalGuest}
              handleSubmit={handleSubmit}
              emailToInvite={emailToInvite}
              removeEmailConvite={removeEmailConvite}
            />
          )}

          {/* Add dados nome e email */}
          {isConfirmTripModalOpen && (
            <ConfirmTripModal
              handleConfirmModalTrip={handleConfirmModalTrip}
              createTrip={createTrip}
              emailToInvite={emailToInvite}
              handleClick={handleClick}
            />
          )}

          {/* Who is the trip for? */}

          {isGuestOpen && (
            <InviteGuestStep
              handleModalGuest={handleModalGuest}
              handleConfirmModalTrip={handleConfirmModalTrip}
              emailToInvite={emailToInvite}
            />
          )}
        </div>

        <p className='text-sm text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos{' '}
          <a href='#' className='text-zinc-300'>
            termos de uso{' '}
          </a>{' '}
          e{' '}
          <a href='#' className='text-zinc-300'>
            políticas de privacidade.
          </a>
        </p>
      </div>
    </div>
  )
}
