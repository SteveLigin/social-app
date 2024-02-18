import "./topbar.css";
import  { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Nav from "../nav/Nav";
function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Facebook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
            <Nav />
          <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person />
                <span className="topbarIconbadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconbadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconbadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar