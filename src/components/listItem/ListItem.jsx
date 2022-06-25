import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import "./listitem.scss";

export default function ListItem() {
  return (
    <div className="listItem">
      <img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2019/4/13/w600X390/GameofThronesfordummiesItsnevertoolatetounderstandseriesplottwist.jpeg" />
     <div className="itemInfo">
         <div className="icons">
             <PlayArrow/>
             <Add />
             <ThumbUpOutlined/>
             <ThumbDownOutlined/>
         </div>
         <div className="itemInfoTop">
             <span>1 hour 14 mins</span>
             <span className="limit">+16</span>
             <span>1999</span>
         </div>
         <div className="desc">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quas eius repudiandae adipisci veritatis nihil quos inventore impedit deserunt consequuntur.
         </div>
         <div className="genre">Action</div>
     </div>
    </div>
  )
}
