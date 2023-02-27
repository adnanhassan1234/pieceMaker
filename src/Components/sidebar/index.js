import React from "react";
import classes from "./index.module.scss";
import Logo from "../Logo";
import Nav from "../Nav/Nav";
import Profile from "Components/Profile";
import { Button } from "react-bootstrap";

const Sidebar = () => {
    return (
        <>
            <aside className={classes.sidebar}>
                <Logo />
                {/* <Profile /> */}
                <Nav />
            </aside>
        </>
    )
}

export default Sidebar;