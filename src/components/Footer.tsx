import { Logo } from './Logo'

export function Footer() {
  return (
    <footer
      className='w-full max-w-[1100px] mx-auto py-6 px-8 flex items-center
      justify-between border-t border-gray-600'
    >
      <div className='flex items-end gap-6'>
        <Logo />
        <span className='text-gray-300'>
          Event.io - All rights reserved
        </span>
      </div>
      <div>
        <a
          className='text-gray-300'
          href=''
        >
          Privacy policy
        </a>
      </div>
    </footer>
  )
}