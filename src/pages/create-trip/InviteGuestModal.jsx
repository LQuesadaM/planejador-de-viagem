import { X, AtSign, Plus } from 'lucide-react'

export const InviteGuestModal = ({
  handleModalGuest,
  handleSubmit,
  emailToInvite,
  removeEmailConvite
}) => {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='bg-zinc-900 w-[640px] rounded-xl items-start py-5 px-6 shadow-shape space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
            <button onClick={handleModalGuest}>
              <X className='text-zinc-400 size-5' />
            </button>
          </div>
          <p className='text-zinc-400 text-sm text-left'>
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>
        {/* convidado */}
        <div className='flex flex-wrap gap-2'>
          {emailToInvite.map((email, index) => {
            return (
              <div
                key={email}
                className='py-1.5 px-2.5 bg-zinc-800 rounded-md shadow-shape flex items-center gap-2'
              >
                <span className='text-zinc-300 text-sm'>{email}</span>
                <button onClick={() => removeEmailConvite(email)} type='button'>
                  <X className='text-zinc-400 size-4' />
                </button>
              </div>
            )
          })}
        </div>

        <div className='w-full h-px bg-zinc-800' />

        {/* Add email convidado */}
        <form
          onSubmit={handleSubmit}
          className='px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
        >
          <AtSign className='text-zinc-400 size-5' />
          <input
            type='email'
            name='email'
            placeholder='Digite o e-mail do convidado'
            className='bg-transparent placeholder-zinc-400 outline-none flex-1'
          />
          <button
            type='submit'
            className='px-5 py-2 bg-lime-300 text-lime-950 font-medium rounded-lg flex items-center gap-2 hover:bg-lime-400'
          >
            Convidar <Plus />
          </button>
        </form>
      </div>
    </div>
  )
}
