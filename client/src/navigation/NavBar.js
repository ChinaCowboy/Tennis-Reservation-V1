import React from "react";
import { Layout } from "antd";
import styles from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <Layout.Header className={styles.Header}>
      <div className={styles.title}></div>
    </Layout.Header>
  );
};
