import React, { useEffect, useState } from 'react'
import './Colaboradores.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Humburguer from '../../Components/Humburguer/Humburguer'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'

const data = [
    {
        id:"2",
        ordem:1,
        title:"Nome",
        desc:"Descrição dos Parceiros"
    }
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
                            <img src="./cgad.jpeg" alt="" className="imgColaPes" />
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
