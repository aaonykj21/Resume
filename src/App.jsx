import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from "./assets/me.jpg";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-top">
        <div className="container-left">
          <img src={image} className="image"></img>
          <div class="name">
            <p>NATCHA YAKERMJIT</p>
          </div>
          <section className="text-left">
            <p>CONTACT</p>
            <p className="dash">-------------------------------------</p>
            <div className="contactPhone">
              <GiRotaryPhone className="phoneIcon" />
              <p className="phone">087-530-0713</p>
            </div>
            <div className="contactEmail">
              <MdEmail className="emailIcon" />
              <p className="email">yakermjit_n@silpakorn.edu</p>
            </div>
            <div className="contactLocation">
              <IoLocation className="locationIcon" />
              <p className="location">Thawiwatthana, Bangkok</p>
            </div>
            <div className="contactGit">
              <FaGithub className="gitIcon" />
              <a href="https://github.com/aaonykj21" className="git">aaonykj21</a>
            </div>
            <p>SKILL</p>
            <p className="dash">-------------------------------------</p>
            <div>
              <p className="skill">Programmimg Language</p>
              <ul className="skill-list">
                <li>c</li>
                <li>java</li>
                <li>php</li>
                <li>python</li>
              </ul>
              <ul className="skill-list2">
                <li>javascript</li>
                <li>golang</li>
                <li>html,css</li>
              </ul>
            </div>
            <div>
              <p className="skill-database">Database</p>
              <ul className="skill-list">
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <p className="skill-tools">Tools</p>
              <ul className="skill-list">
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <p>ABOUT ME</p>
              <p className="dash">-------------------------------------</p>
              <p className = "about-me">
                I am currently a 3rd-year
                Computer Science student with
                a strong interest in
                development and a passion for
                programming. I am highly
                motivated to join this company
                for a co-op program to apply
                the knowledge I have gained in
                real-world work and further
                improve myself.
              </p>
            </div>
            <div>
            <p>LANGUAGE</p>
            <p className="dash">-------------------------------------</p>
            <ul className="skill-list">
                <li>Thai (Native)</li>
                <li>English (Reading,Listening)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="ConEdu">
          <p class="edu">EDUCATION</p>
      </div>
    </>
  )
}

export default App
