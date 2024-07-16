import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../component/Button'

export const InviteGuestStep = ({ handleModalGuest, handleConfirmModalTrip, emailToInvite }) => {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 hover:bg-zinc-800'>
      <button onClick={handleModalGuest} type='button' className='flex items-center  gap-2 flex-1'>
        <UserRoundPlus className='size-5 text-zinc-400' />
        {emailToInvite.length > 0
          ? (
            <span className='text-zinc-100 text-lg flex-1 text-left'>
              {emailToInvite.length} pessoa(s) convidada(s)
            </span>
            )
          : (
            <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
            )}
      </button>

      <div className='w-px h-6 bg-zinc-800' />

      <Button
        onClick={handleConfirmModalTrip}
      >
        Confirmar viagem <ArrowRight />
      </Button>
    </div>
  )
}
