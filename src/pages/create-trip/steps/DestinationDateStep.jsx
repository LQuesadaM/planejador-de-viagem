import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react'
import { Button } from '../../../component/Button'

export const DestinationDateStep = ({ isGuestOpen, handleClick }) => {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
      <div className='flex items-center  gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input
          disabled={isGuestOpen}
          type='text'
          placeholder='Para onde você vai?'
          className='bg-transparent placeholder-zinc-400 text-lg outline-none flex-1 disabled:opacity-65'
        />
      </div>
      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400' />
        <input
          disabled={isGuestOpen}
          type='text'
          placeholder='Quando?'
          className='bg-transparent placeholder-zinc-400 text-lg w-40 outline-none disabled:opacity-65'
        />
      </div>

      <div className='w-px h-6 bg-zinc-800' />

      {isGuestOpen
        ? (
          <Button onClick={handleClick} variant='secundary'>
            Alterar local/data <Settings2 />
          </Button>
          )
        : (
          <Button
            onClick={handleClick}
          >
            Continuar <ArrowRight />
          </Button>
          )}
    </div>
  )
}
