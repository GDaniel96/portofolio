import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Hobbies from './Components/Hobbies/Hobbies'
import Contact from './Components/Contact-form/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Hobbies' element={<Hobbies />} />
          <Route path='/Contact-Form' element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
