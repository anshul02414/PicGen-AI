import React, { useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { Form } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HowWorks from './pages/HowWorks'
import Reviews from './pages/Review'
import Contects from './pages/Contects'
import TermsConditio from './pages/TermsConditio'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Login from './components/Login'
import { AppContext } from './context/AppContext'


const App = () => {

  const {showLogin} = useContext(AppContext)
  
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-100">

      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {
        showLogin &&
        <Login/>
      }


      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/result' element = {<Result/>} />
        <Route path='/buy' element = {<BuyCredit/>} />
        <Route path='/working' element = {<HowWorks/>} />
        <Route path='/review' element = {<Reviews/>} />
        <Route path='/contect' element = {<Contects/>} />
        <Route path='/termscondition' element = {<TermsConditio/>} />
        <Route path='/privacypolicies' element = {<PrivacyPolicy/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
