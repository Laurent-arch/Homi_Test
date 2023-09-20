import styles from "../styles/ResponsiveNavbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { UserButton } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { GiHamburgerMenu } from "react-icons/gi";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <GiHamburgerMenu style={{ color: "white" }} size={72} />
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          {(!isLoaded || !userId) && (
            <Link href="/sign-up">Login / Register</Link>
          )}
          <UserButton afterSignOutUrl="/" />
          <Link href="/">Homepage</Link>
          <Link href="/houses">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      )}
    </>
  );
};

export default ResponsiveNavbar;
