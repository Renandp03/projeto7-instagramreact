import ReactDOM from "react-dom";






function Navbar(){
    return(
      <div><div class="menu-topo">
      <div class="meio">
        <div class="insta">
          <img
            class="icone"
            src="/imagens/logo-instagram.svg"
            alt="icone do Instagram"
          />
          <div class="barra-v">
           
          </div>
          <img class="logo" src="/imagens/logo 1.svg" alt="logo do Instagram" />
        </div>

        
        <div>
          <input class="pesquisa" placeholder="Pesquisar" tipe="text" />
        </div>

        <div class="opcoes">
          <a href="https://www.instagram.com"
            ><img
              class="icone"
              src="/imagens/paper-plane-outline.svg"
              alt="avião de papel"
          /></a>
          <a href="https://www.instagram.com">
            <img class="icone" src="/imagens/compass-outline.svg" alt="bússola"
          /></a>
          <a href="https://www.instagram.com"
            ><img class="icone" src="/imagens/heart-outline.svg" alt="coração"
          /></a>
          <a href="https://www.instagram.com"
            ><img class="icone" src="/imagens/person-outline.svg" alt="pessoa"
          /></a>
        </div>
      </div>
    </div>
    <div class="menu-topo-mobile">
    <div class="meio">
      <div class="insta">
        <img
          class="icone"
          src="/imagens/logo-instagram.svg"
          alt="icone do Instagram"
        />
      </div>

      
      <div class="insta">
        <img src="/imagens/logo 1.svg" alt="logo do Instagram" />
      </div>

      <div class="opcoes">
        <a href="https://www.instagram.com"
          ><img
            class="icone"
            src="/imagens/paper-plane-outline.svg"
            alt="avião de papel"
        /></a>
      </div>
    </div>
  </div> </div>
    )
}




function Stories(){
    return(
      <div class="stories">
      

      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story1.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">9gag</p>
      </div>
      
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story2.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">meowed</p>
      </div>
      
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story3.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">barked</p>
      </div>
     
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story4.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">nathanwpyle...</p>
      </div>
     
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story5.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">wawawiwac...</p>
      </div>
     
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story6.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">respondeai</p>
      </div>
      
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story7.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">filomoderna</p>
      </div>
     
      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story8.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">memeriago.</p>
      </div>

      <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src="/imagens/story8.png"
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">memeriago.</p>
      </div>

      <img
        class="botao"
        src="/imagens/Vector.svg"
        alt="seta para a direita"
      />
    </div>
    )
}




function Posts(){
    return(
        <div class="posts">
          <div class="post">
          <div class="post_topo">
            <div class="perfil">
              <img src="/imagens/story2.png" alt="rosinha" />
              <p class="nome">meowed</p>
            </div>
            <img class="pontos" src="/imagens/3pontos.svg" alt="opções" />
          </div>

          <img
            class="postagem"
            src="/imagens/gato-telefone 1.png"
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
                src="/imagens/story7.png"
                alt="perfil pequeno do responde aí"
              />

              <p>
                Curtido por <span>respondeai</span> e
                <span>outras 101.523 pessoas</span>
              </p>
            </div>
          </div>
        </div>

      

        <div class="post">
          <div class="post_topo">
            <div class="perfil">
              <img src="/imagens/story3.png" alt="amarelo" />
              <p class="nome">barked</p>
            </div>
            <img class="pontos" src="/imagens/3pontos.svg" alt="opções" />
          </div>

          <img
            class="postagem"
            src="/imagens/dog 1.png"
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
                src="/imagens/story6.png"
                alt="perfil pequeno do responde aí"
              />

              <p>
                Curtido por <span>respondeai</span> e
                <span>outras 101.523 pessoas</span>
              </p>
            </div>
          </div>
        </div>
        </div>
    )
}


function Feed(){
    return(
        <div class="feed">
            <Stories/>
            <Posts/>
        </div>
    )
}




// // aqui vai toda a parte da direita

function Usuario(){
    return(
      <div class="meu_perfil">
      <img
        class="perfil_usuario"
        src="/imagens/catanacomics 1.png"
        alt="perfil do usuario"
      />
      <div class="eu">
        <p class="nickname">catanacomics</p>
        <p class="nome_real">Catana</p>
      </div>
    </div>
    )
}


function Sugestoes(){
  return(
    <div class="sugestoes">
    <div class="mostra">
      <p class="titulo">Sugestões para você</p>
      <p class="mais">Ver tudo</p>
    </div>
    <div class="sugestao">
      <div class="p1">
        <img
          class="perfil_sugestao"
          src="/imagens/sugestao1.png"
          alt="perfil_badvibes"
        />
        <div class="identifica">
          <p class="nickname">badvibesmemes</p>
          <p class="segue">Segue você</p>
        </div>
      </div>
      <a
        href="https://www.instagram.com
    "
        >Seguir</a>
      
    </div>

    <div class="sugestao">
      <div class="p1">
        <img
          class="perfil_sugestao"
          src="/imagens/sugestao2.png"
          alt="perfil_badvibes"
        />
        <div class="identifica">
          <p class="nickname">badvibesmemes</p>
          <p class="segue">Segue você</p>
        </div>
      </div>
      <a
        href="https://www.instagram.com
      "
        >Seguir</a>
      
    </div>

    <div class="sugestao">
      <div class="p1">
        <img
          class="perfil_sugestao"
          src="/imagens/sugestao3.png"
          alt="perfil_badvibes"
        />
        <div class="identifica">
          <p class="nickname">badvibesmemes</p>
          <p class="segue">Segue você</p>
        </div>
      </div>
      <a
        href="https://www.instagram.com
      "
        >Seguir</a>
     
    </div>

    <div class="sugestao">
      <div class="p1">
        <img
          class="perfil_sugestao"
          src="/imagens/sugestao4.png"
          alt="perfil_badvibes"
        />
        <div class="identifica">
          <p class="nickname">badvibesmemes</p>
          <p class="segue">Segue você</p>
        </div>
      </div>
      <a
        href="https://www.instagram.com
        "
        >Seguir</a>
      
    </div>

    <div class="sugestao">
      <div class="p1">
        <img
          class="perfil_sugestao"
          src="/imagens/sugestao5.png"
          alt="perfil_badvibes"
        />
        <div class="identifica">
          <p class="nickname">badvibesmemes</p>
          <p class="segue">Segue você</p>
        </div>
      </div>

      <a
        href="https://www.instagram.com
          "
        >Seguir</a>
      
    </div>

   <Links/>
  </div>
  )
}


function Links(){
    return(
      <div class="detalhes">
      <p>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
        Termos • Localizações • Contas mais relevantes • Hashtags •
        Idioma
      </p>

      <p class="detalhes">© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
    )
}






function Sidebar(){
    return(
        <div class="bloco_lateral">
          <div class="sidebar">
            <Usuario/>
            <Sugestoes/>
            
          </div>
        </div>
    )
}


// // agora vem o corpo do site 

function Corpo(){
    return(
        <div class="tudo">
            <Feed/>
            <Sidebar/>
        </div>
    )
}


function App(){
    return(
        <div>
        <Navbar/>
        <Corpo/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector(".root"))