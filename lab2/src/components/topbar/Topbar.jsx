import "./topbar.css"
import { Search, Person,Notifications,Chat} from "@mui/icons-material"
export default function Topbar() {
  return (
  <div className="topbarContainer"> 
  <div className="topbarLeft"> <span className="logo">lamasocail</span></div>
  <div className="topbarCenter"> <div className="searchbar">
    <Search className="searchIcon" />
    <input placeholder="search for freind, post or video" classname="searchInput"/>
    </div></div>
  <div className="topbarRight">
    <div className="topbarLinks"> 
    <span className="topbarLinks">Homepage</span>
    <span className="topbarLinks">Timeline</span>
    </div>
    <div className="topbaricon">
     <div className="topbariconsitem">
      <Person/>
      <span className="topbariconbadge">1</span>
     </div>
     <div className="topbariconsitem">
      <Notifications/>
      <span className="topbariconbadge">1</span>
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