import React from "react";
import classes from "./index.module.scss";
import {Col, Row} from "react-bootstrap";
import Logo from "../../Components/Logo";
import lgoinImg from "../../Images/sign-in-left-img.png"

const AuthLayout = ({ children }) => {
  return (
    <div className={classes.login}>
      <div className={"container-fluid"}>
          <div className={classes.loginholder}>
              <div className={classes.leftCol}>
                  <div className={classes.imgBox}>
                      <img src={lgoinImg} alt={"login Image"} />
                  </div>
              </div>
              <div className={classes.rightCol}>
                  <div className={classes.fromHolder}>
                      <div className={"mb-5"}>
                          <Logo />
                      </div>
                      {children}
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default AuthLayout;
