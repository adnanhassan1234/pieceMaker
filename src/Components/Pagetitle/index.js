import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

const PageTitle = (props) => {
    return (
        <div className={`${classes.pageTitle}`}>
            <header id={classes.header}>
                <div className={classes.headerRight}>
                    <div className="d-flex">
                        <Form>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1"><i class="fal fa-search"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search.."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                        </Form>
                        <div className={classes.headerIcons}>
                            <i class="icon-Mute-notification"></i>

                        </div>
                    </div>
                </div>
                <div className={classes.headerRight}>
                    <h1>{props.title}</h1>
                </div>
            </header>
        </div>
    )
}

export default PageTitle;