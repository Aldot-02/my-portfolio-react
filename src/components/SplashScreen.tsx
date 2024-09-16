import React, { useEffect, useState } from "react";

const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${show ? "show" : "hide"}`}>
      <div className="circle">
        <span className="letter-a">A</span>
      </div>
    </div>
  );
};

export default SplashScreen;
