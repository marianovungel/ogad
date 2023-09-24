import React, { useEffect, useState } from 'react'
import './HomeAdm.css'
import api from '../api'
import Swal from 'sweetalert2';
import MenuAdm from '../MenuAdm/MenuAdm';
import { useContext } from 'react';
import {Context} from '../../Context/Context'

//upload img
async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await api.post('/upload/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  console.log(result.data.url)
  return result.data.url;
}


export default function HomeAdm() {
    const [pro, setPro] = useState()
    const [UserAdm, setUserAdm] = useState(false)
    const [header,  setHeader] = useState()
    const [show, setShow] = useState(" ")
    const [missao, setMissao] = useState(null)
    const [visao, setVisao] = useState(null)
    const [valor, setValor] = useState(null)
    const [edit, setEdit] = useState(false)
    const [iMissao, setIMissao]= useState(null)
    const [iVisao, setIVisao]= useState(null)
    const [iValor, setIValor]= useState(null)

    const {user} = useContext(Context);

    const confirm = ()=>{
        Swal.fire({
            title: 'Desejas salvar estas alterações ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            denyButtonText: `Não Salvar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            //   Swal.fire('Saved!', '', 'success')
                saveImage()
            } else if (result.isDenied) {
              Swal.fire('Alteração não salva', '', 'info')
            }
          })
    }


    const saveImage= async()=>{
        var resultVa=null;
        var resultVi=null;
        var result=null;
        if(iMissao){
            const description = Date.now() + iMissao.name;
            result = await postImage({image: iMissao, description})
        }
        if(iVisao){
            const description = Date.now() + iVisao.name;
            resultVi = await postImage({image: iVisao, description})
        }
        if(iValor){
            const description = Date.now() + iValor.name;
            resultVa = await postImage({image: iValor, description})
        }
        console.log([missao, valor, visao])
        console.log(pro)
        
        const ObjectUpdate = {
            header:header,
            missao:missao ? missao : pro[0].obj,
            visao:visao ? visao : pro[1].obj,
            valor:valor ? valor : pro[2].obj,
            imissao: iMissao ? result : pro[0].img,
            ivisao:iVisao ? resultVi : pro[1].img,
            ivalor:iValor ? resultVa : pro[2].img,
        }
        console.log(ObjectUpdate)
        const keyId='64ed8bd8c6bd3e465a738fd0'
        const NewRes = await api.put("/home/"+keyId, ObjectUpdate)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Alteração feita com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })

        console.log(NewRes)
    }

    const getData = async()=>{
        try {
            const {data} = await api.get("/home")
            setHeader(data[0].header)

            const BigRes = [
                {
                    id:"1",
                    img:data[0].imissao,
                    title:"MISSÃO",
                    obj:data[0].missao
                },
                {
                    id:"2",
                    img:data[0].ivisao,
                    title:"VISÃO",
                    obj:data[0].visao
                },
                {
                    id:"3",
                    img:data[0].ivalor,
                    title:"VALORES",
                    obj:data[0].valor
                }
            ]
            setPro(BigRes)
            // setMissao(data[0].missao)
            // setVisao(data[0].visao)
            // setValor(data[0].valor)

        } catch (error) {
            console.log(error)
        }
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

  const verify = (id)=>{
    if(show === id){
        setShow(" ")
    }else{
        setShow(id)
    }
}

const SetEditForm = ()=>{
    setEdit(true)
}
const Xmissao = ()=>{
    setMissao(pro[0].obj)
    setEdit(false)
}
const Xvisao = ()=>{
    setVisao(pro[1].obj)
    setEdit(false)
}
const Xvalor = ()=>{
    setValor(pro[2].obj)
    setEdit(false)
}
  return (
    <>
    {UserAdm && (
     <div>
        <MenuAdm select={"inicio"} />
      <div className="fulltextIntrudation">
        <div className="textContentIntrodaction dfConteHeader">
          <h1 className="intudaction">
            {header}
          </h1>
        <input type="text" className="inputHeaderUpdate" onChange={(e)=>setHeader(e.target.value)} />
        </div>
      </div>
      <div className="fullProjectsSecund">
            <div className="oitentaProjectsSecund">
                {pro?.map((d)=>(
                    <div className="cardProjectsSecund" key={d.id}>
                        <div className="imageProjectSecurd">
                
                            {d.id === "1" && (
                                <>
                                {/* =================================== */}
                                    <div className=" use imgUser">
                                        {iMissao ? (
                                            <img src={URL.createObjectURL(iMissao)} alt="" className="imgProjectSecund" />
                                        ):(
                                            <img src={d.img} alt="" className="imgProjectSecund" />
                                        )}
                                        <label htmlFor='imgUserPhoto' className="iconEditImg"><i className="fa-regular fa-image iconColorAddImg"></i>
                                        </label>
                                    </div>
                                    <div className="displayNoneImg">
                                        <input type="file" id='imgUserPhoto' accept="image/*" className="inputImgUser userInputB Bselect displayNone" onChange={(e)=> setIMissao(e.target.files[0])}  />
                                    </div>
                                    {/* =================================== */}
                                </>
                            )}
                            {d.id === "2" && (
                                <>
                                    {/* =================================== */}
                                    <div className=" use imgUser">
                                        {iVisao ? (
                                            <img src={URL.createObjectURL(iVisao)} alt="" className="imgProjectSecund" />
                                        ):(
                                            <img src={d.img} alt="" className="imgProjectSecund" />
                                        )}
                                        <label htmlFor='imgUserPhotovi' className="iconEditImg"><i className="fa-regular fa-image iconColorAddImg"></i>
                                        </label>
                                    </div>
                                    <div className="displayNoneImg">
                                        <input type="file" id='imgUserPhotovi' accept="image/*" className="inputImgUser userInputB Bselect displayNone" onChange={(e)=> setIVisao(e.target.files[0])}  />
                                    </div>
                                    {/* =================================== */}
                                </>
                            )}
                            {d.id === "3" && (
                                <>
                                    {/* =================================== */}
                                    <div className=" use imgUser">
                                        {iValor ? (
                                            <img src={URL.createObjectURL(iValor)} alt="" className="imgProjectSecund" />
                                        ):(
                                            <img src={d.img} alt="" className="imgProjectSecund" />
                                        )}
                                        <label htmlFor='imgUserPhotova' className="iconEditImg"><i className="fa-regular fa-image iconColorAddImg"></i>
                                        </label>
                                    </div>
                                    <div className="displayNoneImg">
                                        <input type="file" id='imgUserPhotova' accept="image/*" className="inputImgUser userInputB Bselect displayNone" onChange={(e)=> setIValor(e.target.files[0])}  />
                                    </div>
                                    {/* =================================== */}
                                </>
                            )}
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
                                <div className="ObjCard"><b></b>{d.obj}</div>
                                {edit && (
                                    <>
                                        {d.id === "1" && (
                                            <>
                                                <input type="text" className="editInputObject" onChange={(e)=> setMissao(e.target.value)} />
                                                <div className="ObjCard"><b></b><i className="fa-solid fa-trash-can colorSizerLixo" onClick={Xmissao}></i></div>
                                            </>
                                        )}
                                        {d.id === "2" && (
                                            <>
                                                <input type="text"  className="editInputObject" onChange={(e)=> setVisao(e.target.value)} />
                                                <div className="ObjCard"><b></b><i className="fa-solid fa-trash-can colorSizerLixo" onClick={Xvisao}></i></div>
                                            </>
                                        )}
                                        {d.id === "3" && (
                                            <>
                                                <input type="text" className="editInputObject" onChange={(e)=> setValor(e.target.value)} />
                                                <div className="ObjCard"><b></b><i className="fa-solid fa-trash-can colorSizerLixo" onClick={Xvalor}></i></div>
                                            </>
                                        )}
                                    </>
                                )}
                                {!edit && (<div className="ObjCard" onClick={SetEditForm}><b></b><i className="fa-solid fa-pen-to-square colorSixe"></i></div>)}
                            </div>
                        )}
                    </div>   
                ))}
            </div>
        </div>
        <div className="redeDiv" onClick={confirm}>SALVAR ALTERAÇÕES....</div>
    </div>
    )}
    </>
  )
}
