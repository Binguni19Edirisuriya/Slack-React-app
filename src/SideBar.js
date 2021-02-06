import { FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import "./SideBar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function SideBar() {
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
        </div>
    )
}

export default SideBar
