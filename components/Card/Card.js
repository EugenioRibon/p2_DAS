import styles from "./styles.module.css";
import React from "react";

const Card = ({children, className}) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}

export default Card;