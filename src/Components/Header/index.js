// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import classes from "./index.module.scss";
// import {Link} from "react-router-dom";

// const HeaderTop = (props) => {
//   return (
//     <>
//       <header id={classes.header}>
//           <div className={classes.headerRight}>
//             <ul className={classes.headerIcons}>
//               <li> <Link to="/"><i class="fal fa-share-alt"></i></Link> </li>
//               <li> <Link to="/"><i class="fal fa-calendar-alt"></i></Link> </li>
//               <li> <Link to="/"><i class="fal fa-bell"></i></Link></li>
//             </ul>
//           </div>
//           <div className={classes.headerRight}>
//             <div className={classes.title}>Hello Jacob ,</div>
//             <h2>Welcome Back!</h2>
//           </div>
//       </header>
//     </>
//   );
// };

// export default HeaderTop;

import React from "react";
import classes from "./index.module.scss";

const HeaderTop = ({
       title = "",
       icon = null,
       text = "",
       bg = "",
       imgUrl= null,
       isLeft= true,
   }) =>{

    return(
        <div className={`${classes.header}`}>
            {icon != null ?
                <div className={`${classes.bell_icon} bg-${bg}`}>
                    <i className={icon}></i>
                </div>
            : null}
            {imgUrl != null ?
                <div className={`${classes.imgBox}`}>
                    <img src={imgUrl} alt={title} />
                </div>
            : null}
            <div className={classes.description}>
                <h4>{title}</h4>
                <div className={"text-muted"}>{text}</div>
            </div>
        </div>
    )
}

export default HeaderTop;
