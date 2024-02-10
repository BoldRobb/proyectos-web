import { useState } from 'react'
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="container mx-auto mt-10">
       <Header />
       <Footer />
      </div>
      

    
  )
}

export default App
