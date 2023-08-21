import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contato.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Humburguer from '../../Components/Humburguer/Humburguer'
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import SubFooter from '../../Components/SubFooter/SubFooter';
import Footer from '../../Components/Footer/Footer';

export default function Contato() {
    const  [status, setStatus] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x1gywkk', 'template_nha5mop', form.current, 'NydSs6yI1bSQuFoaC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensagem enviada com Sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.replace("/contatos");
    };

    function onChange(value) {
        if(value){
            setStatus(true)
        }else{
            setStatus(false)
        }
    }
    
  return (
    <div className='Contato'>
      <Header />
      <Menu />
      <Humburguer />
      <div className="fullContentFast">
            <div className="colorFastContent">
                <div className="oitentaFastContent">
                    <h1 className="centerFastContent" id='newSizeTitle'>Seu Contacto é importante</h1>
                    <p className="paragradoFastContent" id='newSizeP'>
                        O seu Parecer é importante para melhorar os nossos Serviços
                    </p>
                </div>
            </div>
        </div>
      <div className="contactosContentPage">
        <div className="fullRed">
            <div className="telContent">
                <div className="TitleRed">CONTACTOS:</div>
                <div className="ItemTelRed">
                    <div className="descItemTelRed">
                        <i className="fa-solid fa-location-dot sizeRedIcon"></i>
                        <div className="descTitleRedTell">
                            <div className="TitleTelItemRed">Endereço</div>
                            <div className="EnderecoItemTellRed">Fortaleza/Redenção-CE</div>
                        </div>
                    </div>
                    <div className="descItemTelRed">
                        <i className="fa-solid fa-mobile-screen-button sizeRedIcon"></i>
                        <div className="descTitleRedTell">
                            <div className="TitleTelItemRed">Telefones</div>
                            <div className="EnderecoItemTellRed">(+245)  955 489 766 | 966 735 111</div>
                        </div>
                    </div>
                    <div className="descItemTelRed">
                        <i className="fa-regular fa-envelope sizeRedIcon"></i>
                        <div className="descTitleRedTell">
                            <div className="TitleTelItemRed">E-mail</div>
                            <div className="EnderecoItemTellRed">cgadguinebissau@gmail.com | ivannildo@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="RedContent">
                <div className="TitleFacebookRed">ESTAMOS NA REDE:</div>
                <div className="midiasSociasRed">
                    <i className="fa-brands fa-square-facebook iconsocRed"></i>
                    <div className="tracoRed"></div>
                    <i className="fa-brands fa-twitter iconsocRed"></i>
                    <div className="tracoRed"></div>
                    <i className="fa-brands fa-square-instagram iconsocRed"></i>
                    <div className="tracoRed"></div>
                    <i className="fa-brands fa-youtube iconsocRed"></i>
                </div>
                <div className="divTextRed">
                Através das nossas redes sociais, pode encontrar também as nossas publicações diárias e interagir connosco de forma instantânea.
                </div>
            </div>
        </div>
      </div>
      <div className="formContent">
        <form ref={form} onSubmit={sendEmail} className="oitenteForm">
            <div className="titleForm">Envie-nos sua mensagem!</div>
            <div className="nomeForm">
                <div className="labelContent">
                    <label  className='NegritoName'>Nome completo</label>
                    <i className="xege">*</i>
                </div>
                <input type="text" name="user_name" id="user_name" maxLength={100} className="NomeFormItem" placeholder='Seu nome completo aqui...' required />
            </div>
            <div className="EmailFormContent">
                <div className="emailForm">
                    <div className="labelContent">
                        <label  className='NegritoName'>E-mail</label>
                        <i className="xege">*</i>
                    </div>
                    <input type="email" id="user_email" maxLength={100} className="NomeFormItem" placeholder='Seu email aqui...' required />
                </div>
                <div className="emailForm">
                    <div className="labelContent">
                        <label  className='NegritoName'>Telefone</label>
                        <i className="xege">*</i>
                    </div>
                    <input type="tel" name="user_tell" id="user_tell" maxLength={20} className="NomeFormItem" required placeholder='Seu telefone aqui...' />
                </div>
            </div>
            <div className="selectFormContent">
                <div className="nomeForm">
                    <div className="labelContent">
                        <label  className='NegritoName'>Assunto</label>
                        <i className="xege">*</i>
                    </div>
                    <select name="user_title" id="user_title" className="SeletFormItem" required>
                        <option value="Pedir Informações">Pedir Informações</option>
                        <option value="Solicitar parceria">Solicitar parceria</option>
                        <option value="Suporte Técnico">Suporte Técnico</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
            </div>
            <div className="messagemForm">
                <div className="nomeForm">
                    <div className="labelContent">
                        <label  className='NegritoName'>Mensagem</label>
                        <i className="xege">*</i>
                    </div>
                    <textarea id="message" maxLength={2000} placeholder='Sua Mensagem...' required name="message" rows="4" cols="50" className='messageFormItem'>
                    </textarea>
                    
                </div>
            </div>
            
            <div className="buttonFormMessage">
                <ReCAPTCHA
                    sitekey="6LedgZcnAAAAAIup7OG6TnUmuG4Tr_imnDNG1G2Y"
                    onChange={onChange}
                />
            </div>
            <div className="buttonFormMessage">
                <button disabled={!status} id={!status ? "disableCursor": ""} value="Send" className="buttonMSM" type="submit">Enviar Mensagem</button>
            </div>
        </form>
      </div>
      <SubFooter />
      <Footer />
    </div>
  )
}
