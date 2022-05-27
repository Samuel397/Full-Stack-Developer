import React from 'react';
import "./style.css"
import "../../../global.css"
import heroImg from "../../../assests/img/heroes.png"
import logoImg from "../../../assests/img/admin.png"


export default function Logon() {

  

  async function handleLogin(){
     window.location.href='/admin/login'
    
  }

  return (
    <div className="logon-container">
      <section className="form">
      <img src={logoImg} className="imgLogo" alt="Frexco"></img>
      <form>
        <h1>Bem vindo!</h1>      
        <button onClick={handleLogin} type="button" className="button">Entrar</button>         
        </form>
      </section>
      <img src={heroImg} alt="Heros"/>
    </div>
  );
}