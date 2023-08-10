import React from 'react'
import './Humburguer.css'
import { Link } from 'react-router-dom';

export default function Humburguer() {
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  return (
    <div className='Humburguer'>
        <div className="topnav">
            <a href="#home" className="active">
                <img src='./logof.png' alt='' className='ImgHumburguer' />
            </a>
            <div  className="icon" onClick={myFunction}>
                <i className="fa-solid fa-bars iall"></i>
            </div>
            <div id="myLinks">
                <Link to='/'>Início</Link> 
                <Link to='/sobre'>Sobre</Link>
                <Link to='/projeto'>Projetos</Link>
                <Link to='/atualidade'>Atividade</Link>
                <a href="#about">Contatos</a>
            </div>
        </div>
    </div>
  )
}
