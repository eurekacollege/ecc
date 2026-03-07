import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/cards/ProgramCard";
import EventCard from "@/components/cards/EventCard";
import { Programs } from "@/data/programs";
import { Events } from "@/data/events";



export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero/>


      {/* WELCOME SECTION */}
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
                {/* <Image src="/images/academic.svg" alt="academic programs" width={100} height={80}/> */}
                <span>Academic</span>
                <span>Programs</span>

              </div>
              <hr></hr>
              <div className={styles.side_bar}>
                {/* <Image src="/images/policies.svg" alt="policies" width={100} height={80}/> */}
                <span>Student</span>
                <span>Policies</span>
              </div>
              <hr></hr>
              <div className={styles.side_bar}>
                {/* <Image src="/images/apply_now.svg" alt="apply now" width={100} height={80}/> */}
                <span>Apply Now</span>
              </div>
            </div>
        </div>

        {/* Rigght side */}
        <div className={styles.welcome_right}>
          <div className={styles.welcome_upper_right}>
            <h2>
              Welcome to Eureka College of Canada.
            </h2>
            <h2>The moment when it all clicks.</h2>
          </div>

          <div className={styles.welcome_lower_right}>
            <div className={styles.welcome_lower_right_leftside}>
              <div className={styles.title_container}>
                <h2>Start a Career That</h2>
                <h2>Makes a Difference</h2>
                <ul>
                  <li>Small class sizes to ensure individualized academic support</li>
                  <li>Highly qualified instructors with extensive industry experience</li>
                  <li>Comprehensive, hands-on practical training</li>
                  <li>Dedicated student support services from admission through graduation</li>
                </ul>
              </div>
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

      <br></br>

      {/* PROGRAM SECTION */}
      <section className={styles.program_section}>
        <h2>Programs</h2>
        <div className={styles.program_card_container}>
         {
          Programs.map((program, index) => (
            <ProgramCard
            key={program.title + index}
            image={program.image}
            alt={program.alt}
            title={program.title}
            description={program.description}
            link={program.link}
            />
          ))
         }
        </div>
      </section>

      <br></br>

      {/* News & Events SECTION */}
      <section className={styles.event_section}>
        <h2>News & Events</h2>
        <div className={styles.event_card_container}>
         {
          Events.map((event, index) => (
            <EventCard
            key={event.title + index}
            image={event.image}
            title={event.title}
            description={event.description}
            />
          ))
         }

        </div>
      </section>
    </>
  );
}
