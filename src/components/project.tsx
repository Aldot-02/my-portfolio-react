import React from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { IoMdOpen } from 'react-icons/io';

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
            <div className="project" style={{backgroundColor: "#0d2242"}}>
                <div className="project_icons">
                    <CiFolderOn className="project_folder" />
                    <div className="external">
                        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                            <IoMdOpen className="new-tab" style={{ marginLeft: "15px", fontSize: "18px" }} />
                        </a>
                    </div>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                {activePath === '/admin/projects' ? (
                    <div className="project_buttons" style={{marginTop: "30px"}}>
                        <button className="delete-btn" style={{marginRight: "20px"}} onClick={() => handleDeleteProject(id)}>Delete</button>
                        <button className="user-btn">Edit</button>
                    </div>
                ) : (
                    <div className="languages">
                        <ul>
                            <li>{firstTechnology}</li>
                            {secondTechnology && <li>{secondTechnology}</li>}
                            {thirdTechnology && <li>{thirdTechnology}</li>}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Project;