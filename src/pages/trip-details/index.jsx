import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateActivityModal } from './CreateActivityModal.jsx'
import { ImportantLink } from './ImportantLink.jsx'
import { Convidados } from './Convidados.jsx'
import { ListActivities } from './ListActivities.jsx'
import { DestinationAndDateHeader } from './DestinationAndDateHeader.jsx'
import { Button } from '../../component/Button.jsx'

export const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  const openCreativeActivityModal = () => {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen)
  }

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8 bg-zinc-50-50/5'>
      <DestinationAndDateHeader />

      <main className='flex gap-16 px-4'>
        <div className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Atividades</h2>
            <Button onClick={openCreativeActivityModal}>
              <Plus />
              Cadastrar atividade
            </Button>
          </div>

          <ListActivities />
        </div>

        {/* Aside */}
        <aside className='w-80 space-y-6'>
          {/* Links Importantes */}
          <ImportantLink />

          <div className='w-full h-px bg-zinc-800' />

          <div className='space-y-6'>
            <Convidados />
          </div>
        </aside>
      </main>

      {/* Modal Cadastrar atividade */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal openCreativeActivityModal={openCreativeActivityModal} />
      )}
    </div>
  )
}
