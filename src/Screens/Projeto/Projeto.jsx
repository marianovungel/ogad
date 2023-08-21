import React, { useEffect, useState } from 'react'
import './Projeto.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Humburguer from '../../Components/Humburguer/Humburguer'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'

    const data = [
        {
            id:"1",
            img:"./cgad.jpeg",
            title:"Construir Resiliência",
            desc:"O consumo de só traz problemas Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        {
            id:"2",
            img:"././cgad.jpeg",
            title:"Mulheres Rurais",
            desc:"A troga não é a solução Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        {
            id:"3",
            img:"./droga.jpg",
            title:"Arroz e Mangal",
            desc:"Se  abstenha da droga Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        {
            id:"4",
            img:"././cgad.jpeg",
            title:"Tiban Ankaterô",
            desc:"Droga zero para uma sociedade melhor Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        {
            id:"5",
            img:"././cgad.jpeg",
            title:"Tiban Ankaterô",
            desc:"Droga zero para uma sociedade melhor Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        {
            id:"6",
            img:"./bissau.jpg",
            title:"Tiban Ankaterô",
            desc:"Droga zero para uma sociedade melhor Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        
    ]
export default function Projeto() {
    const [pro, setPro] = useState()
    const [show, setShow] = useState(" ")
    useEffect(()=>{
        setPro(data)
    }, [])

    const verify = (id)=>{
        if(show === id){
            setShow(" ")
        }else{
            setShow(id)
        }
    }
  return (
    <div className='Projeto'>
        <Header />
        <Menu />
        <Humburguer />
        <div className="fullContentFast">
            <div className="colorFastContent">
                <div className="oitentaFastContent">
                    <h1 className="centerFastContent">NOSSOS TEMAS</h1>
                    <p className="paragradoFastContent">
                        RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS
                    </p>
                </div>
            </div>
        </div>
        <div className="fullProjectsSecund">
            <div className="oitentaProjectsSecund">
                {pro?.map((d)=>(
                    <div className="cardProjectsSecund" key={d.id}>
                        <div className="imageProjectSecurd">
                            <img src={d.img} alt="" className="imgProjectSecund" />
                        </div>
                        <div className="textProjectsSecund">
                            <div className="TitleProjectsSecund">{d.title}</div>
                            <div className="descriptionProjectsSecund">{d.desc}</div>
                        </div>
                        <div className="buttonProjectsSecund">
                            <i className="fa-solid fa-circle-arrow-down arrowSizee" onClick={()=>verify(d.id)}></i>
                        </div>
                        {show === d.id && (
                            <div id="buttomCardSecund" className={d.id}>
                                <div className="org">OGAD-Projetos</div>
                                <div className="ObjCard"><b>OBJECTIVO: </b>{d.obj}</div>
                                <div className="ObjCard"><b>SLOGAN: </b>{d.slg}</div>
                            </div>
                        )}
                    </div>   
                ))}
            </div>
        </div>
        <div className="imagemContent">
            <div className="backImgContentBissau">
                <div className="colorBackBissau">
                    <div className="textBackTrie">
                        <div className="elementCardTrie">
                            <i className="fa-brands fa-pagelines sizeTrie"></i>
                            <i className='numberTrie'>004</i>
                            <div className="risco"></div>
                            <div className="descTrie">PROJETOS ELABORADOS</div>
                        </div>
                        <div className="elementCardTrie">
                            <i className="fa-solid fa-chart-line sizeTrie"></i>
                            <i className='numberTrie'>003</i>
                            <div className="risco"></div>
                            <div className="descTrie">PROJETOS EXECUTADOS</div>
                        </div>
                        <div className="elementCardTrie">
                            <i className="fa-solid fa-map-location-dot sizeTrie"></i>
                            <i className='numberTrie'>002</i>
                            <div className="risco"></div>
                            <div className="descTrie">REGIÕES BENEFICIADAS</div>
                        </div>
                        <div className="elementCardTrie">
                            <i className="fa-solid fa-person-harassing sizeTrie"></i>
                            <i className='numberTrie'>150</i>
                            <div className="risco"></div>
                            <div className="descTrie">POPULAÇÃO ALCANÇADA</div>
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
