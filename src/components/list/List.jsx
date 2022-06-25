import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"

export default function List() {
  return (
    <div className="list">
      <span className="listTitle"></span>
      <div className="wrapper">
          <ArrowBackIosOutlined/>
          <div className="container">
              
          </div>
          <ArrowForwardIosOutlined/>
      </div>
    </div>
  )
}
