import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileHeaderNav from "../ProfileHeaderNav/ProfileHeaderNav";
import styles from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/profile/statistics":
        setTitle("Estatísticas");
        break;
      case "/profile/posting":
        setTitle("Adicionar Foto");
        break;
      case "/profile":
        setTitle("Feed");
        break;
      default:
        setTitle("");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <ProfileHeaderNav />
    </header>
  );
};

export default ProfileHeader;
