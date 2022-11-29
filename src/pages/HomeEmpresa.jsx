import React from 'react'

import CardUserData from '../components/CardUserData'
import CardVaga from '../components/CardVaga'
import logoDx from '../html-css-template/imagens/LogoIcon.png';
import "../html-css-template/css/empresa.css"


function HomeEmpresa() {
    return (
        <div className='viewContent'>

    <nav>
        <div className="container">
          <img src={logoDx} alt="Logo" className="logo" />
        </div>
      </nav>

          <div className="contentEmpresa">
            <div className="boxContent">

            <CardUserData/>
            </div>
            <div className="scrollBox">
             <h3>Vagas disponiveis</h3>

            <CardVaga/>
          <CardVaga/>

            </div>


          </div>



        </div>
    )
}

export default HomeEmpresa