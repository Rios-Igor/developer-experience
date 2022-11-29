import React from 'react'
import "../html-css-template/css/style.css"
import { useState } from 'react';
import FormStepTwo from './FormStepTwo';

function CardJuridico() {

    const [btnFormStepTwo, setFormStepTwo] = useState(false);

    btnFormStepTwo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    function contiune() {
        setFormStepTwo(true)
      }
    
      function saveData() {
        sessionStorage.setItem("Area", "Jurídico")
      }
    
    return (
        <div>
            <div className="card" onClick={() => {
                contiune();
                saveData();
            }}>
                <div className="imgJuridico"></div>
                Jurídico
            </div>

            <FormStepTwo trigger={btnFormStepTwo} setTrigger={setFormStepTwo}></FormStepTwo>
        </div>
    )
}

export default CardJuridico