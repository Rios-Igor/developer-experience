import React from 'react'

import "../html-css-template/css/style.css"
import { useState } from 'react'
import FormStepTwo from './FormStepTwo';


function CardSuporte() {



  const [btnFormStepTwo, setFormStepTwo] = useState(false);

  btnFormStepTwo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"


  function contiune() {
    setFormStepTwo(true)
  }

  function saveData() {
    sessionStorage.setItem("Area", "Suporte")
  }

  return (
    <div>

      <div className="card" onClick={() => {
        saveData();
        contiune();
      }}>
        <div className="imgSup"></div>
        Suporte
      </div>
      <FormStepTwo trigger={btnFormStepTwo} setTrigger={setFormStepTwo}></FormStepTwo>
    </div>
  )
}

export default CardSuporte