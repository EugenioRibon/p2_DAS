import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Made in DAS for course {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;