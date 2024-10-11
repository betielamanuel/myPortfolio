// import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Code The Dream </h3>
              <h4>NodeJs/ExpressJS, Certificate (Aug 2023 - Feb 2024)</h4>
              <p>
                Gained hands-on experience with server-side JavaScript, learning
                essential aspects of Node.js and Express.js. Mastered NPM,
                asynchronous programming, middleware integration, REST API
                creation, and Postman for testing APIs. Completed a capstone
                project involving a full-stack application using the MERN stack.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Per Scholas</h3>
              <h4>
                React Powered by TEKSystem, Certificate (May 2023 - Aug 2023)
              </h4>
              <p>
                Intensive developer training program focusing on React.js.
                Covered fundamentals to advanced topics, including component
                lifecycle, state management with Redux, and hook utilization for
                functional components. Developed several interactive
                applications demonstrating responsive design and client-side
                routing.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div>
              <h3> Choose U </h3>
              <h4>Web Development, Certificate (Feb 2023 - Jul 2023)</h4>
              <p>
                A comprehensive 21-week bootcamp that emphasized hands-on
                learning in HTML5, CSS3, JavaScript, and modern web development
                practices. Specialized in building responsive and accessible
                websites, culminating in a collaborative project that simulated
                real-world development cycles.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3> University of North Carolina at Chapel Hill</h3>
              <h4>Bachelor of Science in Psychology - Graduated 2022</h4>
              <p>
                Completed a rigorous program with a focus on developmental
                psychology, research methods, and statistical analysis. Engaged
                in undergraduate research projects that investigated cognitive
                and social development in early childhood. This foundation in
                psychological principles has been pivotal in understanding user
                behavior in software development.
              </p>
            </div>
          </li>
        </ul>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
      </div>
    </section>
  );
};
