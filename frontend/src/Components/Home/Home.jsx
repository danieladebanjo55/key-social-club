import React from "react";
import NavBar from "../NavBar/Navbar";
import "./Home.scss";
import Benefit from "./Benefits/Benefit";
import Packages from "./Packages/Packages";
import Item from "./ItemList/Item";
import Footer from "./Footer/Footer";
import Section from "./Sections/Section";
import Intro from "./Intro/Intro";
import Coming from "./Packages/Coming";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="main__container">
        <div className="main__overlay"></div>
        <div className="main__content">
          <div className="left">
            <h2 className="heading">Key Social Club</h2>
            <p className="main__subtext">
              尚英社是突破性将金融科技和区块链技术应用于高端会员计划的项目，为全球提供跨境支付、银行、金融服务、旅行、娱乐和Web3服务。
            </p>
            <button className="hero__btn">登入</button>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <Intro />
      <Section />
      <Benefit />
      <Packages />
      <Coming />
      <Item />
      <Footer />
    </>
  );
}
