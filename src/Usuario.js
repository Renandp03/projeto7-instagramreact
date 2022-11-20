import React from "react";

export default function Usuario(props){
  
 
    return(
      <div class="meu_perfil">
      <img onClick={props.fFoto}
        class="perfil_usuario"
        src={props.fotoUsuario}
        alt="perfil do usuario"
      />
      <div class="eu">
        <p class="nickname">catanacomics</p>
        <div class="editarNome" onClick={props.fNome}>
          <p class="nome_real">{props.nomeUsuario}</p>
          <img src="/imagens/edit.svg" alt= ""/>
        </div>
      </div>
    </div>
    )
}



