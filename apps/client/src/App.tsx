import { Route, Routes} from 'react-router-dom'
import { Home, NewProspecto, Prospecto } from './routes'

function App() {

  return (
    <div>
      <div className='px-3 max-w-6xl mx-auto my-7'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-prospecto' element={<NewProspecto />} />
          <Route path='/prospecto/:id' element={<Prospecto />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
