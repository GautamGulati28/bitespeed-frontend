// Import icon components for different node types
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

// NodesData holds the configuration for each available node type in the sidebar
export const NodesData = [
  {
    id: 1, // Unique identifier for the node type
    title: "Message", // Display name for the node
    icon: AiOutlineMessage, // Icon component for the node
  },
  // To add more node types, simply append new objects to this array
  // Example:
  // {
  //   id: 2,
  //   title: "User",
  //   icon: AiOutlineUser,
  // },
];
