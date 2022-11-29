import React from 'react';


export default function button(){

     function Login(){
        window.location.href = './login.html' 
     }

    return (

        <>
        <button onClick={Login}>Login</button>
        </>

    );

}