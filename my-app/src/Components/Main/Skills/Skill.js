import './Skills.css'
import SkillsSection from './Skills-section/SkillsSection';

function Skills(){
    return(
      <div className="Skills-section">
        <section className="Skills-image-heading">
            <h1 id="skills-section">SKILLS</h1>
        </section>
        <div id="skills">
          <SkillsSection/>
          
        </div>
        
      </div>
      

    );
}

export default Skills;