import style from './screencast.module.css'


function Screencastpage() {
    return (  
        <div className={style.screencast}>
        
        <div className={style.screencast__right}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/87wTaJSVABU?si=lobPEJjHP5THV7Uc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className={style.screencast__left}>
        <h1>Делюсь с Вами <span>интересной фишкой</span> из <span>CSS!</span></h1>
        </div>
    </div>
    );
}

export  {Screencastpage};