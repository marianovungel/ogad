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
            img:"./rio.jpg",
            title:"Construir Resiliência",
            desc:"O consumo de só traz problemas Institucional",
            obj:"Fortalecer e aumentar a capacidade da Tiniguena como ator relevante na sociedade civil, com capacidade de influenciar políticas públicas estratégicas nos níveis nacional e regional.",
            slg:"RESILIÊNCIA INSTITUCIONAL DOS PROCESSOS SOCIOECONÓMICOS E SOCIO-AMBIENTAIS"
        },
        {
            id:"2",
            img:"./q.png",
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
            img:"./droga1.jpg",
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
                    <h1 className="centerFastContent">NOSSOS PROJETOS</h1>
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
        <SubFooter />
        <Footer />
    </div>
  )
}
