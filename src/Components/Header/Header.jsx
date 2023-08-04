import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
        <div className="allcontent">
            <div className="flag">
                <div className="flagItem"><img src="./1.png" className='itemImg' alt="" /></div>
                <div className="flagItem"><img src="./2.png" className='itemImg' alt="" /></div>
                <div className="flagItem"><img src="./3.png" className='itemImg' alt="" /></div>
                <div className="flagItem"><img src="./4.png" className='itemImg' alt="" /></div>
            </div>
            <div className="menu">
                <button className='doar'>Doar</button>
                <div className="pesquisa">
                    <input type='text' placeholder='Procurar...' className='inputSearch' required />
                    <div className="iconInput">
                        <i className="fa-solid fa-magnifying-glass iconPosition"></i>
                    </div>
                </div>
                <div className="iconsSocial">
                    <i className="fa-brands fa-square-facebook iconsoc"></i>
                    <i className="fa-brands fa-twitter iconsoc"></i>
                    <i className="fa-brands fa-square-instagram iconsoc"></i>
                    <i className="fa-brands fa-youtube iconsoc"></i>
                </div>
            </div>

        </div>
    </div>
  )
}
