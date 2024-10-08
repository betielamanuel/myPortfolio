import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@gmail.com">betiel.ab@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedIn icon"
          />
          <a href="https://www.linkedin.com/in/betiel-amanuel/">linkedin.com/betielamanuel</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/betielamanuel">github.com/betielamanuel</a>
        </li>
      </ul>
    </footer>
  );
};
