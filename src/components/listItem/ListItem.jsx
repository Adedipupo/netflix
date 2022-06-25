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
     </div>
    </div>
  )
}
