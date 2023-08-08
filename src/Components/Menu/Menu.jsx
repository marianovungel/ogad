import React, { useEffect, useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu({select}) {
  const [selectItem, setSelectItem] = useState(select)
  useEffect(()=>{
    setSelectItem(selectItem)
  }, [selectItem])
  return (
    <div className='Menu'>
      <div className="fullMenu">
        <div className="logoImg">
            <img src="./ogad.png" className='logoClass' alt="" />
            <div className="textTitle">
                <p className="title">OBSERVATÓRIO GUINEENSE</p>
                <p className="title">SOBRE ÁLCOOL E OUTRAS DROGAS</p>
            </div>
        </div>
        <div className="menuEscolha">
            <Link to='/'><div className={selectItem==="inicio" ? "itemMenu": "itemMenu"}>Início</div></Link>
            {/* <div className={selectItem==="inicio" ? "selectButton": "itemMenu"}>Início</div> */}
            <Link to='/sobre'><div className={selectItem==="2" ? "selectButton": "itemMenu"}>Sobre</div></Link>
            <div className={selectItem==="3" ? "selectButton": "itemMenu"}>Projetos</div>
            <div className={selectItem==="4" ? "selectButton": "itemMenu"}>Atualidade</div>
            <div className={selectItem==="5" ? "selectButton": "itemMenu"}>Contato</div>
        </div>
      </div>
    </div>
  )
}