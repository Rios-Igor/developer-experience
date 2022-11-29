import React from 'react';


export default function button(){

     function Redirecionar(){
        window.location.href = './cadastro.html' 
     }

     function empresa(){
        window.location.href = './empresa.html' 
     }

    return (
        <>
        <button onClick={Redirecionar} class ='teste'>Cadastre-se como talento</button>
        <button onClick={empresa}>Contratar talento</button>
        </>
    );

}