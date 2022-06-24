import { DefaultUi, Player, Youtube } from '@vime/react'
import { gql, useQuery } from '@apollo/client'
import { DiscordLogo, Lightning } from 'phosphor-react'

import { ExtraContent } from './ExtraContent'
import { LoadingVideoPlayer } from './LoadingVideoPlayer'
import { Footer } from './Footer'

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function VideoPlayer(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    },
    fetchPolicy: 'no-cache',
  })

  if (!data) {
    return (
      <div className='flex-1'>
        <LoadingVideoPlayer />
      </div>
    )
  }

  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={ data.lesson.videoId } />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className='py-8 px-8 max-w-[1100px] mx-auto mb-12'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              { data.lesson.title }
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              { data.lesson.description }
            </p>

            <div className='flex items-center gap-4 mt-6'>
              <img
                className='h-16 w-16 rounded-full border-2 border-blue-500'
                src={ data.lesson.teacher.avatarURL }
                alt={ data.lesson.teacher.name }
              />

              <div className='leading-relaxed'>
                <strong className='font-bold text-2xl block'>
                  { data.lesson.teacher.name }
                </strong>
                <span className='text-gray-200 text-sm block'>
                  { data.lesson.teacher.bio }
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
          <ExtraContent
            title='Complementary material'
            description='Access the complementary material to improve your knowledge'
            slug=''
          />
          <ExtraContent
            title='Exclusive eBook'
            description='Download the exclusive eBook from the event.io'
            slug=''
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}