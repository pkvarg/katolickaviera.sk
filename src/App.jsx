import React, { useState } from 'react'
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
import Counter from './pages/Counter'

import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { StateContext } from './context/StateContext'

function App() {
  const [lng, setLng] = useState('slovak')

  console.log('app', lng)
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <Routes>
            <Route path='/' element={<Home lng={lng} setLng={setLng} />} />
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
            <Route path='/counter' element={<Counter />} />
          </Routes>
          <ScrollToTop />
        </StateContext>
      </BrowserRouter>
      <Footer language={lng} />
    </>
  )
}

export default App
