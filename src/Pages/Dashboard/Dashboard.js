import React, { useState } from "react";
import Drawer from "../../components/Drawer/Drawer";

const Dashboard = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDrawer1 = () => {
    setIsOpen1((prevState) => !prevState);
  };
  return (
    <>
      <button onClick={toggleDrawer1} className="toggle-button">
        {isOpen1 ? "Close Drawer 1" : "Open Drawer 1"}
      </button>

      <Drawer isOpen={isOpen1} onClose={() => {}} id="drawer" />
    </>
  );
};

export default Dashboard;
