import { CircleCheck } from 'lucide-react'

export const ListActivities = () => {
  return (
    <div className='space-y-8'>
      <div className='space-y-2.5'>
        <div className='flex gap-2 items-baseline'>
          <span className='text-xl font-bold text-zinc-300'>Dia 17</span>
          <span className='text-zinc-500 text-xs'>Sábado</span>
        </div>
        <p className='text-sm text-zinc-500'>Nenhuma atividade cadastrada nessa data.</p>
      </div>

      <div className='space-y-2.5'>
        <div className='flex gap-2 items-baseline'>
          <span className='text-xl font-bold text-zinc-300'>Dia 18</span>
          <span className='text-zinc-500 text-xs'>Domingo</span>
        </div>
        <div className='space-y-2.5'>
          <div className='bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape flex items-center gap-3'>
            <CircleCheck className='text-lime-300 size-5' />
            <p className='text-zinc-100'>Academia em grupo</p>
            <span className='text-sm text-zinc-400 ml-auto'>14:00h</span>
          </div>
        </div>
        <div className='space-y-2.5'>
          <div className='bg-zinc-900 px-4 py-2.5 rounded-xl shadow-shape flex items-center gap-3'>
            <CircleCheck className='text-lime-300 size-5' />
            <p className='text-zinc-100'>Corrida de Kart</p>
            <span className='text-sm text-zinc-400 ml-auto'>14:00h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
