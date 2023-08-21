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
                                
                                O diagnóstico teve como finalidade conhecer e compreender as
                                reais necessidades das unidades de produção, das suas capacidades
                                e dos potenciais fornecedores de matérias primas, assim como 
                                reforçar o conhecimento destes da matéria organizacional de 
                                redes de multiplicadores de sementes e das capacidades de 
                                intervenção dos atores envolvidos no apoio à produção e à 
                                promoção do consumo dos seus produtos locais.
                                
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
        img:"data:image/jpeg;base64,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"
    },
    {
        id:"2",
        text:txt,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sK9FSlj6TbwGLAaKDVTvrORPx2fDdtCo6Q&usqp=CAU'
    },
    {
        id:"3",
        text:txt,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpvmxDltnsrVXBESPFwF1qiS8iCFH7I9Q14FpDluvTTWrSAj_eZG5pntqNo2jSokMug8&usqp=CAU'
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
                                UNIDADES DE PRODUÇÃO NAS REGIÕES DE 
                                QUINARA, OIO E TOMBALI CONFIRMAM O 
                                POTENCIAL PERANTE OS DESAFIOS DE 
                                MODERNIZAÇÃO TECNOLÓGICA
                            </div>
                            <div className="regiaoAtual">Notícias / Redenção-CE</div>
                            {show === d.id ? (
                                <div id="descAtual" className={d.id}>
                                    <p className='allTextVizible'>
                                        {d.text}
                                    </p>
                                </div>

                            ):(
                                <div id="descAtual" className={d.id}>
                                <p className='textVizible'>
                                    {d.text}
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
