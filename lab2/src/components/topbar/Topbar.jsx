import "./topbar.css"
import { Search } from "@mui/icons-material"
export default function Topbar() {
  return (
  <div className="topbarContainer"> 
  <div className="topbarLeft"> <span className="logo">lamasocail</span></div>
  <div className="topbarCenter"> <div className="searchbar"><Search/></div></div>
  <div className="topbarRight"></div>
    </div>
  )
}
