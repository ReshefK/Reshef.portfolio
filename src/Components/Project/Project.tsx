import "./Project.css";
import lily from "../../Assets/lily.jpg"
import ballon from "../../Assets/ballon.jpg"
import canyon1 from "../../Assets/canyon1.jpg"
import sale from "../../Assets/sale.jpg"
import todo from "../../Assets/todoNote.jpg"

function Project(): JSX.Element {
    return (
        <div className="project component__space" id="Portfolio">

            <div className="heading">
                <h1 className="heading">My Projects</h1>    
            </div>

            <div className="container">
                                <div className="project__img__box">
                                    <div className="card">
                                    <img className="img" src={sale} alt="shopping"></img>
                                        <div className="fon"></div>
                                            <div className="ProjectText">
                                                <h2>
                                                    Coupon system
                                                </h2>
                                                    <p>
                                                    Create edit and sell coupon in my first coupon project. 
                                                    </p>
                                                <div className="triangle"></div>
                                            </div>
                                            <a href="https://github.com/ReshefK/JavaCouponProjectPart2.git" className="btn">
                                            View Code
                                            </a>
                                            
                                    </div>
                                </div>

                                
                                    <div className="card">
                                    <img className="img" src={todo} alt="ballon"></img>
                                        <div className="fon"></div>
                                            <div className="ProjectText">
                                                <h2>
                                                    Todo list project
                                                </h2>
                                                    <p>
                                                    Todo app project, create edit and delete tasks.  
                                                    Also add the ability to translate task using microsoft translate API.
                                                    </p>
                                                <div className="triangle"></div>
                                            </div>
                                            <div>
                                            <a href="https://github.com/ReshefK/todo-app.git" target="_blank" rel="noopener noreferrer" className="btn">
                                            View Code
                                            </a>
                                            </div>
                                    </div>

                                    <div className="card">
                                    <img className="img" src={canyon1} alt="ballon"></img>
                                        <div className="fon"></div>
                                            <div className="ProjectText">
                                                <h2>
                                                    Transition
                                                </h2>
                                                    <p>
                                                    More project coming soon!
                                                    </p>
                                                <div className="triangle"></div>
                                            </div>
                                            <div className="btn">
                                            View
                                            </div>
                                    </div>
                                </div>

                          
        </div>
    );
}

export default Project;
