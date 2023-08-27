import style from './header.module.css'
import './burger.css'
import { Routes, Route, Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import {Aboutpage} from '../../pages/Aboutpage'
import {Gallerypage} from '../../pages/gallery'
import {Powerjspage} from '../../pages/powerjs'
import {Screencastpage} from '../../pages/screencast'
import React, { useState } from 'react';




function Header() {

    const [burger, setBurger] = useState(false)

    const openBurger = () => {
        setBurger(true)
    }

    const closeBurger = () => {
        setBurger(false)
    }

    return ( <>
     <BrowserRouter>
    <div className={burger ? `burger open` : `burger`}>
    <div className='burger__wrapper'>
            <div className="burger_form">
            <Link onClick={closeBurger} className='burger__link' to="/">Моя галерея</Link>
            <Link onClick={closeBurger} className='burger__link' to="/about">Обо мне</Link>
            <Link onClick={closeBurger} className='burger__link' to="/screencast">Скринкаст</Link>
            <Link onClick={closeBurger} className='burger__link' to="/js">JavaScript</Link>
            <img onClick={closeBurger} className={style.clouseBurgerr} src="./close.png" alt="close" />
            <div>
            <a className={'github_link_burger'} target='_blank' href="https://github.com/7LeoFront7/YandexPracticumTZ">Репозиторий</a>
             </div>
            </div>
        </div>
           
        </div>
   
    <div className={style.header}>
        <div className={style.header__container}>
        <div className={style.logo}>
            <Link className={style.logo_link} to="/">Nazarov<span>WEB</span></Link>
        </div>
        <div className={style.nav}>
            <Link className={style.nav_link} to="/">Моя галерея</Link>
            <Link className={style.nav_link} to="/about">Обо мне</Link>
            <Link className={style.nav_link} to="/screencast">Скринкаст</Link>
            <Link className={style.nav_link} to="/js">JavaScript</Link>
           
        </div>
        <div>
            <a className={style.github_link} target='_blank' href="https://github.com/7LeoFront7/YandexPracticumTZ">Репозиторий</a>
        </div>
        <div>
        <button className={style.burger_btn} onClick={openBurger}><img src='./burger.png' alt="burger" /></button>
        </div>
        </div>
    </div>

    <Routes>
        <Route path='/' element={<Gallerypage/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
        <Route path='/js' element={<Powerjspage/>}></Route>
        <Route path='/screencast' element={<Screencastpage/>}></Route>
    </Routes>
</BrowserRouter>
    </> );
}

export default Header;