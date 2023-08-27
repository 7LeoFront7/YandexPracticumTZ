import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/components/header/Header'


import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='wrapper'>
       <Header />
    </div>
  
  </React.StrictMode>
)
