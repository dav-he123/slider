import React from "react";

import "components/Application.scss";

export default function Application(props) {
  return (
    <main className="layout">
      <section className="sidebar">
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"></nav>
      </section>
      <section className="slider"></section>
    </main>
  );
}
