import React, { useState } from "react";


import logoDx from '../html-css-template/imagens/LogoIcon.png';
import Modal from './Modal';

function Menu() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
    document.body.style.overflow = "hidden"
  } else {
    document.body.classList.remove('active-modal')
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <nav>
        <div className="container">
          <img src={logoDx} alt="Logo" className="logo" />
          {/* <button className='btnLogin' >Login</button> */}
          <Modal></Modal>
       
        </div>
      </nav>
     
    </>
  );
}

export default Menu;