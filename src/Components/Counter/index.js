import classes from "./index.module.scss";
import React from 'react'
import { useState } from "react";
import CounterData from "./CounterData";
import CounterCard from "./CounterCard";


const Counter = () => {
    const [data] = useState(CounterData)
   

    return (
        <>
            <div className={classes.cardList}>

                {
                    data.map((currn, ind) => {
                        return (
                            <CounterCard key={ind} {...currn} />
                        );
                    })
                }
            </div>
           
        </>
    )
}

export default Counter