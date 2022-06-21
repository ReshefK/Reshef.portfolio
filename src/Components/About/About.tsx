import "./About.css";
import aboutImg from "../../Assets/mecircle.png"

function About(): JSX.Element {
    return (
        <div className="about components__space" id="About">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src ={aboutImg} alt="" className="about__img"/>
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                            Throughout my career, I have been acknowledged as a creative solution-focused professional.<br/>
                            With the ability to understand and redefine complex problems, challenge assumptions, 
                            and create innovative solutions.<br/>
                            Furthermore i have extensive experience in management and production.<br/>
                            Ability and efficiency at coordinating and synchronizing interfaces.<br/>
                            Today I am an dedicated full stuck developer, passion for developing scalable web application and working across the full
                            stuck. Certified in both F/E and B/E technologies.
                           
                            </p>
                            <div className="about__button d__flex align__items__center">
                        
                                <a href="#" className="button">Download CV</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
			
        </div>
    );
}

export default About;
