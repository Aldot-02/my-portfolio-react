import React, { useState, useEffect } from 'react';
import { createProject, getAuthenticatedUser } from '../api/handleApi';
import { useNavigate } from 'react-router-dom';
import ProjectsPage from '../pages/projectPage/projectPage';

const NewProject: React.FC = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<any>(null);
    const [projectInfo, setProjectInfo] = useState({
        title: '',
        deployedUrl: '',
        description: '',
        firstTechnology: '',
        secondTechnology: '',
        thirdTechnology: '',
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userInfo = await getAuthenticatedUser();
                if (userInfo) {
                    setUserInfo(userInfo);
                } else {
                    navigate('/admin');
                }
            } catch (error) {
                console.log(error);
                navigate('/admin');
            }
        };

        fetchUserInfo();
    }, [navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProjectInfo((prevProjectInfo) => ({
            ...prevProjectInfo,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createProject(projectInfo);
            setProjectInfo({
                title: '',
                deployedUrl: '',
                description: '',
                firstTechnology: '',
                secondTechnology: '',
                thirdTechnology: '',
            });
            setIsFormSubmitted(true);
        } catch (error) {
            console.error('Error submitting project:', error);
        }
    };

    return (
        <>
            {!isFormSubmitted ? (
                <div className="right contact">
                    <form onSubmit={handleSubmit}>
                        <h3>Project's Information</h3>
                        <input
                            type="text"
                            placeholder="Project's Title"
                            name="title"
                            value={projectInfo.title}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Deployed Url"
                            name="deployedUrl"
                            value={projectInfo.deployedUrl}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            wrap="soft"
                            placeholder="Project’s Description (Max = 50 words)"
                            name="description"
                            value={projectInfo.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <h3>3 Topmost Technologies Used</h3>
                        <input
                            type="text"
                            placeholder="Technology 1"
                            name="firstTechnology"
                            value={projectInfo.firstTechnology}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Technology 2"
                            name="secondTechnology"
                            value={projectInfo.secondTechnology}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Technology 3"
                            name="thirdTechnology"
                            value={projectInfo.thirdTechnology}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Done</button>
                    </form>
                </div>
            ) : (
                <ProjectsPage activePath="/admin/projects"/>
            )}
        </>
    );
};

export default NewProject;