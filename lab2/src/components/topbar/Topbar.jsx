import "./topbar.css"
import { Search, Person,Notifications,Chat} from "@mui/icons-material"
export default function Topbar() {
  return (
  <div className="topbarContainer"> 
  <div className="topbarLeft"> <span className="logo">lamasocail</span></div>
  <div className="topbarCenter"> <div className="searchbar">
    <Search className="searchicon" />
    <input placeholder="Search for freind, post or video" classname="Searchinput"/>
    </div></div>
  <div className="topbarRight">
    <div className="topbarLinks"> 
    <span className="topbarLinks">Homepage</span>
    <span className="topbarLinks">Timeline</span>
    </div>
    <div className="topbaricons">
     <div className="topbariconsitem">
      <Person/>
      <span className="topbariconbadge">100</span>
     </div>
     <div className="topbariconsitem">
      <Notifications/>
      <span className="topbariconbadge">12</span>
     </div>
     <div className="topbariconsitem">
      <Chat/>
      <span className="topbariconbadge">6</span>
     </div>
    </div>
    <img src="/assets/oprooa/1.jpeg" alt="" className="topbarimg" />
  </div>
    </div>
  )
}