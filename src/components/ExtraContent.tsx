import { CaretRight, FileArrowDown } from 'phosphor-react'

interface ExtraContentProps {
  title: string
  description: string
  slug: string
}

export function ExtraContent(props: ExtraContentProps) {
  return (
    <>
    <a
      className='bg-gray-700 rounded overflow-hidden flex items-stretch
      gap-6 hover:bg-gray-600 transition-colors'
      href={ props.slug }
    >
      <div className='bg-green-700 h-full p-6 flex items-center'>
        <FileArrowDown size={ 40 } />
      </div>
      <div className='py-6 leading-relaxed'>
        <strong className='text-2xl'>
          { props.title }
        </strong>
        <p className='text-sm text-gray-200 mt-2'>
          { props. description }
        </p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight />
      </div>
    </a>
    </>
  )
}