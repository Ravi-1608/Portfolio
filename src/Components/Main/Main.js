import About from "./About/About";
import Skills from "./Skills/Skill";
import './Main.css'
import Education from "./Education/Education";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "../Footer/Contact/Contact";

function Main(){
    return(
        <div className="main-content">
             <section>
                 <About id="about-section"/>
             </section>
             <section>
                <Skills id="skills-section"/>
             </section>
             <section className="education">
                 <Education> </Education>
             </section>
             <section>
                <Portfolio></Portfolio>
             </section>
             <section className="contact">
                 <Contact></Contact>
             </section>
        </div>

    );

}

export default Main;