import axios from 'axios';

const baseUrl = 'https://my-portfolio-react-358c.onrender.com';

const createProject = async (project: any) => {
    try {
        const response = await axios.post(`${baseUrl}/project`, project);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getProject = async (id: any) => {
    try {
        const response = await axios.get(`${baseUrl}/project/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const getAllProjects = async () => {
    try {
        const response = await axios.get(`${baseUrl}/project/all`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const updateProject = async (id: any, updatedProject: any) => {
    try {
        const response = await axios.put(`${baseUrl}/project/${id}`, updatedProject);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const deleteProject = async (id: any) => {
    try {
        const response = await axios.delete(`${baseUrl}/project/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const registerUser = (name: string, email: string, password: string) => {
    axios
    .post(`${baseUrl}/auth/register`, { name, email, password })
    .then((data) => {
        console.log(data);
    }).catch((error) => console.log(error));
}

const loginUser = (email: string, password: string, navigate: { (arg0: string): void; }) => {
    axios
    .post(`${baseUrl}/auth/login`, { email, password }, { withCredentials: true })
    .then((data) => {
        console.log(data);
        navigate('/admin/home');
    }).catch((error) => console.log(error));
}

const getAuthenticatedUser = async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/authenticated`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  const logoutUser = async () => {
    try {
      await axios.post(`${baseUrl}/auth/logout`, { withCredentials: true });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export {createProject, getProject, getAllProjects, updateProject, deleteProject, registerUser, loginUser, getAuthenticatedUser, logoutUser}