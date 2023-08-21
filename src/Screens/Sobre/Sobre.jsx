import React from 'react'
import './Sobre.css'
import Header from '../../Components/Header/Header'
import Humburguer from '../../Components/Humburguer/Humburguer'
import Menu from '../../Components/Menu/Menu'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'

export default function Sobre() {
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
                <div className="TitleNossa">A nossa história</div>
                <p className="paragrafoNossa">
                    A Tiniguena é uma organização não governamental guineense fundada em 1991, que visa promover o desenvolvimento participativo e durável, baseado na conservação dos recursos naturais e culturais e no exercício da cidadania.
                </p>
                <p className="paragrafoNossa">
                    A organização tem como foco as questões ambientais, contando com uma abordagem consolidada em vários domínios incluindo a soberania, segurança alimentar e nutricional, a animação, organização e mobilização comunitária, a influencia de políticas públicas, a gestão durável de espaços recursos naturais e culturais, e capacitação feminina.
                </p>
                <p className="paragrafoNossa">
                    A Tiniguena é uma referência ao nível nacional nas questões ambientais, tendo contribuído para o despertar de uma consciência ambiental crescente junto do público nacional, para o maior interesse dos guineenses pelas questões da biodiversidade e dos saberes associados, para o aumento da procura e consumo dos produtos locais oriundos da biodiversidade e para o desenvolvimento de iniciativas portadoras de esperança em termos de promoção da soberania alimentar, da dinamização da economia local, da melhoria do quadro de vida das populações, através da apropriação, da valorização e da governação responsável dos espaços e recursos naturais pelas comunidades locais.
                </p>
                <p className="paragrafoNossa">
                    O apoio prestado ao processo de criação e governação participativa da Área Marinha Protegida Comunitária das Ilhas Urok e o investimento na Geração Nova da Tiniguena (GNT) um espaço de aprendizagem para os jovens, constitui um exemplo desta abordagem, fecunda em ensinamentos e que tem vindo a expandir-se no país e na sub-região.
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
                                    <div className="nomeMembro2">Ivanilson</div>
                                    <i className="CargoDoMembro2">Fundador</i>
                                </div>
                                <button className="cardItemButtonMembro">
                                    Saiba mais
                                    <i className="fa-solid fa-user-plus paddingIconMembro"></i>
                                </button>
                            </div>
                        </div>
                        <div className="descCArdMembro">Sou Licenciado em Letras (pt-br) e sou o Fundador deste site...</div>
                    </div>
                    <div className="cardMembro2">
                        <div className="imgCardMembro2">
                            <img src="./mar.jpeg" alt="" className="imageCardMembro2" />
                            <div className="NameAndCardgoCArdMembro">
                                <div className="textsMembroCardNome">
                                    <div className="nomeMembro2">Mariano Vunge</div>
                                    <i className="CargoDoMembro2">Desenvolvedor</i>
                                </div>
                                <button className="cardItemButtonMembro">
                                    Saiba mais
                                    <i className="fa-solid fa-user-plus paddingIconMembro"></i>
                                </button>
                            </div>
                        </div>
                        <div className="descCArdMembro">Sou Estudante Eng. Computação e desenvolvedor Fulltrack Js...</div>
                    </div>
                    
                </div>
            </div>
        </div>
        <SubFooter />
        <Footer />
    </div>
  )
}
