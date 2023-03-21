import './App.css'
import About from './Components/About'
import Image from './Components/Image'

function App() {

  const name = 'Ada Lovelace';
  return (
    <div className="App">
      <h2>{name}</h2>
      <Image />
      <About />
    </div>
  )
}

export default App
