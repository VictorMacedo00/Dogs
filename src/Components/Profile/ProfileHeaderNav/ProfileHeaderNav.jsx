import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import { ReactComponent as MyPhotos } from "./../../../Assets/feed.svg";
import { ReactComponent as Statistics } from "./../../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "./../../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "./../../../Assets/sair.svg";
import styles from "./ProfileHeaderNav.module.css";
import {useMedia} from "../../../Hooks/useMedia";

const ProfileHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/profile" end>
          <MyPhotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/profile/statistics">
          <Statistics />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/profile/posting">
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default ProfileHeaderNav;
