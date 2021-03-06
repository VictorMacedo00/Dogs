import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "./../../Assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export const Header = () => {
  const {data} = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}><Dogs /></Link>
        {data ? (
          <Link to="/profile" className={styles.login}>{data.nome}</Link>
        ) : (
          <Link to="/login" className={styles.login}>Login / Criar</Link>
        )}
        
      </nav>
    </header>
  );
};
