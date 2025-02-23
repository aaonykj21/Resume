import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import image from "./assets/me.jpg";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="header">
          <img src={image} className="myimage"></img>
          <div className="name">
            <p>
              NATCHA <br />
              YAKERMJIT
            </p>
          </div>
        </div>
        <div className="content">
          <div className="left-container">
            <div className="contact">
              <p>CONTACT</p>
              <div className="dashline"></div>
              <div className="contactPhone">
                <p>
                  <GiRotaryPhone className="phoneIcon" /> &nbsp; 087-530-0713
                </p>
              </div>
              <div className="contactEmail">
                <p>
                  <MdEmail className="emailIcon" /> &nbsp;
                  yakermjit_n@silpakorn.edu
                </p>
              </div>
              <div className="contactLocation">
                <p>
                  <IoLocation className="locationIcon" /> &nbsp; Thawiwatthana,
                  Bangkok
                </p>
              </div>
              <div className="contactGit">
                <a href="https://github.com/aaonykj21">
                  <p>
                    <FaGithub className="gitIcon" /> &nbsp; aaonykj21
                  </p>
                </a>
              </div>
            </div>
            <div className="skills">
              <p>SKILLS</p>
              <div className="dashline"></div>
              <div className="skill-list">
                <h4>Programmimg Language</h4>
                <div className="pg">
                  <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>PHP</li>
                    <li>Python</li>
                  </ul>
                  <ul>
                    <li>Javascript</li>
                    <li>Golang</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <h4>Database</h4>
                <ul>
                  <li>MySQL</li>
                </ul>
                <h4>Tools</h4>
                <ul>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
            <div className="aboutme">
              <p>ABOUT ME</p>
              <div className="dashline"></div>
              <p className="about">
                I am currently a 3rd-year Computer Science student with a strong
                interest in development and a passion for programming. I am
                highly motivated to join this company for a co-op program to
                apply the knowledge I have gained in real-world work and further
                improve myself.
              </p>
            </div>
            <div className="language">
              <p>LANGUAGE</p>
              <div className="dashline"></div>
              <ul className="skill-list">
                <li>Thai (Native)</li>
                <li>English (Reading,Listening)</li>
              </ul>
            </div>
          </div>
          <div className="middle">
                <div className="one">
                  <p>01</p>
                </div>
                <div className="line1"></div>
                <div className="two">
                  <p>02</p>
                </div>
                <div className="line2"></div>
                <div className="three">
                  <p>03</p>
                </div>
          </div>
          <div className="right-container">
            <div className="Edu">
              <h3>EDUCATION</h3>
              <p className="university">Silpakorn University</p>
              <p className="province">Nakhonpathom, Thailand</p>
              <div className="gpa">
                <ul>
                  <li>Computer Science</li>
                  <li>GPA 3.23 (5 semesters)</li>
                </ul>
              </div>
              <p className="school">Nawaminthrachinuthit Satriwitthaya Phutthamonthon School</p>
              <p className="province">Bangkok, Thailand</p>
              <div className="gpa">
                <ul>
                  <li>GPA 3.77</li>
                </ul>
              </div>
            </div>
            <div>
            <div className="project">
              <h3>PROJECT</h3>
                <ul>
                  <li>Human computer interaction and
                    user experience design project (Sep - Oct 2024)</li>
                  <p>Interviews were conducted with individuals who had previously used
                    food court services to identify pain points. These issues were resolved
                    by designing a mobile app in Figma, ensuring it is user-friendly and
                    meets user needs effectively.</p>
                  <li>Hand gestures recognition using 21 points coordinates
                    with Machine Learning (Aug - Oct 2024)
                  </li>
                  <p>A dataset of 4,000 collected images was used to extract the
                    coordinates of 21 hand points from the images. The data was then
                    used to train various models.
                  </p>
                  <li>Web Application Development (Mar - Apr 2024)</li>
                  <p>Developed a web application for online order management using the
                    PHP language(backend), JavaScript and CSS(frontend), and connected
                    it to an SQL database to ensure the functionality of various features.
                  </p>
                </ul>
              </div>
            </div>
            <div>
            <div className="activities">
              <h3>EXTRACURRICULAR ACTIVITIES</h3>
                <ul>
                  <li>AUCC (Oct 2024)</li>
                  <p>An article on hand gesture recognition using 21-point coordinates
                    with machine learning was written in collaboration with four other
                    LANGUAGE team members. </p>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;