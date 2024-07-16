import { X, User, Mail } from 'lucide-react'
import { Button } from '../../component/Button'

export const ConfirmTripModal = ({ handleConfirmModalTrip, createTrip }) => {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='bg-zinc-900 w-[640px] rounded-xl items-start py-5 px-6 shadow-shape space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Confirmar criação da viagem</h2>
            <button onClick={handleConfirmModalTrip}>
              <X className='text-zinc-400 size-5' />
            </button>
          </div>
          <p className='text-zinc-400 text-sm text-left'>
            Para concluir a criação da viagem para{' '}
            <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de{' '}
            <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span> preencha
            seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className='space-y-3'>
          <div className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <User className='text-zinc-400 size-5' />
            <input
              type='text'
              name='text'
              placeholder='Seu nome completo'
              className='bg-transparent placeholder-zinc-400 py-2.5 px-4.5 outline-none flex-1'
            />
          </div>

          <div className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <Mail className='text-zinc-400 size-5' />
            <input
              type='email'
              name='email'
              placeholder='Seu e-mail pessoal'
              className='bg-transparent placeholder-zinc-400 py-2.5 px-4.5 outline-none flex-1'
            />
          </div>

          <Button type='submit' size='full'>
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
