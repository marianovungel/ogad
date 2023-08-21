import React from 'react'
import './SubFooter.css'

export default function SubFooter() {
  return (
    <div className='SubFooter'>
      <div className="subFooterContent">
        <div className="imageSubFooter">
            <img src="./cgadf.png" alt="" className="imgSubFooter" />
        </div>
        <div className="allSubFooter">
            <div className="quem">
                <div className="quemTitle">Quem Somos Nós</div>
                <div className="quemItemContem">
                    <p className="itemQuem">Visão</p>
                    <p className="itemQuem">Missão</p>
                    <p className="itemQuem">História da OGAD</p>
                    <p className="itemQuem">Valores e Princípios</p>
                    <p className="itemQuem">Projectos</p>
                    <p className="itemQuem">Equipa</p>
                </div>
            </div>
            <div className="quem">
                <div className="quemTitle">Atualidade</div>
                <div className="quemItemContem">
                    <p className="itemQuem">Notícias</p>
                    <p className="itemQuem">Anúncios</p>
                    <p className="itemQuem">Publicações</p>
                    <p className="itemQuem">Podcast</p>
                </div>
            </div>
            <div className="quem">
                <div className="quemTitle">Redes Sociais</div>
                <div className="quemItemContem">
                    <p className="itemQuem">Facebook</p>
                    <p className="itemQuem">Twitter</p>
                    <p className="itemQuem">Instagram</p>
                    <p className="itemQuem">YouTube</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
