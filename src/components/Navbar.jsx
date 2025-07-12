import React, { useContext } from "react";
import { NodeContext } from "./NodeContext.jsx";

/**
 * Navbar component displays the application title and a save button.
 * The save button visually indicates if there are unsaved changes.
 */
const Navbar = () => {
  // Access context values for tracking changes and button toggling
  const { flowHaveChanges, setToggleBtnClick } = useContext(NodeContext);

  /**
   * Handles the click event for the save button.
   * Triggers the save action by toggling the context value.
   */
  const handleSaveClick = () => {
    setToggleBtnClick((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
      {/* Application Title */}
      <h1 className="text-lg font-bold text-blue-700 tracking-tight">
        BiteSpeed Flow Builder
      </h1>
      {/* Save Changes Button */}
      <button
        className={`ml-4 px-4 py-2 rounded-md transition-colors duration-150 ${
          flowHaveChanges
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        onClick={handleSaveClick}
        disabled={!flowHaveChanges}
        aria-disabled={!flowHaveChanges}
        aria-label="Save changes"
      >
        {flowHaveChanges ? "Save changes" : "All changes saved"}
      </button>
    </header>
  );
};

export default Navbar;
