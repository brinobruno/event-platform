import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { NoLessonNotice } from '../components/NoLessonNotice'
import { Sidebar } from '../components/Sidebar'
import { VideoPlayer } from '../components/VideoPlayer'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        { slug
          ? <VideoPlayer lessonSlug={ slug } /> 
          : <NoLessonNotice /> 
        }
        <Sidebar />
      </main>
    </div>
  )
}