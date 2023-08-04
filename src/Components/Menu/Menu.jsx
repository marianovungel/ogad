import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div className='Menu'>
      <div className="fullMenu">
        <div className="logoImg">
            <img src="./ogad.png" className='logoClass' alt="" />
            <div className="textTitle">
                <p className="title">OBSERVATÓRIO GUINEENSE</p>
                <p className="title">SOBRE ÁLCOOL E OUTRAS DROGAS</p>
            </div>
        </div>
        <div className="menuEscolha">
            <div className="itemMenu selectButton">Início</div>
            <div className="itemMenu">Sobre</div>
            <div className="itemMenu">Projetos</div>
            <div className="itemMenu">Atualidade</div>
            <div className="itemMenu">Contato</div>
        </div>
      </div>
    </div>
  )
}
