import styles from "./App.module.css";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Hero } from "../src/components/Hero/Hero";
import { About } from "../src/components/About/About";
import { Experience } from "../src/components/Experience/Experience";
import { Projects } from "../src/components/Projects/Projects";
import { Contact } from "../src/components/Contact/Contact";
import { Education } from "../src/components/Education/Education";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
