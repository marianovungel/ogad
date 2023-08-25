import React from 'react'
import './Sobre.css'
import Header from '../../Components/Header/Header'
import Humburguer from '../../Components/Humburguer/Humburguer'
import Menu from '../../Components/Menu/Menu'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'

export default function Sobre() {

    const Ivanilson  = ()=>{
        window.open('http://lattes.cnpq.br/2236991952896513')
    }

  return (
    <div className='Sobre'>
        <Header />
        <Humburguer />
        <Menu select={"inicio"} />
        <div className="svgContent">
            <div className="widthSvgContent">
                <div className="textSvgContent">
                    <div className="textBack">
                        <p className="ogadText">CGAD</p>
                        <p className="textDescOGADSobre">Centro de Pesquisa Guineense </p>
                        <p className="textDescOGADSobre">em álcool e outras drogas...</p>
                    </div>
                </div>
                <div className="pSvgContent">
                    {/* <div className="borderContent">
                        <div className="borderContentItem">
                            A gente apoia o não uso das drogas...
                        </div>
                        <div className="numberBorder">01</div>
                    </div>
                    <div className="borderContent">
                        <div className="borderContentItem">
                            A drogas causam dependencias...
                        </div>
                        <div className="numberBorder">02</div>
                    </div>
                    <div className="borderContent DesativarborderContent">
                        <div className="borderContentItem">
                            A drogas danificam a saúde...
                        </div>
                        <div className="numberBorder">03</div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="nossaSobreFull">
            <div className="oitentaNossa">
                <div className="TitleNossa">Nossa história</div>
                <p className="paragrafoNossa">
                A Guiné-Bissau é uma nação do continente africano composta por uma exuberante multiplicidade étnica, com cerca de trinta grupos étnicos. Cada nação étnica contém a sua própria língua e a forma de enxergar o mundo. São essas singularidades que deixam o povo Bissau-guineense mais alegre, carismático e hospitaleiro. O país tomou a sua independência unilateralmente em 1973 e, de lá para cá, a sua história política/burocrática vem sendo marcada por cíclicas instabilidades políticas, levando o Estado a enfrentar vários problemas em diferentes áreas, como: educação, saúde e saneamento básico, dentre outros. Dito isso, a escassez de políticas públicas, em diferentes áreas, pode ser associada ao consumo problemático de álcool e outras drogas em Guiné-Bissau, principalmente em população mais jovem.
                </p>
                <p className="paragrafoNossa">
                Nesse sentido, o Centro de Pesquisa Guineense em Álcool e outras Drogas (CGAD) visa ser uma entidade de estudo e pesquisa que discutirá sobre o consumo de álcool e outras drogas, a partir das perspectivas biopsicossociais, ou seja, sem moralismo e/ou amedrontamento.  São objetivos do CGAD: (1) realizar estudos e pesquisas sobre o consumo de álcool e outras drogas em Guiné-Bissau; (2) analisar os contextos de consumo de substâncias; (3) conhecer os problemas associados ao consumo de álcool e outras drogas em Guiné-Bissau; (4) propor políticas públicas sobre prevenção e cuidado e (5) monitorar políticas públicas sobre o enfrentamento do consumo álcool e outras drogas em Guiné-Bissau e traçar uma comparação com outros países da CPLP-Comunidade dos Países de Língua Portuguesa.
                </p>
                <p className="paragrafoNossa">
                    O CGAD nasce através de experiências acadêmicas no NEPSIS- Núcleo de Pesquisa em Saúde e Uso de Substância, desde 2018 fomentando a ideia de criar uma entidade que propusesse discutir sobre os principais problemas associados ao consumo problemático de álcool e outras drogas em Guiné-Bissau. Uma discussão que levasse em conta as singularidades dos sujeitos, as particularidades que cada contexto apresenta, associado ao uso de substâncias. Entretanto, no decorrer dos anos, foram longos diálogos/encontros/troca de experiências com pesquisadores do NEPSIS, no sentido de eles conhecerem melhor o contexto guineense sobre o consumo de drogas e assim pensar nas propostas sobre intervenções.
                </p>
                <p className="paragrafoNossa">
                Nessas conversas, sempre surgiram reflexões importantes. Reflexões essas que muitas vezes foram expressas em forma de perguntas: (1) quais são os principais problemas atrelados ao consumo de álcool e outras drogas em Guiné-Bissau? (2) como pensar num plano de diagnóstico situacional sobre essa problemática em Guiné-Bissau? (3) como adaptar uma intervenção brasileira, comprovada cientificamente ao contexto guineense? São perguntas que não ficarão restritas aos contextos das nossas conversas, mas sim nortearão todo o trabalho do CGAD em Guiné-Bissau.
                </p>
                
            </div>
        </div>
        <div className="membros">
            <div className="oitentaMembros">
                <div className="headerMembros">
                    <div className="TitleMembros">Membros Fundadores</div>
                    <p className="pMembros">Os Combatentes Que Iniciaram o Projeto</p>
                </div>
                <div className="itemMembros2">
                    <div className="cardMembro2">
                        <div className="imgCardMembro2">
                            <img src="./iva.jpeg" alt="" className="imageCardMembro2" />
                            <div className="NameAndCardgoCArdMembro">
                                <div className="textsMembroCardNome">
                                    <div className="nomeMembro2">Ivanilson Monteiro</div>
                                    <i className="CargoDoMembro2">Fundador</i>
                                </div>
                                <button className="cardItemButtonMembro" onClick={Ivanilson}>
                                    Saiba mais
                                    <i className="fa-solid fa-user-plus paddingIconMembro"></i>
                                </button>
                            </div>
                        </div>
                        <div className="descCArdMembro">Sou Licenciado em Letras (pt-br) e sou o Fundador deste site...</div>
                    </div>
                    <div className="cardMembro2">
                        <div className="imgCardMembro2">
                            <img src="./cgadt.png" alt="" className="imageCardMembro2" />
                            <div className="NameAndCardgoCArdMembro">
                                <div className="textsMembroCardNome">
                                    <div className="nomeMembro2">Nome</div>
                                    <i className="CargoDoMembro2">Função</i>
                                </div>
                                <button className="cardItemButtonMembro" >
                                    Saiba mais
                                    <i className="fa-solid fa-user-plus paddingIconMembro"></i>
                                </button>
                            </div>
                        </div>
                        <div className="descCArdMembro">Breve descrição do Fundador...</div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="membros colorMembroBackground">
            <div className="oitentaMembros">
                <div className="headerMembros">
                    <div className="TitleMembros">Colaboradores</div>
                    <p className="pMembros">Os Combatentes Que Iniciaram o Projeto</p>
                </div>
                <div className="itemMembros2">
                    <div className="cardMembro2">
                        <div className="imgCardMembro2">
                            <img src="./cgadt.png" alt="" className="imageCardMembro2" />
                            <div className="NameAndCardgoCArdMembro">
                                <div className="textsMembroCardNome">
                                    <div className="nomeMembro2">Nome</div>
                                    <i className="CargoDoMembro2">função</i>
                                </div>
                                <button className="cardItemButtonMembro">
                                    Saiba mais
                                    <i className="fa-solid fa-user-plus paddingIconMembro"></i>
                                </button>
                            </div>
                        </div>
                        <div className="descCArdMembro">Breve descrição do colaborador...</div>
                    </div>
                    <div className="cardMembro2">
                        <div className="imgCardMembro2">
                            <img src="./cgadt.png" alt="" className="imageCardMembro2" />
                            <div className="NameAndCardgoCArdMembro">
                                <div className="textsMembroCardNome">
                                    <div className="nomeMembro2">Nome</div>
                                    <i className="CargoDoMembro2">Função</i>
                                </div>
                                <button className="cardItemButtonMembro">
                                    Saiba mais
                                    <i className="fa-solid fa-user-plus paddingIconMembro"></i>
                                </button>
                            </div>
                        </div>
                        <div className="descCArdMembro">Breve descrição do colaborador...</div>
                    </div>
                    
                </div>
            </div>
        </div>
        <SubFooter />
        <Footer />
    </div>
  )
}
