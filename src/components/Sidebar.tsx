import { Lesson } from './Lesson'

export function Sidebar() {
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='text-2xl font-bold pb-6 mb-6 border-b border-gray-500 block'>
        Classes scheduled
      </span>

      <div className='flex flex-col gap-8'>
        <Lesson 
          title="title 01"
          slug="slug 01"
          availableAt={ new Date() }
          type="class"
        />
      </div>
    </aside>
  )
}