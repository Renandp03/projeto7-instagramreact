import ReactDOM from "react-dom";






function Navbar(){
    return(
        <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" alt="imagem"/>
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" alt="imagem" />
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
    )
}




function Stories(){
    return(
        <div class="stories">
          <div class="story">
            <div class="imagem">
              <img src="assets/img/9gag.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              9gag
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/meowed.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              meowed
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/barked.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              barked
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/nathanwpylestrangeplanet.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              nathanwpylestrangeplanet
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/wawawicomics.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              wawawicomics
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/respondeai.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              respondeai
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/filomoderna.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              filomoderna
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/memeriagourmet.svg" alt="imagem"/>
            </div>
            <div class="usuario">
              memeriagourmet
            </div>
          </div>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}




function Posts(){
    return(
        <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/meowed.svg" alt="imagem"/>
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/gato-telefone.svg" alt="imagem"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="imagem"/>
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/barked.svg" alt="imagem"/>
                barked
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/dog.svg" alt="imagem"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/adorable_animals.svg" alt="imagem"/>
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


function Esquerda(){
    return(
        <div class="esquerda">
            <Stories/>
            <Posts/>
        </div>
    )
}




// aqui vai toda a parte da direita

function Usuario(){
    return(
        <div class="usuario">
        <img src="assets/img/catanacomics.svg" alt="imagem"/>
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            Catana
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}


function Sugestoes(){
  return(
    <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/bad.vibes.memes.svg" alt="imagem"/>
              <div class="texto">
                <div class="nome">bad.vibes.memes</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/chibirdart.svg" alt="imagem"/>
              <div class="texto">
                <div class="nome">chibirdart</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/razoesparaacreditar.svg" alt="imagem"/>
              <div class="texto">
                <div class="nome">razoesparaacreditar</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/adorable_animals.svg" alt="imagem"/>
              <div class="texto">
                <div class="nome">adorable_animals</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/smallcutecats.svg" alt="imagem"/>
              <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>)
}


function Links(){
    return(
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

    )
}

function Copyright(){
    return(
        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>

    )
}



function Fundomobile(){
    return(
        <div class="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
    )
}

function Sidebar(){
    return(
        <div>
            <Usuario/>
            <Sugestoes/>
            <Links/>
            <Copyright/>
            <Fundomobile/>
        </div>
    )
}


// agora vem o corpo do site 

function Corpo(){
    return(
        <div class="corpo">
            <Esquerda/>
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