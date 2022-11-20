import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import React from "react";

export default function Sidebar(){
  let [nome,setNome] = React.useState("Catana")
  let [foto,setFoto] = React.useState("/imagens/catanacomics 1.png")

  

  function trocarNome(){
    setNome(prompt("Qual é o seu nome?"))
  }
  function trocarFoto(){
    setFoto(prompt("digite a URL da imagem"))
  }
    return(
        <div class="bloco_lateral">
          <div class="sidebar">
            <Usuario nomeUsuario={nome} fotoUsuario={foto} fNome={trocarNome} fFoto={trocarFoto}/>
            <Sugestoes/>
            
          </div>
        </div>
    )
}