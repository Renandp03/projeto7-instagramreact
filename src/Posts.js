export default function Posts(){
  const posts = [
    {nome:"meowed",perfil:"/imagens/story2.png",post:"/imagens/gato-telefone 1.png",curtidoPor:"/imagens/story7.png",nomeCurtidoPor:"respondeai",numeroLikes:120.484},
    {nome:"barked",perfil:"/imagens/story3.png",post:"/imagens/dog 1.png",curtidoPor:"/imagens/sugestao4.png",nomeCurtidoPor:"adorable_animals",numeroLikes:150.200},
    
  ]

  
    return(
        <div class="posts">
          
          {posts.map((p)=><Post nome={p.nome} perfil={p.perfil} post={p.post} curtidoPor={p.curtidoPor} nomeCurtidoPor={p.nomeCurtidoPor} numeroLikes={p.numeroLikes}/>)}
      

        
        </div>
    )
}



function Post(props){
  return(
    <div class="post">
          <div class="post_topo">
            <div class="perfil">
              <img src={props.perfil} alt="amarelo" />
              <p class="nome">{props.nome}</p>
            </div>
            <img class="pontos" src="/imagens/3pontos.svg" alt="opções" />
          </div>

          <img
            class="postagem"
            src={props.post}
            alt="gato no celular"
          />

          <div class="info">
          

            <div class="icones_post">
              <div class="likes_coment">
                <img
                  class="icone"
                  src="/imagens/heart-outline.svg"
                  alt="like"
                />

                <img
                  class="icone"
                  src="/imagens/comentario.svg"
                  alt="comentario"
                />

                <img
                  class="icone"
                  src="/imagens/paper-plane-outline.svg"
                  alt="compartilhe"
                />
              </div>

              <img class="icone" src="/imagens/salvar.svg" alt="salvar" />
            </div>

            <div class="dados">
              <img
                class="perfil_like"
                src={props.curtidoPor}
                alt="perfil pequeno do responde aí"
              />

              <p>
                Curtido por <span>{props.nomeCurtidoPor}</span> e
                <span>outras {props.numeroLikes} pessoas</span>
              </p>
            </div>
          </div>
        </div>
  )
}