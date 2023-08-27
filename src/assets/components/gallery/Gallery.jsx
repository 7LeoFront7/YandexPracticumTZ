import style from './gallery.module.css'
import data from './data.gellory'
import './gallery.css'
import { useState } from 'react'

function Gallery() {

    const [imgModal, setimgModal] = useState(false)
    const [imgStr, setimgStr] = useState('')

    const takeImgStr = (img) => {
        setimgModal(true)
        setimgStr(img)
        
    }

    const closeModal = () => {
        setimgModal(false)
    }

    return ( 

        <>
        <div className={imgModal ? `modal open` : `modal`}>
            <img src={imgStr} alt="img" />
            <img onClick={closeModal} className='clouse' src="./close.png" alt="close" />
        </div>
        <div className={style.gallery}>
           <div className={style.gallery__container}>
                {data.map((item) => {
                    return (
                       <div onClick={() => {takeImgStr(item.img)}} className={style.itemImg} key={item.id}>
                        <h2>#{item.title}</h2>
                        <img src={item.img} alt="img" />
                       </div>
                    )
                })}
            </div> 
        </div>
        </>
    );
}

export default Gallery;