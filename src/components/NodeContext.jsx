import React, { createContext, useState } from "react";

// Create a context to share state across components
export const NodeContext = createContext();

// ContextProvider component wraps the app and provides shared state
const ContextProvider = (props) => {
  // State to track if there are unsaved changes in the flow
  const [flowHaveChanges, setFlowHaveChanges] = useState(false);

  // State to track if there are any errors in the flow
  const [flowHaveErrors, setFlowHaveErrors] = useState(false);

  // State used to trigger actions (like saving) from the navbar button
  const [toggleBtnClick, setToggleBtnClick] = useState(false);

  // State to keep track of the currently selected node in the flow builder
  const [nodeSelected, setNodeSelected] = useState(null);

  // Provide all state and setter functions to child components
  return (
    <NodeContext.Provider
      value={{
        flowHaveChanges,
        setFlowHaveChanges,
        flowHaveErrors,
        setFlowHaveErrors,
        toggleBtnClick,
        setToggleBtnClick,
        nodeSelected,
        setNodeSelected,
      }}
    >
      {props.children}
    </NodeContext.Provider>
  );
};

export default ContextProvider;
