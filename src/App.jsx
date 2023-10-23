import React from "react";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import "./assets/index.css";

export const App = () => {
  return (
    <div className="wrapper">
      <Header title={"header"} />
      <div className="content-wrapper">
        <Sidebar title={"side bar"} />
        <Content title={"content"} />
      </div>
      <Footer title={"footer"} />
    </div>
  );
};
