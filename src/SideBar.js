import React , {useState , useEffect} from 'react';
import "./SideBar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from './SideBarOption';
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from './firebase';



function SideBar() {

    const [channels , setChannels] = useState([]);

    useEffect(() => {

        //runs this ONCE when loading the sidebar

        db.collection('rooms').onSnapshot((snapshot) => 
          setChannels(
              snapshot.docs.map((doc) => ({
                  id: doc.id,
                  name: doc.data().name,
              }))
            )  
        );

    }, []);


    return (
        <div className= "sidebar">

            <div className = "sidebar_header">
                <div className= "sidebar_info">
                <h2>Slack - TringoLab</h2>
                <h3>
                   <FiberManualRecordIcon /> 
                   Binguni Edirisuriya
                </h3>
                </div>
                <CreateIcon />
              
            </div>
            <SideBarOption Icon={InsertCommentIcon} title= "Threads"/>
            <SideBarOption Icon={InboxIcon} title= "Mentions & Reactions"/>
            <SideBarOption Icon={DraftsIcon} title= "Saved Items"/>
            <SideBarOption Icon={BookmarkBorderIcon} title= "Channel Browser"/>
            <SideBarOption Icon={FileCopyIcon} title= "File Browser"/>
            <SideBarOption Icon={PeopleAltIcon} title= "People & User Groups"/>
            <SideBarOption Icon={AppsIcon} title= "Apps"/>
            <SideBarOption Icon={ExpandLessIcon} title= "Show Less"/>
            <hr/>
            <SideBarOption Icon={ExpandMoreIcon} title= "Channels"/>
            <hr/>
            <SideBarOption Icon={AddIcon} title= "Add Channel"/>

            {channels.map(channel => (
                <SideBarOption title= {channel.name} id = {channel.id}/>
            ))}
            
        </div>
    )
}

export default SideBar;
