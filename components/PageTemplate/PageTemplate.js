import React from "react";
import styles from "./styles.module.css";
import Header from "./partials/Header/Header"
import Footer from "./partials/Footer/Footer"

const PageTemplate = ({children}) => {
    return (
        <div className={styles.container}>
            <Header></Header>
            <section className={styles.section}> {children} </section>
            <Footer></Footer>
        </div>
    );
};

export default PageTemplate