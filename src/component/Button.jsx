import { tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'px-5 rounded-lg flex items-center justify-center gap-2 font-medium',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secundary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default'
  }
})

export const Button = ({ children, variant, size, ...props }) => {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
