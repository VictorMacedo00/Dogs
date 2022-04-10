import React from "react";
import styles from "./Home.module.css";
import Feed from "./../Feed/Feed";
import Head from "../Helper/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home Dogs" />
      <Feed />
    </section>
  );
};
