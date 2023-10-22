import React from 'react'
import './MenuAdm.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MenuAdm({select}) {
    const [selectItem, setSelectItem] = useState(select)
  useEffect(()=>{
    setSelectItem(selectItem)
  }, [selectItem])
  return (
    <div className='Menu'>
      <div className="fullMenu">
        <div className="logoImg">
            <img src="./cgadt.png" className='logoClass' alt="" />
            <div className="textTitle">
                <p className="title">CENTRO DE PESQUISA GUINEENSE</p>
                <p className="title">EM ÁLCOOL E OUTRAS DROGAS</p>
            </div>
        </div>
        <div className="menuEscolha">
            <Link to='/homeadm'><div className={selectItem==="inicio" ? "itemMenu": "itemMenu"}>Início</div></Link>
            {/* <div className={selectItem==="inicio" ? "selectButton": "itemMenu"}>Início</div> */}
            <Link to='/sobreadm'><div className={selectItem==="2" ? "selectButton": "itemMenu"}>Sobre</div></Link>
            <Link to='/temaadm'><div className={selectItem==="3" ? "selectButton": "itemMenu"}>Temas</div></Link>
            <Link to='/atualadm'><div className={selectItem==="4" ? "selectButton": "itemMenu"}>Atualidades</div></Link>
            <Link to='/contatoadm'><div className={selectItem==="5" ? "selectButton": "itemMenu"}>Contatos</div></Link>
            <Link to='/parceriasadm'><div className={selectItem==="5" ? "selectButton": "itemMenu"}>Parcerias</div></Link>
        </div>
      </div>
    </div>
  )
}
