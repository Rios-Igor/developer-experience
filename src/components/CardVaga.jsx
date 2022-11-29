import React from 'react'
import "../html-css-template/css/cardVaga.css"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CardVaga() {


  function alerta(){
 
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>You clicked the button!</i>,
      icon: 'success'
    })
  }
 
  

  return (
    <div>

    <div className="opa">

      <div className="headerVaga">
      <div className="imgVaga"> </div>
      <div className="titleVaga">
      
      <b>
      Vaga para o desenvolvimento de site responsivo

      </b>

      </div>
   
        
      </div>


      <div className="dadosDaVaga">
        <div className="dadosDeCadastro">
        <b>Lingaugem utilizadas</b>  
         <b>Modelo de trabalho</b>  
         <b>Carga horária</b>  
         <b>Quantidade de vagas</b>  
        </div>
        
        <div className="labelDados">
      

         <label htmlFor=""> Teste</label>
           <label htmlFor=""> Teste</label>
          <label htmlFor=""> Teste</label>
           <label htmlFor=""> Teste</label>

        </div>
        <div className="buttonsVaga">
        <button className='candidatar' onClick={alerta}>Cadidatar-se</button>
        <button className='candidatar'>Cancelar</button>



        </div>

      </div>

    </div>


    </div>
  )
}

export default CardVaga