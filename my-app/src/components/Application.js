import React from "react";

import "./Application.scss";

import Profile from "./Profile/ProfileIndex";

export default function Application() {
  return (
    <main className="layout">
      <section className="sidebar">
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <Profile />
        </nav>
      </section>
      <section className="slider"></section>
    </main>
  );
}
