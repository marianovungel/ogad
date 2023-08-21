import React, { useEffect, useState } from 'react'
import './Colaboradores.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Humburguer from '../../Components/Humburguer/Humburguer'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'

const data = [
    {
        id:"1",
        ordem:1,
        title:"USP",
        desc:"A Universidade federal de São Paulo vem contibuindo de forma intensiva  no projeto. Destafeita o projeto vai avançando com o decorrer do tempo."
    },
    {
        id:"2",
        ordem:2,
        title:"UNILAB",
        desc:"A Universidade federal de São Paulo vem contibuindo de forma intensiva  no projeto. Destafeita o projeto vai avançando com o decorrer do tempo."
    },
    {
        id:"3",
        ordem:3,
        title:"UFC",
        desc:"A Universidade federal de São Paulo vem contibuindo de forma intensiva  no projeto. Destafeita o projeto vai avançando com o decorrer do tempo."
    },
    {
        id:"4",
        ordem:4,
        title:"USP",
        desc:"A Universidade federal de São Paulo vem contibuindo de forma intensiva  no projeto. Destafeita o projeto vai avançando com o decorrer do tempo."
    },
    {
        id:"5",
        ordem:5,
        title:"Letras UNILAB",
        desc:"A Universidade federal de São Paulo vem contibuindo de forma intensiva  no projeto. Destafeita o projeto vai avançando com o decorrer do tempo."
    },
]

export default function Colaboradores() {
    const [db, setDb] = useState(data)
    useEffect(()=>{
        setDb(data)
    }, [])
  return (
    <div className='Colaboradores'>
        <Header />
        <Menu />
        <Humburguer />
        <div className="fullContentFast">
            <div className="colorFastContent">
                <div className="oitentaFastContent">
                    <h1 className="centerFastContent" id='newSizeTitle'>Nossos Parceiros</h1>
                    <p className="paragradoFastContent" id='newSizeP'>
                        A vossa Parecer é importante para melhorar os nossos Serviços
                    </p>
                </div>
            </div>
        </div>
        <div className="TitlePesquisadores">Parceiros</div>
        {db.map((d)=>(
            <div className={ d.ordem % 2 === 0 ? "pesquisawhite" : "pesquisadores" } key={d.id}>
                <div className="oitentaPesquisadores">
                    <div className={ d.ordem % 2 === 0 ? "cardColaboradores":"cardColaboradoresWhite"}>
                        <div className="descColaboradorPes">
                            <div className="nomeColaPes">{d.title}</div>
                            <div className="descColaPes">{d.desc}</div>
                        </div>
                        <div className="imagemColaboradorPes">
                            <img src="./droga.jpg" alt="" className="imgColaPes" />
                        </div>
                    </div>
                </div>
            </div>

        ))}
        <SubFooter />
        <Footer />
    </div>
  )
}
