import React from 'react'
import { useState } from 'react';
import FormStepTwo from './FormStepTwo';

function CardTi() {

    const [btnFormStepTwo, setFormStepTwo] = useState(false);

    btnFormStepTwo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    return (
        <div>
            <div className="card">
                <div className="imgProg"></div>
                Programação
            </div>
            <FormStepTwo trigger={btnFormStepTwo} setTrigger={setFormStepTwo}></FormStepTwo>
        </div>
    )
}

export default CardTi