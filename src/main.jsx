import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/components/header/Header'
import {Gallerypage} from './assets/pages/gallery'

import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='wrapper'>
       <Header />
        <Gallerypage/>
    </div>
  
  </React.StrictMode>
)
