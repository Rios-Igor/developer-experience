import React from 'react'
import apiUsuario from '../api';
import "../html-css-template/css/cardUser.css"
import { useState, useEffect } from "react";


function CardUserData() {
  const nome = [sessionStorage.getItem(1)];
  const [usuarioValues, setUsuarioValues] = useState({});

  useEffect(() => {
    apiUsuario.get(`/usuarios/sessao/${nome}`).then(res => {
      setUsuarioValues(res.data);
    }).catch(erro => {
      console.log(erro);
    })
  }, [])

  return (
    <div>
      
      <div className="teste">

        <div className="tabBar">
          <h1>Dados cadastrais</h1>
        </div>
        <div className="newUnderLine"></div>

        <div className="dadosProfileIcon">

          <div className="userIconBig"></div>
          <div className="userNameData">
           
          </div>

        </div>

        <div className="dadosCadastrais" >


          <div className="dados" >
            <b>Nome</b>
            <b>Idade</b>
            <b>Rua</b>
            <b>Bairro</b>
            <b>Numero</b>
            <b>Complemento</b>
          </div>

          <div className="labelDadosCadastro">

            <label htmlFor=""> </label>
            <label htmlFor=""> {usuarioValues.nome}</label>
            <label htmlFor=""> {usuarioValues.dataNascimento}</label>
            <label htmlFor=""> {usuarioValues.rua}</label>
            <label htmlFor=""> {usuarioValues.bairro}</label>
            <label htmlFor=""> {usuarioValues.numero}</label>
            <label htmlFor=""> {usuarioValues.complemento}</label>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CardUserData