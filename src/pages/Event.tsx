import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoPlayer } from '../components/VideoPlayer'

export function Event() {
  return (
    <>
      <Header />
      <main className='flex'>
        <VideoPlayer />
        <Sidebar />
      </main>
    </>
  )
}