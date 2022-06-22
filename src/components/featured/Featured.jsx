import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
            <img src="https://venturebeat.com/wp-content/uploads/2020/04/ff7remake.jpg?fit=3341%2C1871&strip=all" alt="user" width="100%" />

            <div className="info">
               <img src="https://venturebeat.com/wp-content/uploads/2020/04/ff7remake.jpg?fit=3341%2C1871&strip=all" alt="user" width="100%" />
               <span className="desc">
               Whoops! It looks like you might not be logged in because we saw no writing activity for you last week. Please log back in to keep your writing in tip-top shape and stay in the loop about your epic stats and achievements!
               </span>
               <div className="buttons">
                   <button className="play">
                       <PlayArrow/>
                       <span>Play</span>
                   </button>
                   <button className="more">
                       <InfoOutlined/>
                       <span>Info</span>
                   </button>
               </div>
            </div>
    </div>
  )
}

export default Featured
