import { useEffect } from 'react'

function App() {
  useEffect(() =>{
    const get = async () => {
      const res = await fetch('http://localhost:3000/api/prospectos/1')
      const data = await res.json()
      console.log(data)
    }
    get()
  }, [])

  return (
    <h1>
      hola
    </h1>
  )
}

export default App
