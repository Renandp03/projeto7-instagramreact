export default function Stories(){

  const stories = [
    {nome:"9gag",imagem:"/imagens/story1.png"},
    {nome:"meowed",imagem:"/imagens/story2.png"},
    {nome:"barked",imagem:"/imagens/story3.png"},
    {nome:"nathanwpyle...",imagem:"/imagens/story4.png"},
    {nome:"wawawiwac...",imagem:"/imagens/story5.png"},
    {nome:"espondeai",imagem:"/imagens/story6.png"},
    {nome:"filomoderna",imagem:"/imagens/story7.png"},
    {nome:"memeriago",imagem:"/imagens/story8.png"},

]


    return(
        
      <div class="stories">
        {stories.map((s) => <Story imagem = {s.imagem} nome = {s.nome}/>)}

      <img
        class="botao"
        src="/imagens/Vector.svg"
        alt="seta para a direita"
      />
    </div>
    )
}


function Story(props){
  return(
    <div class="story">
        <div class="imagem_story">
          <img
            class="back"
            src="/imagens/stories_background.jpg"
            alt="fundo de story"
          />

          <img
            class="foto_story"
            src={props.imagem}
            alt="imagem nos stories"
          />
        </div>
        <p class="nome_story">{props.nome}</p>
      </div>
  )
}