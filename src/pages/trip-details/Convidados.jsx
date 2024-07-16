import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'
import { Button } from '../../component/Button.jsx'

export const Convidados = () => {
  return (
    <div className='space-y-6'>
      <h2 className='font-bold text-xl'>Convidados</h2>

      <div className='space-y-5'>
        <div className='flex items-center justify-between'>
          <div className='space-y-1.5 max-w-60 truncate'>
            <h3 className='font-medium text-zinc-100'>Jessica White</h3>
            <a href='#' className='text-xs text-zinc-400 hover:text-zinc-200'>
              jessica.white44@yahoo.com
            </a>
          </div>
          <CircleDashed className='size-5 text-zinc-400' />
        </div>

        <div className='flex items-center justify-between'>
          <div className='space-y-1.5 max-w-60 truncate'>
            <h3 className='font-medium text-zinc-100'>Dr. Rita Pacocha</h3>
            <a href='#' className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
              lacy.stiedemann@gmail.com
            </a>
          </div>
          <CircleCheck className='size-5 text-lime-300' />
        </div>
        <div className='flex items-center justify-between'>
          <div className='space-y-1.5 max-w-60 truncate'>
            <h3 className='font-medium text-zinc-100'>Wilfred Dickens III</h3>
            <a href='#' className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
              marian.hyatt@hotmail.com
            </a>
          </div>
          <CircleCheck className='size-5 text-lime-300' />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='space-y-1.5 max-w-60 truncate'>
          <h3 className='font-medium text-zinc-100'>Rodney White</h3>
          <a href='#' className='text-xs text-zinc-400 hover:text-zinc-200'>
            ford_prosacco@hotmail.com
          </a>
        </div>
        <CircleDashed className='size-5 text-zinc-400' />
      </div>

      <Button variant='secundary' size='full'>
        <UserCog className='size-5 shrink-0' />
        Gerenciar convidados
      </Button>
    </div>
  )
}
