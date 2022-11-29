import React from 'react'
import { useState } from 'react';

import FormStepTwo from './FormStepTwo';
import "../html-css-template/css/style.css"

function CardProg(props) {


    const [btnFormStepTwo, setFormStepTwo] = useState(false);

    const [area, setArea] = useState('');

    btnFormStepTwo ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    function hanlderSaveData() {
        const data = {
            area
        }
        console.log(data)
    }

    function contiune() {
        setFormStepTwo(true)
    }


    const name  = localStorage.getItem('nome')


    function saveData(){
        sessionStorage.setItem("Area","Programação")
    }

    // const armazenar = () =>{
    //     sessionStorage.setItem("Area selecionada",programação)
    // }

    const consultar = (chave) => {
        alert(sessionStorage.getItem(chave))
    }


    return (
        <div>
            <div className="card"onClick={() => {
                contiune();
                saveData();
            }}>
                <div className="imgProg"></div>
                <span>Programação</span>
            </div>

            {/* <div className="mandaDado"
                value = {area}
                onChange={e => setArea(e.target.value)}
            ></div> */}
            <FormStepTwo trigger={btnFormStepTwo} setTrigger={setFormStepTwo}></FormStepTwo>

        </div>
    )
}

export default CardProg;
