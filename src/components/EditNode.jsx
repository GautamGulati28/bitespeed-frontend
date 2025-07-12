import React, { useContext, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { NodeContext } from "./NodeContext";

/**
 * EditNode component allows editing the label/text of the currently selected node.
 */
const EditNode = () => {
  // Destructure context values for node selection and change tracking
  const {
    nodeSelected: selectedNode,
    setNodeSelected: updateSelectedNode,
    setFlowHaveChanges: markFlowChanged,
  } = useContext(NodeContext);

  // Mark the flow as changed whenever the selected node changes
  useEffect(() => {
    markFlowChanged(true);
  }, [selectedNode, markFlowChanged]);

  /**
   * Handle textarea changes by updating the selected node's label
   * @param {object} event - The textarea change event
   */
  const handleLabelEdit = (event) => {
    const newLabel = event.target.value;
    updateSelectedNode((prev) => ({
      ...prev,
      data: { ...prev.data, label: newLabel },
    }));
  };

  return (
    <aside className="w-full">
      {/* Header with back button and title */}
      <div className="w-full border-b px-5 py-3 flex items-center">
        <button
          className="cursor-pointer"
          onClick={() => updateSelectedNode(null)}
          aria-label="Back"
        >
          <IoArrowBack />
        </button>
        <div className="flex-1 text-center">Message</div>
      </div>
      {/* Textarea for editing node label */}
      <div className="px-5 py-5 border-b">
        <label className="mb-5 block" htmlFor="node-label">
          Text
        </label>
        <textarea
          id="node-label"
          name="text"
          className="w-full border"
          rows={5}
          cols={30}
          value={selectedNode?.data.label || ""}
          onChange={handleLabelEdit}
        />
      </div>
    </aside>
  );
};

export default EditNode;
