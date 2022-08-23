import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  function CloseMenu() {
    setIsToggled(false);
  }

  const styles = {
    height: isToggled ? 100 : 0,
  };

  return (
    <header>
      <nav className="container">
        <Link href="/" passHref>
          <h2>Dev Blog</h2>
        </Link>
        <button className="menu-btn" onClick={Toggle}>
          {isToggled ? (
            <i className="fa-solid fa-xmark fa-md"></i>
          ) : (
            <i className="fa-solid fa-bars fa-md"></i>
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
            <Link href="https://github.com">Github</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
