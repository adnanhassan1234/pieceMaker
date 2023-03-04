import React from "react";
import classes from "./index.module.scss";
import UserImg from "../../Images/Imagesvg.svg";
import IDs from "../../Images/RectangleImg.png";
import {Link} from "react-router-dom";

const ProfileInfo = (props) => {
    const {user} = props;
    return(
        <>
            <div className={classes.profileInfo}>
                <div className={classes.imgBox}>
                    <img src={user.image} width="100%" />
                </div>
                <h3 className={'text-center fw-semibold'}>{user.name}</h3>
                <hr />
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Email:</div>
                    <Link to={"mailto:jacobjohn@gmail.com"}>{user.email}</Link>
                </div>
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Phone Number:</div>
                    <Link to={"tel:+1 (127) 2123 212"}>{user.phone}</Link>
                </div>
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Location:</div>
                    <div>{user.location}</div>
                </div>
                <div className={"mb-3 font-16"}>
                    <div className={"text-muted font-12"}>Smart Watch Brand:</div>
                    <div>Apple Watch Series 7 Cellular</div>
                </div>
                <div className="d-flex">
                 <div className={classes.img_box}>
                    <img src={IDs} alt="" />
                 </div>
                 <div className={classes.img_box}>
                    <img src={IDs} alt="" />
                 </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;