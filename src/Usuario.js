import React from "react";

export default function Usuario(){
  
  const [nome,setNome] = React.useState("Catana")
  const [foto,setFoto] = React.useState("/imagens/catanacomics 1.png")
    return(
      <div class="meu_perfil">
      <img onClick={()=> setFoto(prompt("Digite a URL da sua foto de perfil"))}
        class="perfil_usuario"
        src={foto}
        alt="perfil do usuario"
      />
      <div class="eu">
        <p class="nickname">catanacomics</p>
        <div class="editarNome" onClick={()=>setNome(prompt("Qual é o seu nome?"))}>
          <p class="nome_real">{nome}</p>
          <img src="/imagens/edit.svg"/>
        </div>
      </div>
    </div>
    )
}



