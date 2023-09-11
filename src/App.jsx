import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Omsa from './pages/Omsa'
import Spoved from './pages/Spoved'
import Manzelstvo from './pages/Manzelstvo'
import PapezskyUrad from './pages/PapezskyUrad'
import KnazskyUrad from './pages/KnazskyUrad'
import KlastornyZivot from './pages/Klastorny-zivot'
import Maria from './pages/Maria'
import Hriech from './pages/Hriech'
import Spasenie from './pages/Spasenie'
import Biblia from './pages/Biblia'

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
          <Route path='/manzelstvo' element={<Manzelstvo />} />
          <Route path='/papezsky-urad' element={<PapezskyUrad />} />
          <Route path='/knazsky-urad' element={<KnazskyUrad />} />
          <Route path='/klastorny-zivot' element={<KlastornyZivot />} />
          <Route path='/maria' element={<Maria />} />
          <Route path='/hriech' element={<Hriech />} />
          <Route path='/spasenie' element={<Spasenie />} />
          <Route path='/biblia' element={<Biblia />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
