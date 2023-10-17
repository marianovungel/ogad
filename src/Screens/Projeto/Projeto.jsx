import React, { useEffect, useState } from 'react'
import './Projeto.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Humburguer from '../../Components/Humburguer/Humburguer'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'
import api from '../../AdmScreens/api'

    
export default function Projeto() {
    const [pro, setPro] = useState()
    const [banner, setBanner] = useState({})
    const [show, setShow] = useState(" ")

    

    useEffect(()=>{
        const gatAll= async()=>{
            try {
                const res = await api.get("/bannertema")
                setBanner(res.data[0])
                
                var myInput = document.querySelector(".fullContentFast")
                myInput.style.backgroundImage = "url('" + res.data[0].img + "')";
                myInput.style.backgroundRepeat = "no-repeat";
                myInput.style.backgroundSize = "cover";
                myInput.style.backgroundPosition = "center";
                

                const response = await api.get("/tema")
                setPro(response.data)
            } catch (error) {}
        }
        gatAll()
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
                    <h1 className="centerFastContent">{banner.title}</h1>
                    <p className="paragradoFastContent">
                        
                    </p>
                </div>
            </div>
        </div>
        
        <div className="fullProjectsSecund">
            <div className="oitentaProjectsSecund">
                {pro?.map((d)=>(
                    <div className="cardProjectsSecund" key={d._id}>
                        <div className="imageProjectSecurd">
                            <img src={d.img} alt="" className="imgProjectSecund" />
                        </div>
                        <div className="textProjectsSecund">
                            <div className="TitleProjectsSecund">{d.title}</div>
                            <div className="descriptionProjectsSecund"></div>
                        </div>
                        <div className="buttonProjectsSecund">
                            <i className="fa-solid fa-circle-arrow-down arrowSizee" onClick={()=>verify(d._id)}></i>
                        </div>
                        {show === d._id && (
                            <div id="buttomCardSecund" className={d._id}>
                                <div className="org"></div>
                                <div className="ObjCard"><b> </b>{d.obj}</div>
                                <div className="ObjCard"><b> </b>{d.slg}</div>
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
                            {/* <i className="fa-brands fa-pagelines sizeTrie"></i>
                            <i className='numberTrie'>004</i>
                            <div className="risco"></div>
                            <div className="descTrie">PROJETOS ELABORADOS</div> */}
                        </div>
                        <div className="elementCardTrie">
                            {/* <i className="fa-solid fa-chart-line sizeTrie"></i>
                            <i className='numberTrie'>003</i>
                            <div className="risco"></div>
                            <div className="descTrie">PROJETOS EXECUTADOS</div> */}
                        </div>
                        <div className="elementCardTrie">
                            {/* <i className="fa-solid fa-map-location-dot sizeTrie"></i>
                            <i className='numberTrie'>002</i>
                            <div className="risco"></div>
                            <div className="descTrie">REGIÕES BENEFICIADAS</div> */}
                        </div>
                        <div className="elementCardTrie">
                            {/* <i className="fa-solid fa-person-harassing sizeTrie"></i>
                            <i className='numberTrie'>150</i>
                            <div className="risco"></div>
                            <div className="descTrie">POPULAÇÃO ALCANÇADA</div> */}
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
