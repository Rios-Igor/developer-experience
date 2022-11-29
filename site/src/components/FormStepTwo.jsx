import React, { useEffect, useState } from 'react';
import MultiSelect from './Select';
import Area from "./SelectFunctions";

import FormStepThree from './FormStepThree';
import IconProg from '../html-css-template/imagens/icon30pxProg.png'
import IconSup from '../html-css-template/imagens/iconSuporte30px.png'
import IconJuridico from '../html-css-template/imagens/juridicoOfi30px.png'
import IconDesign from '../html-css-template/imagens/iconDesign30px.png'
import "../html-css-template/css/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRectangleXmark } from '@fortawesome/free-solid-svg-icons';


function FormStepTwo(props) {

  const [btnFormStepThree, setFormStepThree] = useState(false);

  const [show, setShow] = useState(true);
  const [showInputSkills, setshowInputSkills] = useState(true);

  const styleAreaProg = {
    width: "30px",
    height: '30px',
    backgroundImage: `url(${IconProg})`,
    margin: '8px'
  };

  const styleAreaSup = {
    width: "30px",
    height: '30px',
    backgroundImage: `url(${IconSup})`,
    margin: '8px'
  };

  const styleAreaDesign = {
    width: "30px",
    height: '30px',
    backgroundImage: `url(${IconDesign})`,
    margin: '8px'
  };

  const styleAreaJuridico = {
    width: "30px",
    height: '30px',
    backgroundImage: `url(${IconJuridico})`,
    margin: '8px'
  };

  function hideInput() {
    setShow(!show)
  }

  function hideInputSkills() {
    setshowInputSkills(!show)
  }

  function openForm() {
    setFormStepThree(true)
  }

  const nome = [sessionStorage.getItem("Area")]

  const areaSelecionada = [
    nome == "Programação" ? { id: 1, img: <div style={styleAreaProg}></div> } : "",
    nome == "Suporte" ? { id: 1, img: <div style={styleAreaSup}></div> } : "",
    nome == "Jurídico" ? { id: 1, img: <div style={styleAreaJuridico}></div> } : "",
    nome == "Design e Multimedia" ? { id: 1, img: <div style={styleAreaDesign}></div> } : "",
  ];

 function resetStateInput(){
  setShow(show)
  setshowInputSkills(show)
  setShowHideStep(!show)
 }

 function continueSteps(){
  setShowHideStep(show)
 }

 const [hideStep, setShowHideStep] = useState(true);


  return (props.trigger) ? (
    <div className='popup'>
      <div className='popupInner'>
     
        {/* <button className='closeBtn' onClick={() => props.setTrigger(false)}>Close</button> */}
        {/* {props.children} */}
        <FontAwesomeIcon icon={faRectangleXmark}   
        onClick={() => props.setTrigger(false)} 
        className="closeBtn"
        />
        
        <button className="continuar" onClick={() => {
          hideInputSkills();
          hideInput();
          openForm();
          continueSteps();
        }}>Continuar</button>

  <FormStepThree trigger={btnFormStepThree} setTrigger={setFormStepThree}></FormStepThree>
       
        <div className="contentAlignForm">
          <div className="header">
            <div className="formDataStepTwo">
              <div className="stepOne">
                <div className="alignContent">
                  <div className="countingSteps">  1 </div>
                  <div className="textSkills">Área e habilidades </div>
                </div>
              </div>
              <div className="stepTwo">
                <div className="alignContent">
                  <div className="countingSteps">  2 </div>
                  <div className="textPerfil">Perfil profissional </div>
                </div>
              </div>
              <div className="stepThree">
                <div className="alignContent">
                  <div className="countingSteps">  3 </div>
                  <div className="textExp">Experiência </div>
                </div>
              </div>
            </div>
          </div>

          <div className="titleSkills">
            <p>Olá, usuario! Seja bem-vindo!  <br />
              <b>
                A qual área você se dedica? <br></br>
                <br></br>
              </b>
              <span className='areaSelect'>

                {areaSelecionada.map((area) => (
                  <div key={area.id}>{area.img}
                  </div>
                ))}


                <div className="fe">{nome}</div>
                <u onClick={() => props.setTrigger(false)}>Alterar</u>


              </span>

            </p>


            <div className="underLine"></div>


            <div className="skills">
              <h1>Função</h1>
              <b>Dentro da sua área profissional, em que função você se especializa?</b>

            </div>


            {showInputSkills && <Area></Area>}


            <div className="underLine"></div>
            <hr />

            <div className="skills">
              <h1>Habilidades</h1>
              <b> Destaque até 3 de suas habilidades profissionais</b>

              {show && <MultiSelect ></MultiSelect>}
          


              <div className="expSkills">
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </div>
    


                
  ) : ""
}

export default FormStepTwo