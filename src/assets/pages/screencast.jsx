import style from './screencast.module.css'

function Screencastpage() {
    return (  
        <div className={style.screencast}>
        
        <div className={style.screencast__right}>
        <img src="./mestory.jpg" alt="me" />
        </div>
        <div className={style.screencast__left}>
        <h1>Делюсь с Вами <span>интересной фишкой</span> из <span>CSS!</span></h1>
        </div>
    </div>
    );
}

export  {Screencastpage};