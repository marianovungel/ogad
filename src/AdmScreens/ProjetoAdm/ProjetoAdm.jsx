import React from 'react'
import './ProjetoAdm.css'
import { useEffect } from 'react'
import { useState } from 'react'
import MenuAdm from '../MenuAdm/MenuAdm'
import api from '../api'
import Swal from 'sweetalert2'
import { useContext } from 'react';
import {Context} from '../../Context/Context'

//upload img
async function postImage({image, description}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
  
    const result = await api.post('/upload/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data.url;
  }

export default function ProjetoAdm() {
    const [pro, setPro] = useState()
    const [show, setShow] = useState(" ")
    const [Banner, setBanner] = useState(false)
    const [Edit, setEdit] = useState(null)
    const [img, setImg] = useState(null)
    const [Title, setTitle] = useState("")
    const [obj, setObj] = useState("")
    const [imgE, setImgE] = useState(null)
    const [imgEA, setImgEA] = useState(null)
    const [TitleE, setTitleE] = useState("")
    const [objE, setObjE] = useState("")
    const [IdEdit, setIdEdit] = useState(null)

    const [UserAdm, setUserAdm] = useState(null)
    const {user} = useContext(Context)

    const gatAll= async()=>{
        try {
            const response = await api.get("/tema")
            setPro(response.data)
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
        gatAll()
    }, )

    

    const verify = (id)=>{
        if(show === id){
            setShow(" ")
        }else{
            setShow(id)
        }
    }

    const Cadastrar = async()=>{
        try {
            var result = null
            if(img){
                const description = Date.now() + img.name;
                result = await postImage({image: img, description})
            }

            if(result){
                setBanner(false)
                await api.post("/tema", {
                    title: Title,
                    img:result,
                    obj
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
            await api.delete(`/tema/${data}`)
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Alteração feita com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
        window.location.reload()
        } catch (error) {}
    }

    const DeleteTextConfirm = (data)=>{
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
            setObjE(data.obj)
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
            
            await api.put(`/tema/${IdEdit}`,{
                img: result ? result : imgEA,
                title: TitleE,
                obj:objE
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
        <MenuAdm select={"project"} />
        <div className="newFullContentForm">
            <div className="oitentaofFull">
                <div className="CadastrarNovoTema">Cadastrar Novo Tema</div>
                {Banner && (<div className="CadastrarNovoTemaRed">Preencha todos os campos...</div>)}
                <input type="file" id='imgUserPhoto' accept="image/*" className="textFastIn" onChange={(e)=> setImg(e.target.files[0])}  />
                <input type="text" className="textFastIn" placeholder='Título' onChange={(e)=> setTitle(e.target.value)} />
                <input type="text" className="textFastIn" placeholder='Descrição' onChange={(e)=> setObj(e.target.value)} />
                <div className="divNewLateralButt"><button className="butbtnNeww" onClick={Cadastrar}>Cadastrar...</button></div>
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
                        <div className="editDeletCardIcons">
                            <i className="fa-solid fa-trash-can delred" onClick={()=>DeleteTextConfirm(d._id)}></i>
                            <i className="fa-solid fa-pen-to-square delamarelo" onClick={()=>EditTextConfirm(d)}></i>
                        </div>
                        <div className="buttonProjectsSecund">
                            <i className="fa-solid fa-circle-arrow-down arrowSizee" onClick={()=>verify(d._id)}></i>
                        </div>
                        {show === d._id && (
                            <div id="buttomCardSecund newMar" className={d.id}>
                                <div className="ObjCard"><b> </b>{d.obj}</div>
                            </div>
                        )}

                        {Edit === d._id && (
                        <div className="newFullContentForm">
                            <div className="oitentaofFull">
                                <div className="CadastrarNovoTema">Editar o Tema...</div>
                                {Banner && (<div className="CadastrarNovoTemaRed">Preencha todos os campos...</div>)}
                                <input type="file" id='imgUserPhoto' accept="image/*" className="textFastIn" onChange={(e)=> setImgE(e.target.files[0])}  />
                                <input type="text" className="textFastIn" placeholder='Título' onChange={(e)=> setTitleE(e.target.value)} />
                                <input type="text" className="textFastIn" placeholder='Descrição' onChange={(e)=> setObjE(e.target.value)} />
                                <div className="divNewLateralButt"><button className="butbtnNeww" onClick={EditFundador}>Cadastrar...</button></div>
                            </div>
                        </div>
                        )}
                    </div> 
                ))}
            </div>
        </div>
    </div>
    )}
    </>
  )
}