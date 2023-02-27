import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Nav = () => {
    
    return (
        <>
        
            <nav>
                <ul>
                    <li>
                        <Link to={"/dashboard"}><i class="icon-dashboard"></i>Dashboard</Link>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle  variant="success" id="dropdown-basic">
                                <i class="icon-user1"></i>Users
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to={"/end-user"}>End Users</Link>
                                <Link to={"/providers"}>Providers</Link>
                                <Link to={"/sub-admin"}>Sub Admins</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link to={"/challenges"}> <i class="icon-Star"></i> Challenges</Link>
                    </li>
                    <li>
                        <Link to={"/affirmations"}> <i class="icon-Heart"></i> Affirmations</Link>
                    </li>
                    <li>
                        <Link to={"/reminder"}> <i class="icon-reminders"></i>Reminders</Link>
                    </li>
                    <li>
                        <Link to={"/support"}> <i class="icon-phone"></i>Support</Link>
                    </li>

                    <li>
                        <Link to={"/guidelines"}> <i class="icon-guidline"></i>Guidelines</Link>
                    </li>
                    <li>
                        <Link to={"/sponsorship"}> <i class="icon-sponsorship"></i>Sponsorship</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;