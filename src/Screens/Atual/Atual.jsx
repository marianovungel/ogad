import React, { useEffect, useState } from 'react'
import './Atual.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'
import Humburguer from '../../Components/Humburguer/Humburguer'

const txt = `
                                O diagnóstico das capacidades e necessidades foi realizado
                                no quadro da implementação do Projeto “SIMENTERA” – promover
                                a autossuficiência alimentar, através da valorização da 
                                agricultura familiar, dos saberes associados e mercados 
                                locais na Guiné-Bissau – implementado pela Tiniguena em 
                                parceria com o CIDAC.
                                
                                A ação decorreu, entre os meses de Maio e Junho de 2023, 
                                em cinco (5) Unidades de 
                                Produção e Transformação dos Produtos Locais, nomeadamente 
                                as de fumagem de peixe em Djabada Porto e da produção de 
                                siti-malgós em Berculon, ambas na região de Quinara, a de 
                                produção de óleo de palma em Cabedu, a da transformação de
                                arroz em Calaque na região de Tombali e a de transformação
                                de farinhas alimentares em Djalicunda na região de Oio.
                                
                                Para a assistente de coordenação do projeto, Neusa Tambá, 
                                nesta fase o diagnóstico visava a exploração das perspetivas
                                e a visão contributiva das comunidades, nomeadamente a recolha
                                de informações importantes para uma melhor compreensão das 
                                capacidades técnicas, institucionais e organizacionais atuais
                                e potenciais das UPs afetos ao projeto. Também tinha como 
                                objetivo produzir um melhor entendimento do grau de sensibilização,
                                envolvimento e participação dos atores comunitários e as suas 
                                relevâncias para as UPs.`

const data = [
    {
        id:"1",
        text:txt,
        title:'Um debate necessário sobre consumo de álcool e outras Drogas!',
        img:"./evento1.jpeg"
    },
    {
        id:"2",
        text:txt,
        title:'Um debate necessário sobre consumo de álcool e outras Drogas!',
        img:'./evento2.jpeg'
    },
    {
        id:"3",
        text:txt,
        title:'Reflexões sobre o uso de Álcool e outras drogas no contexto guineense: onde estamos e o que precisa ser feito.',
        img:'./evento3.jpeg'
    },
    {
        id:"4",
        text:txt,
        title:'Brasil e Guiné-Bissau: Diálogos sobre abordagens humanizadas no enfrentamento de uso de Álcool e outras, o que temos e o que pode ser feito em termos de cooperação Sul-Sul',
        img:'./evento4.jpeg'
    }
]
export default function Atual() {
    const [post, setPost] = useState(data)
    const [show, setShow] = useState("")
    useEffect(()=>{
        setPost(data)
    }, [])

    const verify = (id)=>{
        if(show === id){
            setShow(" ")
        }else{
            setShow(id)
        }
    }

  return (
    <div className='Atual'>
        <Header />
        <Humburguer />
        <Menu select={"inicio"} />
        <div className="fullAtualContent">
            <div className="oitentAtual">
                <div className="NoticiaContent">
                {post?.map((d)=>(
                <div className="cardAtual" key={d.id}>
                        <div className="imagemAtual">
                            <img src={d.img} alt="" className="imgAtual" />
                            <img src="././cgadt.png" alt="" className="imgLogoAtual" />
                        </div>
                        <div className="allTextAtual">
                            <div className="titleAtual">
                                {d.title}
                            </div>
                            <div className="regiaoAtual">Notícias / Redenção-CE</div>
                            {show === d.id ? (
                                <div id="descAtual" className={d.id}>
                                    <p className='allTextVizible'>
                                        {/* {d.text} */}
                                    </p>
                                </div>

                            ):(
                                <div id="descAtual" className={d.id}>
                                <p className='textVizible'>
                                    {/* {d.text} */}
                                </p>
                                </div> 
                            )}
                            <div className="iconAtual">
                                <button className="buttonIconAtual" onClick={()=>verify(d.id)}>
                                    Ler mais
                                    <i className="fa-solid fa-angles-right iconBuGo"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="localContent">
                    <div className="associacaoFour">
                        <div className="conTentCarAss">
                            <div className="contentAssociacaoCard">
                                <div className="TitleAssociacao">Sede Social da CGAD</div>
                                <div className="localAssociacao">
                                <i className="fa-solid fa-map-location-dot"></i><i className="locationAsso">Fortaleza/Benfica</i>
                                </div>
                                <div className="celularAssociacao">
                                    <i className="fa-solid fa-phone"></i><i className="locationAsso">+(55) 85 991 392 688</i>
                                </div>
                                <div className="emailAssociacao">
                                    <i className="fa-solid fa-envelope"></i><i className="locationAsso">cgadguinebissau@gmail.com</i>
                                </div>
                            </div>
                        </div>
                        <div className="conTentCarAssFour">
                            <div className="contentAssociacaoCard marginTopAssociacaao">
                                <div className="logoAssociacao"><img src="././cgadt.png" alt="" className="logoimgAssociacao" /></div>
                                <div className="TitleAssociacao">Slogan da CGAD</div>
                                <div className="emailAssociacao">
                                    <i className="locationAsso">CGAD, o controle e o acompanhamento do consumo de drogas para uma Guine-Bissau melhor...</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <SubFooter />
      <Footer />
    </div>
  )
}
