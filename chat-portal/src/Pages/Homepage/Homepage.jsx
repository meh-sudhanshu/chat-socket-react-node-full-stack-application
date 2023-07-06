
import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import classes from './homepage.module.css'
import homepage_logo from '../../static/images/homepage_logo.jpg'

const HomePage = ()=>{
    return(
        <div className={classes.ctn}>
            <Navbar/>
            <div className={classes.bottom}>
                <div className={classes.left}>
                    <img src={homepage_logo} className={classes.homepage_logo}/>
                </div>
                <div className={classes.right}>
                    <h2 className={classes.h2_txt}>ChatSocket - Bring Your Friends At a Single Place</h2>
                    <p className={classes.intro_txt}>
                        It's a tapestry of diverse perspectives, where laughter, 
                        support, and inspiration abound. As I navigate through the 
                        digital space
                    </p>
                </div>
            </div>
        </div>
    )
}


export default HomePage