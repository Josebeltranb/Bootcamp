"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function NavbarHomeComponent() {
  let [token, setToken] = useState(null);
  let [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (token === null) {
      console.log(token)
      const tokenBySession = sessionStorage.getItem("token");
      console.log(tokenBySession)
      tokenBySession !== null && setToken(tokenBySession);
      console.log(token)

    }
  }, []);

  useEffect(() => {
    token && setIsEnabled(true);
  }, [token]);

  return (
    <ul>
      <li>
        <Link
          href={`users?token=${token}`}
          className={isEnabled === null ? styles.disabled : ''}
        >
          Lista de usuario
        </Link></li>
      <li><Link href={"register"}>Registrarme</Link></li>
      <li><Link href={"login"}>Login</Link></li>
    </ul>
  );
}