import React from 'react';
import './Chat.css';
import {useParams} from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
    const { roomId } = useParams();
    return (
        <div className= "chat">
        <h2> {roomId} room</h2>
            <div className= "chat_header">
            <div className= "">
                <h4 className= "channel_name">
                    <strong>#general</strong>
                    <StarBorderOutlinedIcon/>
                </h4>
            </div>

            <div className = "chat_headerRight">
                <p>
                    <InfoOutlinedIcon />
                </p>
            </div>

            </div>
        </div>
    )
}

export default Chat
