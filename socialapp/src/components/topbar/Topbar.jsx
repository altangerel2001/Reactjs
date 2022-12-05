import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar({ilgeesen}) {
  return (<>
    {JSON.stringify(ilgeesen)}
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Ag4socialmedianetwork</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person ilgeesen/>
            <span className="topbarIconBadge">{JSON.stringify(ilgeesen.data.notification)}</span>
          </div>
          <div className="topbarIconItem">
            <Chat ilgeesen/>
            <span className="topbarIconBadge">  {JSON.stringify(ilgeesen.data.chat)}</span>
          </div>
          <div className="topbarIconItem">
            <Notifications ilgeesen/>
           
            <span className="topbarIconBadge"> {JSON.stringify(ilgeesen.data.freindrequest)}</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div></>
  );
}