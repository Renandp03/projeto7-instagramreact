export default function Navbar(){
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