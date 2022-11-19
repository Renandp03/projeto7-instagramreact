import Links from "./Links"

export default function Sugestoes(){

  const sugestoes = [
    {nome:"badvibesmemes",imagem:"/imagens/sugestao1.png",status:"Segue você"},
    {nome:"chibirdart",imagem:"/imagens/sugestao2.png",status:"Segue você"},
    {nome:"razoesparaacreditar",imagem:"/imagens/sugestao3.png",status:"Novo no instagram"},
    {nome:"adorable_animals",imagem:"/imagens/sugestao4.png",status:"Segue você"},
    {nome:"smallcutecats",imagem:"/imagens/sugestao5.png",status:"Segue você"}

  ]

    return(
      <div class="sugestoes">
      <div class="mostra">
        <p class="titulo">Sugestões para você</p>
        <p class="mais">Ver tudo</p>
      </div>
      {sugestoes.map((s)=><Sugestao nome = {s.nome} imagem={s.imagem} status={s.status}/>)}
  
     <Links/>
    </div>
    )
  }
  


  function Sugestao(props){
    return(
      <div class="sugestao">
        <div class="p1">
          <img
            class="perfil_sugestao"
            src={props.imagem}
            alt="perfil_badvibes"
          />
          <div class="identifica">
            <p class="nickname">{props.nome}</p>
            <p class="segue">{props.status}</p>
          </div>
        </div>
        <a
          href="https://www.instagram.com
      "
          >Seguir</a>
        
      </div>
    )
  }