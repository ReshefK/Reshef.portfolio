import "./Home.css";
import logo from "../../Assets/logoTransparence.png"
import { useState } from "react";

function Home(): JSX.Element {

    //  fixed header
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        header?.classList.toggle("active", window.scrollY > 0)
    });
    // Toggle menu
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show)
    
    return (
        <div className="Home" id="Home">
            <div className = "Home_bg">
                <div className="header d__flex align__item__center pxy__30">
                    <div className="logo">
                        {/* <img className="img" src={logo} alt=""/> */}
                    </div>

                    <div className="navigation pxy__30">
                        <ul className="navbar d__flex">
                            <a href= "#Home"><li className="nav__item mx__15">Home</li></a>
                            <a href= "#About"><li className="nav__item mx__15">About</li></a>
                            <a href= "#Skills"><li className="nav__item mx__15">Skills</li></a>
                            <a href= "#Portfolio"><li className="nav__item mx__15">Portfolio</li></a>
                            <a href= "#Contact"><li className="nav__item mx__15">Contact</li></a>
                        </ul>
                    </div>
                

                {/* responsive menu */}

                <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
              
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar" onClick={toggle}>
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar" onClick={toggle}>
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar" onClick={toggle}>
              <a href="#Skills">Skills</a>
            </li>
            <li className="sideNavbar" onClick={toggle} >
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar" onClick={toggle}>
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
           </div>
        
                
                {/* main info */}
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <div className="css-typing">
  
                                <div className="text-container">
                                    <p className="text-p-1">
                                        class welcome&#123;
                                    </p>
                                </div>

                                <div className="text-container">
                                    <p className="text-p-2">
                                        &nbsp;&nbsp;public static void main(String args[])&#123;
                                    </p>
                                </div>

                                <div className="text-container">
                                    <p className="text-p-3">
                                        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hi I'm Reshef"); 
                                    </p>
                                </div>

                                <div className="text-container">
                                    <p className="text-p-4">
                                        &nbsp;&nbsp;&#125;
                                    </p> 
                                </div>
    
                                <div className="text-container">
                                    <p className="text-p-5">
                                        &#125;
                                    </p> 
                                </div>
                                <br/>
                                <br/>
                                <br/>

                                <div className="text-container2">
                                    <p className="text-p-6"> 
                                        <div className="containerArrow">
                                            <div className="chevron"></div>
                                            <div className="chevron"></div>
                                            <div className="chevron"></div>
                                            
                                        </div>
                                        
                                    </p>
                                </div>
                                

                            </div>

                        </div>

                    </div>
                </div>

            </div>
			
        </div>
    );
}

export default Home;
