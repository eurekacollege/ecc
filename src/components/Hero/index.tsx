import styles from "./Hero.module.css";

export default function ParallaxHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>This is Your Eureka Moment</h1>
        <p>Discovery Driven Learning</p>
      </div>
    </section>
  );
}