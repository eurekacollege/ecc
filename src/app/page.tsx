import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>

      <section className={styles.welcome_section}>
        {/* Left side */}
        <div className={styles.welcome_left}>
          <div className={styles.welcome_upper_left}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".7" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
            </svg>

          </div>
            <div className={styles.welcome_lower_left}>
              <div className={styles.side_bar}>
                <Image src="/images/academic.svg" alt="academic programs" width={100} height={80}/>
                <span>Academic Programs</span>
              </div>
              <hr></hr>
              <div className={styles.side_bar}>
                <Image src="/images/policies.svg" alt="policies" width={100} height={80}/>
                <span>Student Policies</span>
              </div>
              <hr></hr>
              <div className={styles.side_bar}>
                <Image src="/images/apply_now.svg" alt="apply now" width={100} height={80}/>
                <span>Enrol Now</span>
              </div>
            </div>
        </div>

        {/* Rigght side */}
        <div className={styles.welcome_right}>
          <div className={styles.welcome_upper_right}>
            <h2>
              Welcome to
            </h2>
            <h2>Eureka College of Canada. </h2>
            <h2>The moment when it all clicks.</h2>
          </div>

          <div className={styles.welcome_lower_right}>
            <div className={styles.welcome_lower_right_leftside}>
              <h2>Start a Career That Makes a Difference</h2>
              <ul>
                <li>Small class sizes</li>
                <li>Industry-experienced instructors</li>
                <li>Support from enrollment to graduation</li>
              </ul>
            </div>
            <div className={styles.welcome_lower_right_rightside}>
              {/* video */}
              <iframe width="315" height="576" 
              rel="0" src="https://www.youtube.com/embed/uyUQppe2hL8?rel=0&modestbranding=1&playsinline=1" title="Eureka College of Canada" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
