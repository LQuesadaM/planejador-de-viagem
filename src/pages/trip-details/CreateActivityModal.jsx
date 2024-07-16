import { Calendar, X, Tag } from 'lucide-react'
import { Button } from '../../component/Button.jsx'

export const CreateActivityModal = ({ openCreativeActivityModal }) => {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='bg-zinc-900 w-[640px] rounded-xl items-start py-5 px-6 shadow-shape space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
            <button onClick={openCreativeActivityModal}>
              <X className='text-zinc-400 size-5' />
            </button>
          </div>
          <p className='text-zinc-400 text-sm text-left'>
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className='space-y-3'>
          <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <Tag className='text-zinc-400 size-5' />
            <input
              type='text'
              name='text'
              placeholder='Qual a atividade?'
              className='bg-transparent placeholder-zinc-400 py-2.5 px-4.5 outline-none'
            />
          </div>

          {/* Input Date time */}
          <div className='flex items-center gap-2'>
            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1'>
              <Calendar className='text-zinc-400 size-5' />
              <input
                type='datetime-local'
                name='occurs-at'
                placeholder='20 de agosto'
                className='bg-transparent placeholder-zinc-400 py-2.5 px-4.5 outline-none flex-1'
              />
            </div>
          </div>

          <Button size='full'>Salvar atividade</Button>
        </form>
      </div>
    </div>
  )
}
