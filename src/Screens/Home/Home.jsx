import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'
import Humburguer from '../../Components/Humburguer/Humburguer'
import { Link } from 'react-router-dom'
import Slide from '../../Components/Slide/Slide'

export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <Humburguer />
      <Menu select={"inicio"} />
      {/* <div className="imagemContent">
        <div className="backImgContent">
          <div className="colorBack">
            <div className="textBack">
              <p className="ogadText">OGAD</p>
              <p className="textDescOGAD">Observatório Guineense </p>
              <p className="textDescOGAD">sobre álcool e outras drogas...</p>
            </div>
          </div>
        </div>
      </div> */}
      <Slide />
      <div className="fulltextIntrudation">
        <div className="textContentIntrodaction">
          <h1 className="intudaction">
            Organização Guineense operando a mais de 3 anos
            desde a sua fundação no ano de (2020) com o intuito de relatar e acompanhas os casos
            de uso de drogras...
          </h1>
        </div>
      </div>
      <div className="fulltextIntrudation">
        <div className="textContentIntrodactionFull">
          <div className="cardObjectivos">
            <div className="imagemCardObj">
              <img src="./cgad.jpeg" alt="" className="imgCardObj" />
            </div>
            <div className="textCArdObj">
              <div className="titleCardObj">VISÃO</div>
              <div className="pCardObj">Uma terra rica em recursos naturais e culturais para o bem-estar das gerações presentes e futuras</div>
            </div>
          </div>
          <div className="cardObjectivos">
            <div className="imagemCardObj">
              <img src="./cgad.jpeg" alt="" className="imgCardObj" />
            </div>
            <div className="textCArdObj">
              <div className="titleCardObj">MISSÃO</div>
              <div className="pCardObj">Promover um desenvolvimento participativo e durável, baseado na conservação dos recursos naturais e culturais e no exercício da cidadania</div>
            </div>
          </div>
          <div className="cardObjectivos">
            <div className="imagemCardObj">
              <img src="./cgad.jpeg" alt="" className="imgCardObj" />
            </div>
            <div className="textCArdObj">
              <div className="titleCardObj">VALORES E PRINCÍPIOS</div>
              <div className="pCardObj">A Tiniguena considera que as suas acções e organização interna são baseadas em certos grandes valores universais que são partilhados...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="imagemContent">
        <div className="backImgContentBissau">
          <div className="colorBackBissau">
            <div className="textBackBissau">
              <div className="leftBissau">
                <div className="textBissauLeft">
                  Com atuação em todo o páis, agora se expandindo
                  em toda diáspora Guineense
                </div>
                <Link to='/sobre'><button className="leftButtonBissau">Conheça a gente <i className="fa-solid fa-circle-check cicleColor"></i></button></Link>
              </div>
              <div className="centerBissau"></div>
              <div className="rightBissau">
                <p className="ogadText">OGAD</p>
                <p className="textDescOGAD">Observatório Guineense </p>
                <p className="textDescOGAD">sobre álcool e outras drogas...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullHistory">
        <div className="contentHistory">
          <div className="imageHistory">
            <img src="./flag.jfif" alt="" className="imgHistory" />
          </div>
          <div className="textHistor">
            <div className="titleHistory">História de OGAD</div>
            <p className="textPHistory">
              O Observatório Guineense sobre Droga e outras Drogas (OGAD),
              é uma organização de iniciativa privada
              fundada em 2020, que visa acompanhar e relatar casos de
              consumo de droga de cidadãos guineenses na Guine-Bissaue 
              e nas Diásporas Guineense no mundo Todo.
            </p>
            <Link to='/sobre'>
              <button className="buttonHistory">Sobre OGAD <i className="fa-solid fa-circle-chevron-right cicleColor"></i></button>
            </Link>
          </div>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  )
}
