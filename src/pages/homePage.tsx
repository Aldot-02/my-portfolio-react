import { Link } from 'react-router-dom';
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { MdOutlinePermPhoneMsg, MdOutlinePhoneInTalk, MdAlternateEmail } from "react-icons/md";
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
                            <img src={Image} />
                        </Link>
                        <div className="hamburger">
                            <div className="bar"></div>
                        </div>
                        <ul className="nav-links">
                            <li><Link to="#about">About</Link></li>
                            <li><Link to="#work">Experience</Link></li>
                            <li><Link to="#blog">Work</Link></li>
                            <li><Link to="#contact">Contact</Link></li>
                            <li className="resume-button-li">
                                <Link to="" className="resume-button" id="login-logout-button">
                                    <TfiDownload style={{color: "#F45815", fontSize: "20px", marginRight: "15px"}}/>
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <nav className="mobile-nav">
                    <Link to="#about" className="remove-mobile-nav">About</Link>
                    <Link to="#work" className="remove-mobile-nav">Experience</Link>
                    <Link to="#blog" className="remove-mobile-nav">Work</Link>
                    <Link to="#contact" className="remove-mobile-nav">Contact</Link>
                    <Link to="" className="resume-button" id="login-logout-button">
                        <TfiDownload style={{color: "#F45815", fontSize: "20px", marginRight: "15px"}}/>
                        Resume
                    </Link>
                </nav>
                <div id="popup">
                    <h1>SUCCESS</h1>
                    <p>Thanks for getting in touch with me. I will get back to you in several hours to days.</p>
                    <Link to="#">Close</Link>
                </div>
                <main className="container"  id="blur">
                    <aside className="left_col">
                        <div className="col_1">
                            <div className="left_border first_line"></div>
                            <div className="social_icons">
                                <Link to="mailto:twizald.02@gmail.com" className='social_icons_icon'>
                                    <TfiEmail style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}}/>
                                </Link>
                                <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                                    <VscGithubAlt style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                                <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                                    <RiLinkedinLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                                <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                                    <RiTwitterXLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                                <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                                    <BiLogoInstagram style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                                </Link>
                            </div>
                            <div className="left_border second_line"></div>
                        </div>
                    </aside>

                    {/* <!-- HOME SECTION --> */}
                    <section>
                        <div className="index">
                            <div className="index_content">
                                <div className="greetings">
                                    <h1>Hello, my name is</h1>
                                </div>
                                <div className="name">
                                    <h2>Aldo Twizerimana</h2>
                                </div>
                                <div className="role">
                                    <h3>I'm a Creative Code <span className='color'>Artisan</span></h3>
                                </div>
                                <div className="description">
                                    <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, and cross-cutting tech solutions through <span className='color'>Andela Apprenticeship</span>.</p>
                                </div>
                                <div className="message">
                                    <MdOutlinePermPhoneMsg style={{fontSize: "20px", marginRight: "15px"}}/>
                                    <p>Hire Me</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ABOUT SECTION --> */}
                        <div className="about" id="about">
                            <div className="my_story_profile img">
                                <img src={AboutProfile} style={{zIndex: "-99999"}}/>
                            </div>
                            <div className="about-card my_story">
                                <h2><span className='color'>01. </span>About Me</h2>
                                <p><em><q className="quote color">Think the design, and Design the Thinking.</q></em></p>
                                <p>I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</p>
                                <p>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider <span className='color'>work an ongoing education</span>, and I'm always looking for <span className='color'>opportunities</span> to work with those who are willing to <span className='color'>share</span> their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me. I achieve all of these using these <span className='color'>technologies</span>:</p>
                                <div className="tech-skills">
                                    <ul>
                                        <li>JavaScript (ES6+)</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                    </ul>
                                    <ul>
                                        <li>Typescript</li>
                                        <li>Git & GitHub</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-card what_I_do">
                            <div className="my-services">
                                <h2>My <span className='color'>Services</span></h2>
                                <div className="service-cards">
                                    <div className="card">
                                        <IoIosLaptop style={{color: "#F45815", marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        <h3>Frontend Development</h3>
                                        <p>I can build a beautiful, responsive, and accessible website using HTML, CSS, React, and JavaScript.</p>
                                    </div>
                                    <div className="card">
                                        <PiDatabaseThin style={{color: "#F45815", marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        <h3>Backend Development</h3>
                                        <p>I can build a scalable and secure backend using Node.js, Express, and MongoDB.</p>
                                    </div>
                                    <div className="card">
                                        <HiOutlineDevicePhoneMobile style={{color: "#F45815", marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        <h3>Mobile Development</h3>
                                        <p>I can build a mobile application using React Native.</p>
                                    </div>
                                    <div className='card'>
                                        <PiDatabaseThin style={{color: "#F45815", marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        <h3>Database Management</h3>
                                        <p>I can manage and maintain databases using SQL and NoSQL databases.</p>
                                    </div>
                                    <div className='card'>
                                        <PiSoundcloudLogoLight style={{color: "#F45815", marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        <h3>Data Engineering</h3>
                                        <p>I can build datawarehouses and datapipelines using Snowflake, AmazonRedshift, and BigQuery.</p>
                                    </div>
                                    <div className='card'>
                                        <SlDocs style={{color: "#F45815", marginTop: "30px", marginBottom: "20px", fontSize: "4.8rem"}}/>
                                        <h3>Data Strategy Documentation</h3>
                                        <p>I can help your business have the key guide/blue print about the company's data and data management methodologies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* EXPERIENCE SECTION */}
                        <h2 style={{textAlign: "center", marginTop: "200px"}}><span className='color'>02. </span>Experience</h2>
                        <div className="timeline">
                            <div className="timeline-container left-container">
                                <img src={Alx}/>
                                <div className="text-box">
                                    <div className="experience">
                                        <h2>Fullstack Software Developer @<span className='color'>ALX Africa</span></h2>
                                        <p style={{fontSize: "16px"}}>Nov 2022 - Dec 2023 . <span className='color'>Remote</span></p>
                                        <p className='color'  style={{fontSize: "14px"}}>- Apprenticeship -</p>
                                    </div>
                                    <ul>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </ul>
                                    <span className='left-container-arrow'></span>
                                </div>
                            </div>
                            <div className="timeline-container right-container">
                                <img src={Chamber}/>
                                <div className="text-box">
                                    <div className="experience">
                                        <h2>Data Engineer @<span className='color'>Rwanda ICT Chamber</span></h2>
                                        <p>May 2023 - Feb 2024 . <span className='color'>Hybrid</span></p>
                                        <p className='color'>- Fellowship -</p>
                                    </div>
                                    <ul>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                    </ul>
                                    <span className='right-container-arrow'></span>
                                </div>
                            </div>
                            <div className="timeline-container left-container">
                                <img src={Andela}/>
                                <div className="text-box">
                                    <div className="experience">
                                        <h2>Fullstack Software Developer @<span className='color'>Andela</span></h2>
                                        <p style={{fontSize: "16px"}}>Jan 2024 - Present . <span className='color'>Remote</span></p>
                                        <p className='color'  style={{fontSize: "14px"}}>- Apprenticeship -</p>
                                    </div>
                                    <ul>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
                                        <li>Line 138:37:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</li>
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
                        <div className="class_section" id="contact">
                            <div className="personal_contact">
                                <div className="contact_title">
                                    <h2>Faster communication</h2>
                                    <div className="contact_underline"></div>
                                </div>
                                <div className="flex_contact">
                                    <div className="fast_contact">
                                        <MdAlternateEmail style={{ background: "#0A192F", color: "#ffffff90", borderRadius: "50%", marginRight: "20px", fontSize: "50px", padding: "10px", cursor: "pointer"}}/>
                                        <div>
                                            <p>Email me</p>
                                            <p><Link to="mailto:twizald.02@gmail.com" >twizald.02@gmail.com</Link></p>
                                        </div>
                                    </div>
                                    <div className="fast_contact">
                                        <MdOutlinePhoneInTalk style={{ background: "#0A192F", color: "#ffffff90", borderRadius: "50%", marginRight: "20px", fontSize: "50px", padding: "10px", cursor: "pointer"}}/>
                                        <div>
                                            <p>contact me</p>
                                            <p>+250 789 764 748</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact" style={{backgroundColor: "#0d2242", border: "0.5px solid #0f2f5ffe"}}>
                                <form className="home-contact">
                                    <div className="input-field field">
                                        <input type="text" id="name" placeholder="Your name" className="item"/>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <div className="input-field field">
                                        <input type="text" id="email" placeholder="Email address" className="item"/>
                                        <div className="error-txt email-address">This Field can't be empty</div>
                                    </div>
                                    <div className="input-field field">
                                        <input type="tel" id="phone" placeholder="Your phone No." className="item"/>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <div className="input-field field">
                                        <input type="text" id="subject" placeholder="Subject" className="item"/>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <div className="textarea-field field">
                                        <textarea id="message" placeholder="Your message" wrap="soft" className="item"></textarea>
                                        <div className="error-txt">This Field can't be empty</div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>                    
                            </div>
                        </div>
                        <div className="social_res-icons">
                            <Link to="mailto:twizald.02@gmail.com" className='social_icons_icon'>
                                <TfiEmail style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}}/>
                            </Link>
                            <Link to="https://github.com/Aldot-02" className='social_icons_icon'>
                                <VscGithubAlt style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                            <Link to="https://www.linkedin.com/in/aldot-/" className='social_icons_icon'>
                                <RiLinkedinLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                            <Link to="https://twitter.com/twizald" className='social_icons_icon'>
                                <RiTwitterXLine style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                            <Link to="https://www.instagram.com/sprout.ta/" className='social_icons_icon'>
                                <BiLogoInstagram style={{fontSize: "20px", color: "#ffffff", marginTop: "20px"}} />
                            </Link>
                        </div>
                        <footer>
                            <p className="copyright">Designed and Built By Aldo Twizerimana</p>
                            <p className="git_ratings">Follow me on my <Link to="https://github.com/Aldot-02">Github</Link></p>
                        </footer>
                    </section>
                </main>
        </>
    );
}


export default HomePage;