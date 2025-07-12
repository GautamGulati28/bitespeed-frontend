import React from "react";
import { Handle, Position } from "reactflow";
import { AiOutlineMessage } from "react-icons/ai";

/**
 * MessageNode displays a styled node for sending messages, including a WhatsApp logo.
 * @param {object} props - Contains id and data for the node.
 */
const MessageNode = (props) => {
  // Extract id and data from props for clarity
  const { id, data } = props;

  // Optional: fallback label if not provided
  const labelText = data?.label || "No message provided";

  return (
    <div className="min-w-[150px] max-w-[200px] rounded-md overflow-hidden shadow-xl">
      {/* Target handle for incoming connections */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#4a4a4a" }}
      />
      <div className="flex flex-col">
        {/* Node header with icon and WhatsApp branding */}
        <div className="flex justify-between items-center w-full text-[10px] bg-[#AFDFD5] px-2 py-1">
          <div className="flex gap-2 items-center">
            {/* Message icon */}
            <AiOutlineMessage />
            <span className="font-medium">Send Message</span>
          </div>
          {/* WhatsApp logo in a circular background */}
          <div className="w-[13px] h-[13px] bg-white flex justify-center items-center rounded-full">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png"
              alt="WhatsApp Logo"
            />
          </div>
        </div>
        {/* Node content displaying the label */}
        <div className="bg-white px-2 py-1 text-[12px]">{labelText}</div>
      </div>
      {/* Source handle for outgoing connections */}
      <Handle
        type="source"
        id={id}
        position={Position.Right}
        style={{ background: "#4a4a4a" }}
      />
    </div>
  );
};

export default MessageNode;
