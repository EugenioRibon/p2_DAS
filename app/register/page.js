"use client";

import InitTemplate from "@/components/InitTemplate/InitTemplate";
import style from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import ProvinceLocalitySelector from "./(partials)/ProvinceLocalitySelector";

export default function Register () {
    const [province, setProvince] = useState("");
    const [locality, setLocality] = useState("");

    return (
        <InitTemplate>
            <h1>Register a new user</h1>
            <form className={style.loginForm}>
                <input type="text" placeholder="user" name="username" required/>
                <input type="password" placeholder="password" name="password" required/>
                <input type="password" placeholder="confirm password" name="confirmPassword" required/>
                <input type="text" placeholder="Name" name="name" required/>
                <input type="text" placeholder="Second Name" name="lastName" required/>
                <input type="date" placeholder="Birth Date" name="birthDate" required/>
                <ProvinceLocalitySelector 
                province={province} 
                setProvince={setProvince} 
                locality={locality} 
                setLocality={setLocality}
                />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link href="/login">Login</Link></p>
        </InitTemplate>
    )
}