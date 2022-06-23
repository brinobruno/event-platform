import { Route, Routes } from 'react-router-dom'
import { Event } from './pages/Event'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={ <h1>home page</h1> } />
      <Route path='/event' element={ <Event /> } />
    </Routes>
  )
}