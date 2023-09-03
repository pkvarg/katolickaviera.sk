import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Omsa from './pages/Omsa'
import Spoved from './pages/Spoved'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/omsa' element={<Omsa />} />
          <Route path='/spoved' element={<Spoved />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
