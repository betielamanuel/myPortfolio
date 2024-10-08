import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Betiel.</h1>
        <p className={styles.description}>
          I am a self-taught MERN stack developer with a deep passion for coding
          and continuous learning. My goal is to build learning management
          systems or improve communication devices to support children with
          special needs.
        </p>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
