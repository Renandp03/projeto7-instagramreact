import Stories from "./Stories";
import Posts from "./Posts";
import Base from "./Base";

export default function Feed(){
    return(
        <div class="feed">
            <Stories/>
            <Posts/>
            <Base/>
        </div>
    )
}