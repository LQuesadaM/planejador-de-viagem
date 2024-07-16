import { Link2, Plus } from 'lucide-react'
import { Button } from '../../component/Button.jsx'

export const ImportantLink = () => {
  return (
    <div className='space-y-6'>
      <h2 className='font-bold text-xl'>Links importantes</h2>

      <div className='space-y-5'>
        <div className='flex items-center justify-between'>
          <div className='space-y-1.5 max-w-60 truncate'>
            <h3 className='font-medium text-zinc-100'>Reserva do AirBnB</h3>
            <a href='#' className='text-xs text-zinc-400 hover:text-zinc-200'>
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className='size-5 text-zinc-400' />
        </div>

        <div className='flex items-center justify-between'>
          <div className='space-y-1.5 max-w-60 truncate'>
            <h3 className='font-medium text-zinc-100'>Regras da casa</h3>
            <a href='#' className='text-xs text-zinc-400 truncate hover:text-zinc-200'>
              https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
            </a>
          </div>
          <Link2 className='size-5 text-zinc-400' />
        </div>
      </div>

      <Button variant='secundary' size='full'>
        <Plus className='size-5 shrink-0' />
        Cadastrar novo link
      </Button>
    </div>
  )
}
