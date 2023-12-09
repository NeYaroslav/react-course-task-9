import React from "react";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Content } from "./components/content/Content";
import { Menu } from "./components/menu/Menu";
import { ConnectedLogo } from "./components/logo/Logo";
import { ConnectedDateTime } from "./components/dateTime/DateTime";
import { ConnectedFactsList } from "./components/factsList/FactsList";
import "./assets/index.css";

export const App = () => {
  const menuList = [
    { text: "A same origin link", url: `${window.location.origin}/unexisting-page` },
    { text: "Another origin link", url: "https://www.google.com" },
    { text: "Pure text" },
  ];

  const menu = <Menu list={menuList} />;

  return (
    <div className="wrapper">
      <Header>
        <>
          <ConnectedLogo />
          <ConnectedDateTime />
        </>
      </Header>
      <div className="content-wrapper">
        <Sidebar>{menu}</Sidebar>
        <Content>
          <ConnectedFactsList />
        </Content>
      </div>
      <Footer>{menu}</Footer>
    </div>
  );
};
