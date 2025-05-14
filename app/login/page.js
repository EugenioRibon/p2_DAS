import InitTemplate from "@/components/InitTemplate/InitTemplate";
import Link from "next/link";
import style from "./page.module.css"

export default function Index () {
  return (
    <InitTemplate>
      <h1>Welcome! Log In</h1>
      <form className={style.loginForm}>
        <input type="text" placeholder="User"/>
        <input type="password" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
      <p>
        Do not Have account yet? <Link href="/register">Register</Link>
      </p>
    </InitTemplate>
  )
}