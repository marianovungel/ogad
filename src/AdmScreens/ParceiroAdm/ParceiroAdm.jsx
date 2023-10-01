import React, { useEffect, useState } from 'react'
import './ParceiroAdm.css'
import MenuAdm from '../MenuAdm/MenuAdm'
import Swal from 'sweetalert2';
import api from '../api';
import { useContext } from 'react';
import {Context} from '../../Context/Context'
import Auth from '../Auth/Auth';

//upload img
async function postImage({image, description}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
  
    const result = await api.post('/upload/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data.url;
  }

export default function ParceiroAdm() {
    const [db, setDb] = useState([])
    const [Banner, setBanner] = useState(false)
    const [img, setImg] = useState(null)
    const [Title, setTitle] = useState("")
    const [obj, setObj] = useState("")
    const [imgE, setImgE] = useState(null)
    const [imgEA, setImgEA] = useState(null)
    const [TitleE, setTitleE] = useState("")
    const [objE, setObjE] = useState("")
    const [IdEdit, setIdEdit] = useState(null)
    const [Edit, setEdit] = useState(null)

    const [UserAdm, setUserAdm] = useState(null)
    const {user} = useContext(Context)



    const getData = async()=>{
        try {
            var {data} = await api.get("/parceiros")
            var res = data
            for(var x = 0; x < data.length; x++){
                data[x] = {...res[x], ordem:x}
            }
            setDb(data)
        } catch (error) {}
    }


    const getUserAdm = async()=>{
        try {
            var resUser = await api.post("/adm/getuser",{path: user.token})
            if(resUser.data.setu === "resgatamento"){
                setUserAdm(resUser.data.setu)
            }else{
                window.location.replace("/login");
            }
        } catch (error) {}
    }

    
    useEffect(()=>{
        getUserAdm()
        getData()
    }, )

    const Cadastrar = async()=>{
        try {
            var result = null
            if(img){
                const description = Date.now() + img.name;
                result = await postImage({image: img, description})
            }

            if(result){
                setBanner(false)
                await api.post("/parceiros", {
                    title: Title,
                    img:result,
                    desc:obj
                })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Alteração feita com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                window.location.reload()
            }else{
                setBanner(true)
            }
        } catch (error) {}
    }

    const deletText = async(data)=>{
        try {
            await api.delete(`/parceiros/${data}`)
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deletado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
        window.location.reload()
        } catch (error) {}
    }

    const DeleteTextConfirm = (data)=>{
        console.log(data)
        Swal.fire({
            title: 'Tens certeza?',
            text: "Você estás abilitar a deleção!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'
          }).then((result) => {
            if (result.isConfirmed) {
                deletText(data)
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            }
          })
        
    }


    const EditTextConfirm = (data)=>{
        if(Edit === data._id){
            setEdit(null)
            setImgE(null)
            setImgEA(null)
            setTitleE("")
            setObjE("")
            setIdEdit(null)
        }else{
            setEdit(data._id)
            setTitleE(data.title)
            setObjE(data.desc)
            setIdEdit(data._id)
            setImgEA(data.img)
        }
    }

    const EditFundador = async()=>{
        try {

            var result=null;
            
            if(imgE){
                const description = Date.now() + imgE.name;
                result = await postImage({image: imgE, description})
            }
            
            await api.put(`/parceiros/${IdEdit}`,{
                img: result ? result : imgEA,
                title: TitleE,
                desc:objE
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Alteração feita com sucesso!',
                showConfirmButton: false,
                timer: 1500
              })
            window.location.reload()
            setEdit(true)
        } catch (error) {}
    }

  return (
    <>
    {UserAdm && (
    <div>
        <MenuAdm />
        <Auth />
        {/* ================================================ */}
        <div className="newFullContentForm">
            <div className="oitentaofFull">
                <div className="CadastrarNovoTema">Cadastrar Parceria</div>
                {Banner && (<div className="CadastrarNovoTemaRed">Preencha todos os campos...</div>)}
                <input type="file" id='imgUserPhoto' accept="image/*" className="textFastIn" onChange={(e)=> setImg(e.target.files[0])}  />
                <input type="text" className="textFastIn" placeholder='Nome da Parceria...' onChange={(e)=> setTitle(e.target.value)} />
                <input type="text" className="textFastIn" placeholder='Descrição' onChange={(e)=> setObj(e.target.value)} />
                <div className="divNewLateralButt"><button className="butbtnNeww" onClick={Cadastrar}>Cadastrar...</button></div>
            </div>
        </div>
        {/* =============================================== */}
      <div className="TitlePesquisadores">Parceiros</div>
        {db?.map((d)=>(
            <div className={ d.ordem % 2 === 0 ? "pesquisadores newAlingCardPar" : "pesquisawhite newAlingCardPar" } key={d._id}>
                <div className="oitentaPesquisadores">
                    <div className={ d.ordem % 2 === 0 ? "cardColaboradores":"cardColaboradoresWhite"}>
                        <div className="descColaboradorPes">
                            <div className="nomeColaPes">{d.title}</div>
                            <div className="descColaPes">{d.desc}</div>
                            <div className="editDelet">
                                <i className="fa-solid fa-trash-can icBalde" onClick={()=>DeleteTextConfirm(d._id)}></i>
                                <i className="fa-solid fa-pen-to-square icLap" onClick={()=>EditTextConfirm(d)}></i>
                            </div>
                        </div>
                        <div className="imagemColaboradorPes">
                            <img src={d.img} alt="" className="imgColaPes" />
                        </div>
                    </div>
                </div>

                {/* ==================================================== */}
                    {Edit === d._id && (
                        <div className="newFullContentForm">
                            <div className="oitentaofFull">
                                <div className="CadastrarNovoTemaNew">Editar o Parceria...</div>
                                {Banner && (<div className="CadastrarNovoTemaRed">Preencha todos os campos...</div>)}
                                <input type="file" id='imgUserPhoto' accept="image/*" className="textFastIn" onChange={(e)=> setImgE(e.target.files[0])}  />
                                <input type="text" className="textFastIn" placeholder='Título' onChange={(e)=> setTitleE(e.target.value)} />
                                <input type="text" className="textFastIn" placeholder='Descrição' onChange={(e)=> setObjE(e.target.value)} />
                                <div className="divNewLateralButt"><button className="butbtnNeww" onClick={EditFundador}>Cadastrar...</button></div>
                            </div>
                        </div>
                    )}
                {/* ==================================================== */}
            </div>

        ))}
    </div>
    )}
    </>
  )
}
