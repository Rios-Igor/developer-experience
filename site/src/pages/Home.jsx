import React from 'react'
import "../html-css-template/css/Home.css"
import logoDx from '../html-css-template/imagens/LogoIcon.png';
import CardUserData from '../components/CardUserData';
import CardVaga from '../components/CardVaga';
import apiUsuario from '../api';


function Home() {
    return (
        <div className='viewContent'>

    <nav>
        <div className="container">
          <img src={logoDx} alt="Logo" className="logo" />
        </div>
      </nav>

          <div className="content">
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

export default Home