import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  function CloseMenu() {
    setIsToggled(false);
  }
  function Toggle() {
    setIsToggled(!isToggled);
  }

  const styles = {
    height: isToggled ? 100 : 0,
  };

  return (
    <header>
      <nav className="nav-container">
        <Link href="/" passHref>
          <h2>My Blog</h2>
        </Link>
        <button className="menu-btn" onClick={Toggle}>
          {isToggled ? (
            <img alt="icon" src="/icon/X.svg" className="icon" />
          ) : (
            <img alt="icon" src="/icon/Bars.svg" className="icon" />
          )}
        </button>
        <div className="nav-links-container" style={styles}>
          <span className="nav-links" onClick={CloseMenu}>
            <Link href="/">Home</Link>
          </span>
          <span className="nav-links" onClick={CloseMenu}>
            <Link href="/about">About</Link>
          </span>
          <span className="nav-links" onClick={CloseMenu}>
            <Link href="/contact">Contact </Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
