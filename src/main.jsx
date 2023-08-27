import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/components/header/Header'
import Gallery from './assets/components/gallery/Gallery'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='wrapper'>
       <Header />
        <Gallery/>
    </div>
  
  </React.StrictMode>
)
