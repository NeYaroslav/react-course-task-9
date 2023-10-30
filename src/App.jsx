import React from "react";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import "./assets/index.css";

export const App = () => {
  return (
    <div className="wrapper">
      <Header>Header</Header>
      <div className="content-wrapper">
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </div>
      <Footer>Footer</Footer>
    </div>
  );
};
