import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

export function VideoPlayer() {
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'></div>
      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              Class 01 - Open
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis 
              consequuntur maiores laborum, sequi possimus cumque hic nemo corporis 
              perferendis eaque neque aspernatur autem molestias iure corrupti 
              similique quisquam tenetur quae.
            </p>

            <div className='flex items-center gap-4 mt-6'>
              <img
                className='h-16 w-16 rounded-full border-2 border-blue-500'
                src='https://github.com/brinobruno.png'
                alt='Bruno Corrêa'
              />

              <div className='leading-relaxed'>
                <strong className='font-bold text-2xl block'>
                  Bruno Corrêa
                </strong>
                <span className='text-gray-200 text-sm block'>
                  Junior Developer
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <a
              className='text-center p-4 text-sm bg-green-500 flex items-center 
              justify-center gap-2 rounded font-bold uppercase hover:bg-green-700
              transition-colors'
              href=''
            >
              <DiscordLogo size={ 24 } />
              Discord community
            </a>
            
            <a
              className='text-center p-4 text-sm border border-blue-500 text-blue-500
              flex items-center justify-center gap-2 rounded font-bold uppercase
              hover:bg-blue-500 hover:text-gray-900 transition-colors'
              href=''
            >
              <Lightning size={ 24 } />
              Access challenge
            </a>
          </div>
        </div>
        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a
            className='bg-gray-700 rounded overflow-hidden flex items-stretch
            gap-6 hover:bg-gray-600 transition-colors'
            href=''
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={ 40 } />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>
                Complementary material
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Access the complementary material to improve your knowledge
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight />
            </div>
          </a>

          <a
            className='bg-gray-700 rounded overflow-hidden flex items-stretch
            gap-6 hover:bg-gray-600 transition-colors'
            href=''
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={ 40 } />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>
                Exclusive eBook
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Download the exclusive eBook from the event.io
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}