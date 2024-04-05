import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../../api/handleApi';
import Project from '../../components/project';

interface Project {
    _id: string;
    title: string;
    description: string;
    firstTechnology: string;
    secondTechnology?: string;
    thirdTechnology?: string;
    deployedUrl: string;
}

interface ProjectsPageProps {
    activePath: string;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ activePath }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const allProjects = await getAllProjects();
            setProjects(allProjects);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <div className={`work ${activePath === '/admin/projects' ? 'all-projects' : ''}`} id="work">
            <h1>Noteworthy projects I have worked on</h1>
            <div className="work_section">
                {projects.map((project) => (
                    <Project
                        key={project._id}
                        title={project.title}
                        description={project.description}
                        firstTechnology={project.firstTechnology}
                        secondTechnology={project.secondTechnology}
                        thirdTechnology={project.thirdTechnology}
                        deployedUrl={project.deployedUrl}
                        activePath={activePath}
                    />
                ))}
            </div>
            {activePath === '/admin/projects' ? (
                <div className="work_btn" style={{display: "none"}}>
                    <button className="delete-btn">Delete</button>
                    <button className="user-btn">Edit</button>
                </div>
            ) : (
                <div className="work_btn">Show More</div>
            )}
        </div>
    );
};

export default ProjectsPage;