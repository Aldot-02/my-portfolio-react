import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Auth from './pages/authentication/auth'
import AdminHome from './pages/dashboard/home/admin-home'
import AllAdmins from './pages/dashboard/admins/allAdmins'
import AdminProjects from './pages/dashboard/projects/adminProject'
import AdminExperience from './pages/dashboard/experience/adminExperience'
import AdminCertification from './pages/dashboard/certifications/adminCertifications'

const App: React.FC = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Auth />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/admins" element={<AllAdmins />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/experience" element={<AdminExperience />} />
          <Route path="/admin/certification" element={<AdminCertification />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", color: "#F45815", fontSize: "40px", display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh" }}>
                <p>Something went wrong. There is nothing to display here!</p>
              </main>
            }
          />
        </Routes>
    </>
  );
}

export default App;