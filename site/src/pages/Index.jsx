import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../api';

import Menu from '../components/Menu';
import miguel from '../html-css-template/imagens/miguelImg.png';
import Form from '../components/Form';
import Modal from '../components/Modal';
import LoginEmpresa from '../components/LoginEmpresa';


function Index() {
  
  const divStyle = {
    borderRadius: '3rem',
    width: "686px",
    height: '580px',
    backgroundImage: `url(${miguel})`,
  };

  const divComentStyle = {
    boxShadow: " 0 10px 20px rgba(0, 0, 0, 0.6)",
    borderRadius: "30px",
    alignItems: "center",
    backgroundColor: "#9747FF",
    width: "552px",
    height: "420px",
    display: "flex",
    fontWeight: '500',
    fontSize: "31px",
    textAlign: "center",
    color: "white",
    fontWeight: "300",
    letterSpacing: "0em",
    textAlign: "left",
    padding: "3%"
  };

  const [btnFormStepOne, setFormStepOne] = useState(false);

  const [btnLoginEmpresa, setbtnLoginEmpresa] = useState(false);

  const navigate = useNavigate();
  // const obj = {
  //   "dsa": "",

  btnFormStepOne ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  return ( 
    <>
      <Menu />


      <div className="container">
        <div className="music-boxes">


          <div id="content">

            <div className="boxText">
              <div className="texto">
                Bem-vindos à <b>Nova Era do Trabalho </b> Conectamos os melhores talentos independentes com as melhores empresas
              </div>
              <div className="buttons">
          
                <div className="btnTalento">
                <button onClick={() => setFormStepOne(true)} className="defaultButtonTalento" >Cadastre-se como talento</button>
                </div>
                <div className="defaultButtonEmpresa" >
                <LoginEmpresa></LoginEmpresa>
                {/* <button onClick={() => setbtnLoginEmpresa(true) } className="defaultButtonEmpresa" >Contratar Talento</button> */}

                  </div>  
               

                </div>

                <Form trigger={btnFormStepOne} setTrigger={setFormStepOne}></Form>
          

              <div className="subEmpresas">
                <div className="empresas">
                  <p>Empresas que cresceram conosco</p>
                </div>
                <div className="leftLine"></div>

              </div>


            </div>

            <div className="imgRadius">
              <div className="imgProfileName">
                <div className="name">
                  Roberta Castro  <span> Desenvolvedora fullstack</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className="valores">

        <div className="txtBoxValores">

          <div className="textoValores">
            Buscamos melhorar o nível das empresas ajudando elas
            conectando programadores jovens e com vontade de aprender e evoluir com sua cultura.
          </div>

        </div>



      </section>

      <section className="vagas">

        <div className="container-planos">
          <div className="conteiner-card">
            <div className="card-planos1">
              <div className="box-front">
                <div className="conteudo-card">
                  <h2></h2>
                  <h3></h3>
                  <p>
                  </p>
                  <a></a>
                </div>
                <div className="footer">Front-end</div>
              </div>
            </div>
          </div>

          <div className="conteiner-card">
            <div className="card-planos2">
              <div className="box-mobile">
                <div className="conteudo-card">
                  <h2></h2>
                  <h3></h3>
                  <p>
                  </p>
                  <a></a>
                </div>
                <div className="footer">
                  <b>Desenvolvimento mobile</b>
                </div>
              </div>
            </div>
          </div>

          <div className="conteiner-card">
            <div className="card-planos3">
              <div className="box-back">
                <div className="conteudo-card">
                  <h2></h2>
                  <h3> </h3>
                  <p>
                  </p>
                  <a></a>
                </div>
                <div className="footer">Back-end</div>
              </div>
            </div>
          </div>
        </div>




      </section>

      <section className="avaliacoes">
        <div id="container-planos">

          <div className="conteiner-card">
            <div style={divComentStyle} className="font-black">
              “ Pela primeira vez que utilizei o site, tive uma excelente experiência e com certeza recomendo o Developer Experience, pela rapidez no suporte ao usuário, segurança no processo o qual é feito dentro do site e plataforma incrível de trabalho. "
              <br></br>
              <br></br>

              - Miguel Sousa</div>
          </div>

          <div className="conteiner-card">

            <div style={divStyle} src={miguel}> </div>

          </div>
        </div>

      </section>

      <div className="rodape">

        <div className="contactIcons">
          <div className="iconHome"></div>
          <div className="iconSobreNos"></div>
          <div className="iconWork"></div>
          <div className="iconPhone"></div>
        </div>

      </div>

    </>

  );
}

export default Index; 