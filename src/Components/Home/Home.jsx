import React from "react";
import styles from "./Home.module.css";
import Feed from "./../Feed/Feed";
import Loading from "../Helper/Loading";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
};
