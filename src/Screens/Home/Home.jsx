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
          O Centro de Pesquisa Guineense em Álcool e outras Drogas (CGAD) idealizado pelo estudante Ivanilson Dinis Geraldo Monteiro
          em colaboração com o Núcleo de Pesquisa em Saúde e uso de Substrâncias (NEPSIS).
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
              <div className="titleCardObj">MISSÃO</div>
              <div className="pCardObj">Empreender discussões científicas sobre o consumo de álcool e outras drogas em Guiné-Bissau, que possam direcionar as políticas públicas de enfrentamento, prevenção e cuidado/acolhimento, e consequentemente melhorar condições de vida das pessoas nas suas respectivas comunidades.</div>
            </div>
          </div>
          <div className="cardObjectivos">
            <div className="imagemCardObj">
              <img src="./cgad.jpeg" alt="" className="imgCardObj" />
            </div>
            <div className="textCArdObj">
              <div className="titleCardObj">VISÃO</div>
              <div className="pCardObj">Ser um centro de estudo e pesquisa que dialoga com as comunidades em vulnerabilidades sociais, com maior incidência sobre consumo de álcool e outras substâncias.</div>
            </div>
          </div>
          <div className="cardObjectivos">
            <div className="imagemCardObj">
              <img src="./cgad.jpeg" alt="" className="imgCardObj" />
            </div>
            <div className="textCArdObj">
              <div className="titleCardObj">VALORES</div>
              <div className="pCardObj">Pessoas em primeiro lugar, a nossa existência depende da existência do outro.</div>
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
                <p className="ogadText">CGAD</p>
                <p className="textDescOGAD">CENTRO DE PESQUISA GUINEENSE</p>
                <p className="textDescOGAD">EM ÁLCOOL E OUTRAS DROGAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullHistory">
        <div className="contentHistory">
          <div className="imageHistory">
            <img src="./monu.jpeg" alt="" className="imgHistory" />
          </div>
          <div className="textHistor">
            <div className="titleHistory">História do CGAD</div>
            <p className="textPHistory">
            O CGAD nasce através de experiências acadêmicas no NEPSIS- Núcleo de Pesquisa em Saúde e Uso de Substância, desde 2018 fomentando a ideia de criar uma entidade que propusesse discutir sobre os principais problemas associados ao consumo problemático de álcool e outras drogas em Guiné-Bissau. Uma discussão que levasse em conta as singularidades dos sujeitos, as particularidades que cada contexto apresenta, associado ao uso de substâncias. Entretanto, no decorrer dos anos, foram longos diálogos/encontros/troca de experiências com pesquisadores do NEPSIS, no sentido de eles conhecerem melhor o contexto guineense sobre o consumo de drogas e assim pensar nas propostas sobre intervenções.
            </p>
            <Link to='/sobre'>
              <button className="buttonHistory">Sobre CGAD <i className="fa-solid fa-circle-chevron-right cicleColor"></i></button>
            </Link>
          </div>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  )
}
