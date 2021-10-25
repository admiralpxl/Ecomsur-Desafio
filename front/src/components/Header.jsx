import React from "react";
import { CarIcon } from "./CarIcon";

export const Header = ({ counter }) => {
  return (
    <header className="header padding">
      <nav className="header-nav">
        <ul className="flex-space-between header-nav-browser">
          <li>Tech Store</li>
          <CarIcon counter={counter} />
        </ul>
      </nav>
      <style jsx>{`
        .header {
          width: 100%;
          height: 30px;
          font-family: var(--font-display);
          margin-bottom: 24px;
          letter-spacing: 0.8px;
        }
        .header-nav-browser {
          font-size: var(--header-font);
          font-weight: var(--bold);
        }
      `}</style>
    </header>
  );
};
