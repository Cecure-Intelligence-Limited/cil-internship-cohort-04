import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Add from './components/Add'
import About from './components/About'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route path='/contact/add' element={<Add />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact/edit/:id' element={<Add />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
