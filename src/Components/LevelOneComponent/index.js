import classes from "./index.module.scss";
import React from 'react'
import { useState } from "react";
import LevelOneCount from "./LevelOneCount";
import LevelOneData from "./LevelOneData";
import CounterCard from "Components/Counter/CounterCard";
import CounterData from "Components/Counter/CounterData";

const LevelOneComponent = () => {
    const [data] = useState(LevelOneData)

    return (
        <>
            {/* <div  className={classes.cardList}>

                {
                    data.map((levelOne, ind) => {
                        return (
                            <LevelOneCount key={ind} {...levelOne} />
                        );
                    })
                }
            </div> */}

            <div className={classes.cardList}>

                {
                    data.map((currn, ind) => {
                        return (
                            <LevelOneCount key={ind} {...currn} />
                        );
                    })
                }
            </div>
        </>
    )
}

export default LevelOneComponent