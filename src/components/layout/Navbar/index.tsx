// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import styles from "./Navbar.module.css";

// export default function Navbar () {
//     const [ active, setActive ] = useState(false);

//     function openHamburger() {
//         setActive((prev) => !prev);

//         console.log(styles.active)
//     }
//     return (
//         <nav className={styles.navbar}>
//             <div className={styles.brand_title}>
//                 <Image src="/images/eureka_logo.svg" width={150} height={150} alt="company logo"/>
//             </div>

//             <a href="#" className={`${active ? styles.open : ""} ${styles.toggle_button}`} onClick={openHamburger}>
//                 <span className={styles.bar}></span>
//                 <span className={styles.bar}></span>
//                 <span className={styles.bar}></span>
//             </a>

//             <div className={`${ active ? styles.active : "" } ${styles.nav_links}`}>
//                 <ul>
//                     <li><a href="">About</a></li>
//                     <li><a href="">Programs</a></li>
//                     <li><a href="">Policies</a></li>
//                     <li><a href="">News & Events</a></li>
//                     <li><a href="">Contact</a></li>
//                 </ul>
//             </div>

//         </nav>
//     )
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [openSub, setOpenSub] = useState(null); // "about" | "programs" | "policies" | "contact" | null

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

  function openHamburger(e) {
    e.preventDefault();
    setActive((prev) => !prev);
  }

  function onParentClick(e, key) {
    // Mobile: first tap opens submenu, second tap follows the link
    if (isMobile()) {
      if (openSub !== key) {
        e.preventDefault();
        setOpenSub(key);
      } else {
        setOpenSub(null); // optional: close if tapped again
      }
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand_title}>
        <Image src="/images/eureka_logo.svg" width={150} height={150} alt="company logo" />
      </div>

      <a
        href="#"
        className={`${styles.toggle_button} ${active ? styles.open : ""}`}
        onClick={openHamburger}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>

      <div className={`${styles.nav_links} ${active ? styles.active : ""}`}>
        <ul>
          {/* ABOUT */}
          <li className={`${styles.menu_item} ${openSub === "about" ? styles.subopen : ""}`}>
            <a href="/about" onClick={(e) => onParentClick(e, "about")}>About</a>
            <div className={styles.popover}>
              <a href="/about/mission">Mission & Vision</a>
              <a href="/about/founder">Founder</a>
              <a href="/about/campus">Campus</a>
            </div>
          </li>

          {/* PROGRAMS */}
          <li className={`${styles.menu_item} ${openSub === "programs" ? styles.subopen : ""}`}>
            <a href="/programs" onClick={(e) => onParentClick(e, "programs")}>Programs</a>
            <div className={styles.popover}>
              <a href="/programs/moa">MOA Program</a>
              <a href="/programs/celban">CELBAN Review</a>
              <a href="/programs/csw">CSW Program</a>
            </div>
          </li>

          {/* POLICIES */}
          <li className={`${styles.menu_item} ${openSub === "policies" ? styles.subopen : ""}`}>
            <a href="/policies" onClick={(e) => onParentClick(e, "policies")}>Policies</a>
            <div className={styles.popover}>
              <a href="/policies/refund">Refund Policy</a>
              <a href="/policies/privacy">Privacy Policy</a>
              <a href="/policies/handbook">Student Handbook</a>
            </div>
          </li>

          {/* NEWS (no submenu) */}
          <li><a href="/news">News & Events</a></li>

          {/* CONTACT */}
          <li className={`${styles.menu_item} ${openSub === "contact" ? styles.subopen : ""}`}>
            <a href="/contact" onClick={(e) => onParentClick(e, "contact")}>Contact</a>
            <div className={styles.popover}>
              <a href="/contact/admissions">Admissions</a>
              <a href="/contact/location">Location & Hours</a>
              <a href="/contact/faq">FAQ</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}