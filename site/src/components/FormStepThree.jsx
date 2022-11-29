import React from "react";
import "../html-css-template/css/style.css";
import { useState, useEffect } from "react";
import apiUsuario from "../api.js";
import { json, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRectangleXmark } from '@fortawesome/free-solid-svg-icons';


function FormStepThree(props) {
    
  const [nomeInput, setNomeInput] = useState(props.nome);
  const [usuarioInput, setUsuarioInput] = useState(props.usuario);
  const [emailInput, setEmailInput] = useState(props.email);
  const [senhaInput, setSenhaInput] = useState(props.senha);
  const [cpfInput, setCpfInput] = useState(props.cpf);
  const [dataNascimentoInput, setDataNascimentoInput] = useState(props.dataNascimento);
  const [telefoneInput, setTelefone] = useState(props.telefone);
  const [cepInput, setCepInput] = useState(props.cep);
  const [ruaInput, setRuaInput] = useState(props.rua);
  const [bairroInput, setBairroInput] = useState(props.bairro);
  const [cidadeInput, setCidadeInput] = useState(props.cidade);
  const [complementoInput, setComplementoInput] = useState(props.complemento);
  const [numeroInput, setNumeroInput] = useState(props.numero);


    const navegar = useNavigate();


    
  function adicionarUsuario() {
    const novoUsuario = {
        email: emailInput,
        senha: senhaInput,
        nome: nomeInput,
        cpf: cpfInput,
        dataNascimento: dataNascimentoInput,
        telefone: telefoneInput,
        cep: cepInput,
        rua: ruaInput,
        bairro: bairroInput,
        cidade: cidadeInput,
        complemento: complementoInput,
        numero: numeroInput,
        usuario: usuarioInput
    }

    // /musica-box/{id}
    apiUsuario.post("/usuarios", novoUsuario).then(res => {

    }).catch(erro => {
      alert("Deu erro, se vira!");
      console.log(erro);
      
    })

    console.log(novoUsuario);
    window.location.reload();
    
    
    
  }

    return props.trigger ? (
        <div className="popup">
        <div className="popupInner">
            {/* <button className="closeBtn" onClick={() => props.setTrigger(false)}>
            Close
            </button> */}
            {props.children}
            <FontAwesomeIcon icon={faRectangleXmark}   
        onClick={() => props.setTrigger(false)} 
        className="closeBtn"
        />


            <div className="contentAlignForm">
            <div className="header">
                <div className="formData">
                <div className="stepOne">
                    <div className="alignContent">
                    <div className="countingSteps"> 1 </div>
                    <div className="textSkills">Área e habilidades </div>
                    </div>
                </div>
                <div className="stepTwo">
                    <div className="alignContent">
                    <div className="countingSteps"> 2 </div>
                    <div className="textPerfil">Perfil profissional </div>
                    </div>
                </div>
                <div className="stepThree">
                    <div className="alignContent">
                    <div className="countingSteps"> 3 </div>
                    <div className="textExp">Experiência </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="titleSkills">
                <p>
                Estamos indo muito bem, Usuario! Chegou a hora de saber um pouco
                mais sobre você. <br />
                <span>sobre você.</span>
                </p>

                <div className="cardUsuario">
                <div className="alignCard">
                    <div className="imgUser">
                        <div className="userIcon"></div>
                    </div>
                    <div className="dataUser">
                    Alice dias <br></br>
                    <br></br>
                    Alicedias@hotmail.com
                    </div>
                </div>
                </div>
            </div>
            <form action="" className="formStyle">
                <div className="alignCards">
                <div className="flex-gapInputs">
                    <div className="boxContentOne">
                    <b>Usuario</b>
                    <input
                        id="usuario"    
                        onChange={(e) => setUsuarioInput(e.target.value)}
                        type="text"
                        placeholder="aliDias"
                        className="customInput"
                    />
                    <b>Nome</b>
                    <input
                        id="nome"    
                        onChange={(e) => setNomeInput(e.target.value)}
                        type="text"
                        placeholder="Alice Dias"
                        className="customInput"
                    />
                    <b>Email</b>
                    <input
                        id="email"
                        onChange={(e) => setEmailInput(e.target.value)}
                        type="text"
                        placeholder="emailexample@email.com"
                        className="customInput"
                    />
                    <b>Senha</b>
                    <input
                        id="senha"
                        onChange={(e) => setSenhaInput(e.target.value)}
                        type="password"
                        placeholder="senha"
                        className="customInput"
                    />
                    <b>CPF</b>
                    <input
                        id="cpf"
                        onChange={(e) => setCpfInput(e.target.value)}
                        type="text"
                        placeholder="XXX.XXX.XXX-XX"
                        className="customInput"
                    />

                    <b>Telefone </b>
                    <input
                        id="telefone"
                        onChange={(e) => setTelefone(e.target.value)}
                        type="text"
                        placeholder="XX XX XXXXX-XXXX"
                        className="customInput"
                    />

                    <b>Data nascimento </b>
                    <input
                        id="dataNasc"
                        onChange={(e) => setDataNascimentoInput(e.target.value)}
                        type="date"
                        placeholder="__ / __ / __"
                        
                    />

                    
                    </div>


                    <div className="boxContentTwo">

                    <b>Rua</b>
                    <input
                        id="rua"
                        onChange={(e) => setRuaInput(e.target.value)}
                        type="text"
                        placeholder="Rua Haddock Lobo - 32"
                        className="customInput"
                    />

                    <b>cep</b>
                    <input
                        id="cep"
                        onChange={(e) => setCepInput(e.target.value)}
                        type="text"
                        placeholder="08032-327"
                        className="customInput"
                    />

                    <b> Bairro </b>
                    <input
                        id="bairro"
                        onChange={(e) => setBairroInput(e.target.value)}
                        type="text"
                        placeholder="Seu bairro"
                        className="customInput"
                    />
                    <b>Cidade</b>
                    <input
                        id="cidade"
                        onChange={(e) => setCidadeInput(e.target.value)}
                        type="text"
                        placeholder="São Paulo"
                        className="customInput"
                    />
                    <b>Número</b>
                    <input
                        id="numero"
                        onChange={(e) => setNumeroInput(e.target.value)}
                        type="text"
                        placeholder="545"
                        className="customInput"
                    />
                    <b>Complemento</b>
                    <input
                        id="complemento"
                        onChange={(e) => setComplementoInput(e.target.value)}
                        type="text"
                        placeholder="545"
                        className="customInput"
                    />

                    </div>
                </div>
                </div>
            </form>
            <button className="continuar" onClick={adicionarUsuario}>
                    Enviar
            </button>
            </div>
        </div>
        </div>
    ) : (
        ""
    );
}

export default FormStepThree;
