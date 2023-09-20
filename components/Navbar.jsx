import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { UserButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className={`${styles.container} ${menuOpen ? 'open' : ''}`}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" alt="" width="64" height="64" />
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/houses">
            <li className={styles.listItem}>Houses</li>
          </Link>
          <Link href="#contact">
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        {(!isLoaded || !userId) && (
          <Link href="/sign-up">
            <p>Login / Register</p>
          </Link>
        )}
          <div className={styles.userButton}>
          <Link href="/sign-up">
          <UserButton afterSignOutUrl="/"/>
        </Link>
          </div>
        
      </div>
    <ResponsiveNavbar />
    </div>
  );
};

export default Navbar;
