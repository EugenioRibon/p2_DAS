import styles from "./styles.module.css";
import React from "react";

const Card = ({children}) => {
    return <div className={styles.container}>{children}</div>
}

export default Card;