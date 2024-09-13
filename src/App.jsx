import { useState } from 'react'
import Main from './components/Main'
import './App.css'

function App() {
  const [search, setSearch] = useState(0)

  function handleChange() {
    
  }

  return (
    <>
      <header>
        <h1>Title</h1>
        <form>
          <div>
            <input 
              type="text" 
              value={search}
              onChange={ handleChange }/>
            <i></i>
          </div>
        </form>
        <button type="button"><i>Menu icon</i></button>
      </header>
      <Main search={search}/>
    </>
  )
}

export default App
