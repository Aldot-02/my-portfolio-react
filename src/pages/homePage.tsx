import { Link } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import Reaveal from '../components/reveal'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { PiDatabaseThin } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiSoundcloudLogoLight } from "react-icons/pi";
import { SlDocs } from "react-icons/sl";
import './homePage.css';
import ProjectsPage from './projectPage/projectPage';
const Image = require('../images/Image.png')
const AboutProfile = require('../images/profile.jpeg')
const Alx = require('../images/alx.jpeg')
const Chamber = require('../images/ict_chamber.jpeg')
const Andela = require('../images/andela.png');


const HomePage: React.FC = () => {

    return (
        <>
            <header>
                <nav className="navbar">
                    
                    <Link to='' className="logo">
                        <Reaveal>
                            <img src={Image} />
                        </Reaveal>
                    </Link>
                    <div className="hamburger">
                        <Reaveal>
                            <div className="bar"></div>
                        </Reaveal>
                    </div>
                    <Reaveal>
                        <ul className="nav-links">
                            <li><Link to="#about">About</Link></li>
                            <li><Link to="#work">Experience</Link></li>
                            <li><Link to="#blog">Work</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                            <li className="resume-button-li">
                                <a href="https://drive.google.com/file/d/1_WW0lXogY2RWcP3TRN31hHH5oU87cgCB/view?usp=drive_link" className="resume-button" id="login-logout-button" target='_blank'>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </Reaveal>
                </nav>
            </header>
                <nav className="mobile-nav">
                    <Reaveal>
                        <Link to="#about" className="remove-mobile-nav">About</Link>
                    </Reaveal>
                    <Reaveal>
                        <Link to="#work" className="remove-mobile-nav">Experience</Link>
                    </Reaveal>
                    <Reaveal>
                        <Link to="#blog" className="remove-mobile-nav">Work</Link>
                    </Reaveal>
                    <Reaveal>
                        <Link to="#contact" className="remove-mobile-nav">Contact</Link>
                    </Reaveal>
                    <Reaveal>
                        <a href="https://drive.google.com/file/d/1_WW0lXogY2RWcP3TRN31hHH5oU87cgCB/view?usp=drive_link" className="resume-button" id="login-logout-button">Resume</a>
                    </Reaveal>
                </nav>
                <div id="popup">
                    <Reaveal>
                        <h1>SUCCESS</h1>
                    </Reaveal>
                    <Reaveal>
                        <p>Thanks for getting in touch with me. I will get back to you in several hours to days.</p>
                    </Reaveal>
                    <Reaveal>
                        <Link to="#">Close</Link>
                    </Reaveal>
                </div>
            <main className="container"  id="blur">
                <aside className="left_col">
                    <div className="col_1">
                        <Reaveal>
                            <div className="left_border first_line"></div>
                        </Reaveal>
                        <div className="social_icons">
                            <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                                <Reaveal>
                                    <VscGithubAlt style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                            <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                                <Reaveal>
                                    <RiLinkedinLine style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                            <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                                <Reaveal>
                                    <RiTwitterXLine style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                            <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                                <Reaveal>
                                    <BiLogoInstagram style={{fontSize: "20px", marginTop: "20px"}} />
                                </Reaveal>
                            </Link>
                        </div>
                        <Reaveal>
                            <div className="left_border second_line"></div>
                        </Reaveal>
                    </div>
                </aside>

                {/* <!-- HOME SECTION --> */}
                <section>
                    <div className="index">
                        <div className="index_content">
                            <div className="greetings">
                                <Reaveal>
                                    <h1>Hello, my name is</h1>
                                </Reaveal>
                            </div>
                            <div className="name">
                                <Reaveal>
                                    <h2>Aldo Twizerimana</h2>
                                </Reaveal>
                            </div>
                            <div className="role">
                                <Reaveal>
                                    <h3>I'm a Creative Code <span className='color'>Artisan</span></h3>
                                </Reaveal>
                            </div>
                            <div className="description">
                                <Reaveal>
                                    <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, and cross-cutting tech solutions through <span className='color'>Andela Apprenticeship</span>.</p> 
                                </Reaveal>
                            </div>
                            <Reaveal>
                                <div className="message">
                                        <MdOutlinePermPhoneMsg style={{fontSize: "20px", marginRight: "15px"}}/>
                                        <p>Hire Me</p>
                                </div>
                            </Reaveal>
                        </div>
                    </div>

                    {/* <!-- ABOUT SECTION --> */}
                    <div className="about" id="about">
                        <div className="my_story_profile img">
                            <Reaveal>
                                <img src={AboutProfile} style={{zIndex: "-99999"}}/>
                            </Reaveal>
                        </div>
                        <div className="about-card my_story">
                            <Reaveal>
                                <h2><span className='color'>01. </span>About Me</h2>
                            </Reaveal>
                            <Reaveal>
                                <p><em><q className="quote color">Think the design, and Design the Thinking.</q></em></p>
                            </Reaveal>
                            <Reaveal>
                                <p>I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</p>
                            </Reaveal>
                            <Reaveal>
                                <p>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider <span className='color'>work an ongoing education</span>, and I'm always looking for <span className='color'>opportunities</span> to work with those who are willing to <span className='color'>share</span> their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me. I achieve all of these using these <span className='color'>technologies</span>:</p>
                            </Reaveal>
                            <div className="tech-skills">
                                    <ul>
                                        <Reaveal>
                                            <li>JavaScript (ES6+)</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>React</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Node.js</li>
                                        </Reaveal>
                                    </ul>
                                    <ul>
                                        <Reaveal>
                                            <li>Typescript</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Git & GitHub</li>
                                        </Reaveal>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-card what_I_do">
                        <div className="my-services">
                                <h2>My <span className='color'>Services</span></h2>
                            <div className="service-cards">
                                    <div className="card">
                                        <Reaveal>
                                            <IoIosLaptop className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Frontend Development</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I can build a beautiful, responsive, and accessible website using HTML, CSS, React, and JavaScript.</p>
                                        </Reaveal>
                                    </div>
                                    <div className="card">
                                        <Reaveal>
                                            <PiDatabaseThin className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Backend Development</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I can build a scalable and secure backend using Node.js, Express, and MongoDB.</p>
                                        </Reaveal>
                                    </div>
                                    <div className="card">
                                        <Reaveal>
                                            <HiOutlineDevicePhoneMobile className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Mobile Development</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I can build a mobile application using React Native.</p>
                                        </Reaveal>
                                    </div>
                                    <div className='card'>
                                        <Reaveal>
                                            <PiDatabaseThin className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Database Management</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I can manage and maintain databases using SQL and NoSQL databases.</p>
                                        </Reaveal>
                                    </div>
                                    <div className='card'>
                                        <Reaveal>
                                            <PiSoundcloudLogoLight className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Data Engineering</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I can build datawarehouses and datapipelines using Snowflake, AmazonRedshift, and BigQuery.</p>
                                        </Reaveal>
                                    </div>
                                    <div className='card'>
                                        <Reaveal>
                                            <SlDocs className='service-icon' style={{marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        </Reaveal>
                                        <Reaveal>
                                            <h3>Data Strategy Documentation</h3>
                                        </Reaveal>
                                        <Reaveal>
                                            <p>I can help your business have the key guide/blue print about the company's data and data management methodologies.</p>
                                        </Reaveal>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE SECTION */}
                    <Reaveal>
                        <h2 style={{textAlign: "center", marginTop: "200px"}}><span className='color'>02. </span>Experience</h2>
                    </Reaveal>
                    <div className="timeline">
                        <div className="timeline-container left-container">
                            <img src={Alx}/>
                            <div className="text-box">
                                    <div className="experience">
                                        <Reaveal>
                                            <h2>Fullstack Software Developer @<span className='color'>ALX Africa</span></h2>
                                        </Reaveal>
                                        <Reaveal>
                                            <p style={{fontSize: "16px"}}>Nov 2022 - Dec 2023 . <span className='color'>Remote</span></p>
                                        </Reaveal>
                                        <Reaveal>
                                            <p className='color'  style={{fontSize: "14px"}}>- Apprenticeship -</p>
                                        </Reaveal>
                                    </div>
                                    <ul>
                                        <Reaveal>
                                            <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        </Reaveal>
                                        <Reaveal>
                                            <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        </Reaveal>
                                    </ul>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>
                        <div className="timeline-container right-container">
                            <img src={Chamber}/>
                            <div className="text-box">
                                <div className="experience">
                                    <Reaveal>
                                        <h2>Data Engineer @<span className='color'>Rwanda ICT Chamber</span></h2>
                                    </Reaveal>
                                    <Reaveal>
                                        <p>May 2023 - Feb 2024 . <span className='color'>Hybrid</span></p>
                                    </Reaveal>
                                    <Reaveal>
                                        <p className='color'  style={{fontSize: "14px"}}>- Fellowship -</p>
                                    </Reaveal>
                                </div>
                                <ul>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                </ul>
                                <span className='right-container-arrow'></span>
                            </div>
                        </div>
                        <div className="timeline-container left-container">
                            <img src={Andela}/>
                            <div className="text-box">
                                <div className="experience">
                                    <Reaveal>
                                        <h2>Fullstack Software Developer @<span className='color'>Andela</span></h2>
                                    </Reaveal>
                                    <Reaveal>
                                        <p style={{fontSize: "16px"}}>Jan 2024 - Present . <span className='color'>Remote</span></p>
                                    </Reaveal>
                                    <Reaveal>
                                        <p className='color'  style={{fontSize: "14px"}}>- Apprenticeship -</p>
                                    </Reaveal>
                                </div>
                                <ul>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                    <Reaveal>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </Reaveal>
                                </ul>
                                <span className='left-container-arrow'></span>
                            </div>
                        </div>
                    </div>
                    {/* THE END OF EXPERIENCE SECTION */}

                    {/* <!-- WORK SECTIN --> */}
                    <ProjectsPage activePath="/" />

                    {/* <!-- CONTACT PAGE --> */}
                    <h2 style={{textAlign: "center", margin: "100px"}}><span className='color'>04. </span>Get In Touch</h2>
                    <div className="mail-me" id="contact">
                        <div className='contact-me'>
                            <Reaveal>
                                <p>Whether you have an idea for a <span className='color'>project</span> or just want to chat, feel free to send me an email!</p>
                            </Reaveal>
                            <Reaveal>
                                <p>I am currently looking for new <span className='color'>opportunities</span>, and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                            </Reaveal>
                            <Reaveal>
                                <a href="mailto:twizald.02@gmail.com">
                                    <div className='message'>
                                        <TfiEmail style={{fontSize: "20px", marginRight: "15px"}}/>
                                        <span>Email Me</span>
                                    </div>
                                </a>
                            </Reaveal>
                        </div>
                    </div>
                    <div className="social_res-icons">
                        <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                            <Reaveal>
                                <VscGithubAlt style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                        <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                            <Reaveal>
                                <RiLinkedinLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                        <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                            <Reaveal>
                                <RiTwitterXLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                        <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                            <Reaveal>
                                <BiLogoInstagram style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Reaveal>
                        </Link>
                    </div>
                    <footer>
                        <Reaveal>
                            <p className="copyright">Designed and Built By Aldo Twizerimana</p>
                        </Reaveal>
                        <Reaveal>
                            <p className="git_ratings">Follow me on my <Link to="https://github.com/Aldot-02">Github</Link></p>
                        </Reaveal>
                    </footer>
                </section>
            </main>
        </>
    );
}


export default HomePage;