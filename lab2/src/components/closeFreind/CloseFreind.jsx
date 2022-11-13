import "./closeFriend.css"
import { Users } from "../../dummyData";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
                    <span className="sidebarFriendName">{user.username}</span>
                </li>
  )
}