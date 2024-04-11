import React from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { IoMdOpen } from 'react-icons/io';
import Reveal from '../components/reveal';

interface ProjectProps {
    id: string;
    title: string;
    description: string;
    firstTechnology: string;
    secondTechnology?: string;
    thirdTechnology?: string;
    deployedUrl: string;
    activePath: string;
    handleDeleteProject: (id: string) => void;
}

const Project: React.FC<ProjectProps> = ({
    id,
    title,
    description,
    firstTechnology,
    secondTechnology,
    thirdTechnology,
    deployedUrl,
    activePath,
    handleDeleteProject
}) => {
    return (
        <>
            <div className="Project" style={{border: "0.5px solid #0f2f5ffe"}}>
                <div className="project_icons">
                    <Reveal>
                        <CiFolderOn className="project_folder" style={{color: "#F45815", fontSize: "50px"}}/>
                    </Reveal>
                    <div className="external">
                        <Reveal>
                            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                                <IoMdOpen className="new-tab" style={{ marginLeft: "15px", fontSize: "18px", color: "#F45815" }} />
                            </a>
                        </Reveal>
                    </div>
                </div>
                <Reveal>
                    <h2>{title}</h2>
                </Reveal>
                <Reveal>
                    <p>{description}</p>
                </Reveal>
                {activePath === '/admin/projects' ? (
                    <div className="project_buttons" style={{marginTop: "30px"}}>
                        <Reveal>
                            <button className="delete-btn" style={{marginRight: "20px"}} onClick={() => handleDeleteProject(id)}>Delete</button>
                        </Reveal>
                        <Reveal>
                            <button className="user-btn">Edit</button>
                        </Reveal>
                    </div>
                ) : (
                    <div className="languages">
                        <Reveal>
                            <ul>
                                <li>{firstTechnology}</li>
                                {secondTechnology && <li>{secondTechnology}</li>}
                                {thirdTechnology && <li>{thirdTechnology}</li>}
                            </ul>
                        </Reveal>
                    </div>
                )}
            </div>
        </>
    );
};

export default Project;