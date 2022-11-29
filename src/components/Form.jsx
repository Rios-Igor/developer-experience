import React, { useState } from 'react';

import CardDesign from './CardDesign';
import CardProg from './CardProg'
import CardQa from './CardJuridico';
import CardSuporte from './CardSuporte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

function Form(props) {
  

  const [btnFormStepTwo, setFormStepTwo] = useState(false);

  btnFormStepTwo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  return (props.trigger) ? (
    <div className='popup'>
      <div className='popupInner'>
        {/* <button className='closeBtn' onClick={() => props.setTrigger(false)}>Close</button> */}
        <FontAwesomeIcon icon={faRectangleXmark}   
        onClick={() => props.setTrigger(false)} 
        className="closeBtn"
        />


        {props.children}

            <div className="contentAlignForm">
                    <div className="header">
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
                    <div className="titleSkills">
                      <p>Olá, usuário! Seja bem-vindo(a)! <br />
                        <span>
                          A qual área voce se dedica?

                        </span>
                      </p>

                      <div className="alignCards">
                        <div className="flex-gap">
                          
                          <CardProg ></CardProg>
                          <CardSuporte></CardSuporte>
                          <CardQa></CardQa>
                          <CardDesign></CardDesign>

                        </div>
                      </div>
                    </div>
                  </div>

        {/* <button className="continuar" onClick={() => setFormStepTwo(true)}>Continuar</button> */}
      
      </div>
    </div>
  ) : ""
}

export default Form