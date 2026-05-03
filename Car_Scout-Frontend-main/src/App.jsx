import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRouter from './router/AppRoutes'
import LandingPage from './pages/LandingPage'
import { ToastContainer } from 'react-toastify'
//import './App.css'
import axios from 'axios'


function App() {
  return (
    <>
      <LandingPage />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
