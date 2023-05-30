import "../css/resume.css";
import resume from '../../Assets/images/resume.png';
import github from '../../Assets/images/github.png';
import heli from '../../Assets/images/heli.gif';
import rocket from '../../Assets/images/rocket.gif';
import linkedin from '../../Assets/images/linkedin.png';
import resumefile from '../../Assets/files/resume.pdf';




export default function Resume() {
    return (
        <body className="resbg">
            <div>
                <img alt="progress" src={heli} className="==" />
            </div>

            <div className="row position-absolute top-50 start-50 translate-middle">
                <div className="col text-center">
                    <a href="https://github.com/17anguyen" target="_blank" rel="noreferrer" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        <img classname='profile ' alt="profile" src={github} style={{ width: '100%' }} />
                        <h2>View Github</h2>
                    </a>
                </div>

                <div className="col text-center">
                    <a href={resumefile} download className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        <img classname='profile ' alt="profile" src={resume} style={{ width: '100%' }} />
                        <h2>Download Resume</h2>
                    </a>
                </div>

                <div className="col text-center">
                    <a className="linkedin link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.linkedin.com/in/alivia-thomas-4b9a7b207/" target="_blank" rel="noreferrer">
                        <img classname='profile ' alt="profile" src={linkedin} style={{ width: '100%' }} />
                        <h2>Connect on Linkedin</h2>
                    </a>
                </div>
            </div>
            <div>
                <img alt="progress" src={rocket} className="position-absolute bottom-0 end-0" />
            </div>


        </body >

    );
}