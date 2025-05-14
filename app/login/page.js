"use client";

import InitTemplate from "@/components/InitTemplate/InitTemplate";
import Link from "next/link";
import style from "./page.module.css"
import { doLogin } from "./utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login () {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)

    const username = formData.get("username");
    const password = formData.get("password");

    setLoading(true);
    try {
      const userLogged = await doLogin(username, password);

      if (userLogged.error) {
        alert(userLogged.error);
        return;
      }

      localStorage.setItem("token-jwt", userLogged.access);
      localStorage.setItem("username", userLogged.username)

      router.push("/auctions");
    }
    catch {
      alert("Something went wrong")
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <InitTemplate>
      <h1>Welcome! Log In</h1>
      <form className={style.loginForm} onSubmit={handleOnSubmit}>
        <input type="text" placeholder="User" name="username" required/>
        <input type="password" placeholder="Password" name="password" required/>
        {loading ? <p>Wait a moment...</p> : <button type="submit">Login</button>}
      </form>
      <p>
        Do not Have account yet? <Link href="/register">Register</Link>
      </p>
    </InitTemplate>
  )
}