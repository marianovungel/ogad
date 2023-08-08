import React from 'react'
import './Humburguer.css'

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
                <i class="fa-solid fa-bars iall"></i>
            </div>
            <div id="myLinks">
                <a href="#news">Início</a>
                <a href="#contact">Sobre</a>
                <a href="#about">Projetos</a>
                <a href="#about">Atividade</a>
                <a href="#about">Contatos</a>
            </div>
        </div>
    </div>
  )
}
