import React, { useState, useEffect } from 'react';
import { getAllProjects, deleteProject } from '../../api/handleApi';
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

    const handleDeleteProject = async (id: string) => {
        console.log('Deleting project with id:', id);
        try {
            await deleteProject(id);
            fetchProjects();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={`work ${activePath === '/admin/projects' ? 'all-projects' : ''}`} id="work">
            <h2 style={{textAlign: "center", marginBottom: "100px"}}><span className='color'>03. </span>Noteworthy projects I have worked on</h2>
            <div className="work_section">
                {projects.map((project) => (
                    <Project
                        key={project._id}
                        id={project._id}
                        title={project.title}
                        description={project.description}
                        firstTechnology={project.firstTechnology}
                        secondTechnology={project.secondTechnology}
                        thirdTechnology={project.thirdTechnology}
                        deployedUrl={project.deployedUrl}
                        activePath={activePath}
                        handleDeleteProject={handleDeleteProject}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
