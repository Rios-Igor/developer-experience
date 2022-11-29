import React from 'react'
import { useState } from 'react'
import FormStepTwo from './FormStepTwo'


function CardDesign() {


  const [btnFormStepTwo, setFormStepTwo] = useState(false);

  btnFormStepTwo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"


  function contiune() {
    setFormStepTwo(true)
  }

  function saveData() {
    sessionStorage.setItem("Area", "Design e Multimedia")
  }


  return (
    <div>

      <div className="card" onClick={() => {
        contiune();
        saveData();
      }}>
        <div className="imgDesign"></div>
        Design e Multimedia
      </div>
      <FormStepTwo trigger={btnFormStepTwo} setTrigger={setFormStepTwo}></FormStepTwo>
    </div>
  )
}

export default CardDesign