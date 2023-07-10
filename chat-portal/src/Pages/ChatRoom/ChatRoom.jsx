import React from "react";

import classes from './chat_room.module.css'

const ChatRoom = ()=>{
    return(
        <div className={classes.main}>
            <div className={classes.msg_ctn}>
                <div className={classes.msg_box}>
                    <h2 className={classes.msg}>This si a left message</h2>
                </div>
                <div className={`${classes.msg_box} ${classes.right}`}>
                    <h2 className={classes.msg}>This si a right message</h2>
                </div>
                <div className={classes.msg_box}>
                    <h2 className={classes.msg}>This si a left message</h2>
                </div>
                <div className={`${classes.msg_box} ${classes.right}`}>
                    <h2 className={classes.msg}>This si a right message</h2>
                </div>
                <div className={classes.msg_box}>
                    <h2 className={classes.msg}>This si a left message</h2>
                </div>
                <div className={`${classes.msg_box} ${classes.right}`}>
                    <h2 className={classes.msg}>This si a right message</h2>
                </div>
                <div className={classes.msg_box}>
                    <h2 className={classes.msg}>This si a left message</h2>
                </div>
                <div className={`${classes.msg_box} ${classes.right}`}>
                    <h2 className={classes.msg}>This si a right message</h2>
                </div>    
            </div>
            <div className={classes.ip_btn_ctn}>
                <input 
                    className={classes.ip_} 
                    type="text"
                    placeholder="Enter Message"/>
                <button className={classes.send_btn}>Send</button>
            </div>
        </div>
    )
}

export default ChatRoom