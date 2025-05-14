"use client";

import Card from "@/components/Card/Card";
import styles from "./styles.module.css";
import Button from "@/components/Button/Button"

const AuctionCard = ({ name, price, open }) => {
    return (
        <Card className={styles.card}>
            <h3>{name}</h3>
            <p>{price} €</p>
            <p>{open ? "Open" : "Closed"}</p>
            {open && <Button label="Participate" onClick={() => {}} />}
        </Card>
    );
};

export default AuctionCard;