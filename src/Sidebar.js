import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar(){
    return(
        <div class="bloco_lateral">
          <div class="sidebar">
            <Usuario/>
            <Sugestoes/>
            
          </div>
        </div>
    )
}