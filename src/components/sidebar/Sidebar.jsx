import "./sidebar.css";
import RssFeedSharpIcon from '@mui/icons-material/RssFeedSharp';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import newRequest from "../../utils/newRequest";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const [appUser, setAppUser] = useState([]);
  const {user}  = useContext(AuthContext);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const USERS = await newRequest.get("/users/app");
        setAppUser(USERS.data)
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  console.log(user)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedSharpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
          <Link className = "LINK"to="/chat">   <span className="sidebarListItemText">Chats</span></Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarIcon" />
            <Link className = "LINK"to="/post">  <span className="sidebarListItemText">posts</span></Link>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon" />
            <Link className = "LINK"to="/group"> <span className="sidebarListItemText">Groups</span></Link>
          </li>
          <li className="sidebarListItem">
            <BookmarkBorderIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpCenterIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <AssuredWorkloadIcon className="sidebarIcon" />
            <Link className = "LINK"to="/job">  <span className="sidebarListItemText">Job</span></Link>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {appUser.map((u) => (
            
            <>
           {
           <CloseFriend key={u.id} user={u} />}
           </>
          ))}
        </ul>
      </div>
    </div>
  );
}
