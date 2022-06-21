import "./Contact.css";

function Contact(): JSX.Element {
    return (
        <div className="contact component__space" id="Contact">
            <div className="title">LETS WORK TOGHTER</div>
        <div className="row">
            <div className="col__2">
                <div className="contact__box">
                    <br/>
                    <div className="input__box">
                        
                        <h2 className ="hire">
                            I'm currently open for new job opportunities.
                            <br/>
                            <br/>
                            Hope we can work together to achieve something Big!
                        </h2>
                           <br/>
                
                        <h1>
                           <a href="mailto:reshef.ka@gmail.com" className="link">reshef.ka@gmail.com</a>
                       </h1>
                    </div>
                </div>
            </div>
            <div className="col__2">
                <h1> Contact</h1>
                <br/>
                <a className="phone"><i className="fa fa-phone fa-2x" aria-hidden="true"> +972-544818405</i></a>
                <br/>

                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>

                <div className="wrapper">
                
                    <ul>
                        <li className="facebook"><a href="https://www.facebook.com/reshef.kama"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
                        <li className="twitter"><a href="https://twitter.com/reshefka"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                        <li className="linkedin"><a href="https://www.linkedin.com/in/reshef-kama/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                        <li className="github"><a href="https://github.com/ReshefK" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                        
                    </ul>
                </div>

            </div>

            <div className="upToTopBtn">
                <a href="" className ="arrowUp" >
                    <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg>
                </a>


          
            </div>
        </div>
    </div>
    );
}

export default Contact;
