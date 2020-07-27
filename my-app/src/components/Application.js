import React from "react";

import "./Application.scss";

import Profile from "./Profile/ProfileIndex";

import BackDrop from "./BackDrop/BackDrop";


export default function Application() {
  return (
    <main className="layout">
      <section className="sidebar">
        <hr className="sidebar__separator sidebar--centered" />
                  {/* <BackDrop /> */}
        <nav className="sidebar__menu">
          <Profile />
          {/* <BackDrop /> */}
        </nav>
      </section>
      <section className="slider"></section>
    </main>
  );
}
