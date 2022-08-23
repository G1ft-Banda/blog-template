import Link from "next/link";
import Image from "next/image";
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
            <Image
              alt="icon"
              src="/../public/icon/X.svg"
              width={20}
              height={20}
            />
          ) : (
            <Image
              alt="icon"
              src="/../public/icon/Bars.svg"
              width={20}
              height={20}
            />
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
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
