import React from 'react'
import profile from "../../Images/profilesvg.svg"
import classes from "./index.module.scss";
const Profile = () => {
  return (
    <>
      <div className={classes.profile_img}>
        <div className={classes.img_box}>
          <img src={profile} alt="" />
        </div>
        <div>
          <h3>Jacob John</h3>
          <p>View Profile</p>
        </div>
      </div>
    </>
  )
}

export default Profile