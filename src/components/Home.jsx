import React from "react";
import Navbar from "./Navbar";
import ReactflowContainer from "./ReactflowContainer";

/**
 * MainPage component serves as the landing layout for the application.
 * It arranges the navigation bar and the flow builder area vertically.
 */
const MainPage = () => {
  // Render the navigation and main builder in a vertical flex container
  return (
    <section className="flex flex-col h-screen">
      {/* Top navigation bar */}
      <Navbar />
      {/* Main flow builder workspace */}
      <ReactflowContainer />
    </section>
  );
};

export default MainPage;
