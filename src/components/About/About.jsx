import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer </h3>
              <p>
                Skilled in HTML, CSS, JavaScript, and React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div>
              <h3> Backend Developer </h3>
              <p>
                Experienced in Node.js and Express for creating robust APIs and backend
                services.
              </p>
            </div>
          </li> 
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>UI Designer </h3>
              <p>
                I apply principles of user-centered design to create intuitive and
                engaging interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
