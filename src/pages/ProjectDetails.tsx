import React from "react";
import { useParams, Navigate } from "react-router-dom";
import RespawnNation from "../components/ProjectDetails/RespawnNation/RespawnNation";

const ProjectDetails: React.FC = () => {
  // Grab the slug from the URL (e.g., "respawn-nation")
  const { slug } = useParams<{ slug: string }>();

  // Hardcode the route to your specific component
  if (slug === "respawn-nation") {
    return <RespawnNation />;
  }

  // If you add more projects later, just add another if statement:
  // if (slug === "another-project") return <AnotherProject />;

  // If someone types a random URL, send them back to the home page
  return <Navigate to="/" replace />;
};

export default ProjectDetails;