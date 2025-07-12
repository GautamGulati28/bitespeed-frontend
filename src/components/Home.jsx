import React from "react";
import Navbar from "./Navbar";
import ReactflowContainer from "./ReactflowContainer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* navbar component */}
      <Navbar />
      {/* reactflow component */}
      <ReactflowContainer />
    </div>
  );
};

export default Home;