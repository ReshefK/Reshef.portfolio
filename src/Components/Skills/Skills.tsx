import "./Skills.css";
import { Fade } from "react-awesome-reveal";
import java from "../../Assets/java2.png"
import docker from "../../Assets/docker.png"
import react from "../../Assets/react.png"
import dataBase from "../../Assets/dataBase.png"

function Skills(): JSX.Element {
    return (
        <div className="service component__space" id="Skills">
            <div className="heading">
                <h1 className="heading">My Skills</h1>
                <br/>
                <p className ="heading p__color">I do all kind of cool stuff</p>
            </div>
            
            <div className="SkillsContainer">
        <Fade duration = {3000}>
          <div className="content">
            <div className="card ">
                <div className="info">
                <img className="backEnd" src={java} alt="backEnd"></img>
                <div className="information">
                <br/>
                <h1>Java</h1>
                <p className="bio">Spring (Boot & MVC), Maven, Hibernate</p>
                </div>
                </div>
            </div>
        </div>

  <div className="content">
  <div className="card">
    <div className="info">
    <img className="frontEnd" src={react} alt="frontEnd"></img>
      <div className="information">
      <br/>
        <h1>Front End</h1> 
        <p className="bio">React, Java Script, HTML </p>
      </div>
    </div>
  </div>
</div>

<div className="content">
  <div className="card ">
    <div className="info">
    <img className="docker" src={docker} alt="docker"></img>
      <div className="information">
      <br/>
        <h1>DevOps</h1>
        <p className="bio">Docker HUB</p>
      </div>
    </div>
  </div>
</div>

<div className="content">
  <div className="card ">
    <div className="info">
    <img className="dataBase" src={dataBase} alt="dataBase"></img>
      <div className="information">
      <br/>
        <h1>Databases</h1>
        <p className="bio">MySQL</p>
      </div>
    </div>
  </div>
</div>
</Fade>


        </div>  
			
        </div>
    );
}

export default Skills;
