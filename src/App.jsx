import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Omsa from './pages/Omsa'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* <Header /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/omsa' element={<Omsa />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
