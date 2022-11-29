import React, { useState } from "react";
import "../html-css-template/css/modal.css"
import apiUsuario from "../api";
import { useNavigate } from "react-router-dom";

export default function Modal(props) {

   const navegar = useNavigate();
     
  function loginUsuario() {
    const loginUsuarioAuth = {
      usuario: usuarioInput,
      senha: senhaInput,
      
    }
    
      sessionStorage.setItem(1, usuarioInput);
      apiUsuario.post(`/usuarios/login/${usuarioInput}/${senhaInput}`, loginUsuarioAuth).then(res => {
        navegar('/home')
      }).catch(erro => {
        alert("Deu erro, se vira!");
        console.log(erro);
        
      });
  }

    const [modal, setModal] = useState(false);
    const [usuarioInput, setUsuarioInput] = useState(props.usuario);
    const [senhaInput, setSenhaInput] = useState(props.senha);

    const toggleModal = () => {
      setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
      document.body.style.overflow = "hidden"
    } else {
      document.body.classList.remove('active-modal')
      document.body.style.overflow = "auto"
    }
  
  return (
    <>
       <button onClick={toggleModal} className="btnLogin">
        Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <div className="formLogin">

        
            <span>Usuario</span>
            <input  onChange={(e) => setUsuarioInput(e.target.value)} type="text" placeholder=""  className="iptEmail"/>
     
           
            <span>Senha</span>
            <input onChange={(e) => setSenhaInput(e.target.value)} type="password" placeholder="" className="iptSenha"/>

            <div className="createAcount">
            Ainda não criou sua conta no DX?  <u>Cadastre-se</u>
            </div>

              <button className="btnAcess" onClick={loginUsuario}>Acessar</button>


            </div>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}