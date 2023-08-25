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
            title:"Tipos de drogas consumidas em Guiné-Bissau",
            desc:"",
            obj:"A reflexão sobre drogas consumidas em Guiné-Bissau e a diferença do consumo entre regiões, permitirá uma melhor compreensão do impacto dessas substâncias na saúde da população guineense.",
            slg:""
        },
        {
            id:"2",
            img:"././cgad.jpeg",
            title:"Drogas e educação",
            desc:"",
            obj:"A educação desempenha papel importante no desenvolvimento de qualquer que seja nação. Entretanto, a participação das escolas, dos professores e dos pais encarregados da educação é de extrema relevância na busca dos mecanismos de enfrentamento, prevenção e tratamento/acolhimento.",
            slg:""
        },
        {
            id:"3",
            img:"./cgad.jpeg",
            title:"Drogas e a população jovem",
            desc:"",
            obj:"Um pouco mais de 60% da população guineense é jovem. Quais são políticas públicas de enfrentamento de uso abusivo de álcool e outras direcionadas a esse segmento social em Guiné-Bissau? Feita essa pergunta, urge pensar nas estratégias de pesquisas que possam reportar a real situação do consumo desse estrato social, e com isso propor políticas públicas de enfrentamento.",
            slg:""
        },
        {
            id:"4",
            img:"././cgad.jpeg",
            title:"Saúde mental da população jovem e uso de álcool e outras drogas",
            desc:"",
            obj:"Os problemas relacionados a saúde mental   é uma importante questão de saúde pública porque perpassa todas as etapas da vida. Nesse rumo, as discussões em torno dessa problemática vem ganhando notoriedade cada vez mais. Mirando as características específicas/singulares que a população jovem Bissau-guineense apresenta, urge entender as relações existentes entre o consumo problemático de álcool e outras e os problemas associados a saúde mental.",
            slg:""
        },
        {
            id:"5",
            img:"././cgad.jpeg",
            title:"Álcool e a população idosa",
            desc:"",
            obj:"À medida que o mundo envelhece, o uso de álcool e outras drogas por pessoas acima de 65 anos cresce. O uso da substância pela população idosa acarreta problemas de caráter biopsicossociais que, muitas vezes, acabam afetando-os drasticamente em diferentes níveis. Considerando a realidade guineense, com quase inexistente sistema de proteção social voltada a esse extrato populacional, um abandono total do Estado, refletir sobre a prevalência desse fenômeno e propor políticas públicas de enfrentamento, pode melhorar condições de vida dessas pessoas.",
            slg:""
        },
        {
            id:"6",
            img:"./cgad.jpeg",
            title:"Drogas e a violência domestica",
            desc:"",
            obj:"67% das mulheres guineenses já sofreram algum tipo de violência doméstica (FEC,2021). A impunidade perante este crime sustenta a sua prevalência. Com isso, urge refletir sobre as relações existentes entre o uso de drogas e a violência doméstica no país.",
            slg:""
        },
        {
            id:"7",
            img:"././cgad.jpeg",
            title:"Políticas públicas sobre enfrentamento de uso de álcool e outras drogas em Guiné-Bissau",
            desc:"",
            obj:"Monitorar políticas públicas de enfrentamento do consumo álcool e outras drogas em Guiné-Bissau e traçar uma comparação com outros países da CPLP-Comunidade dos Países de Língua Portuguesa, Angola, Brasil, Cabo Verde, Guiné-Bissau Moçambique, Portugal, São Tomé e Príncipe e o Timor Leste, no sentido de incentivar a partilha de melhores práticas sobre prevenção e tratamento/acolhimento.",
            slg:""
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
                            <div className="descriptionProjectsSecund"></div>
                        </div>
                        <div className="buttonProjectsSecund">
                            <i className="fa-solid fa-circle-arrow-down arrowSizee" onClick={()=>verify(d.id)}></i>
                        </div>
                        {show === d.id && (
                            <div id="buttomCardSecund" className={d.id}>
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
