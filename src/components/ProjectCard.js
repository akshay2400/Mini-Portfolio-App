import React from 'react';

/**
 * Card component for displaying individual project details using Bootstrap.
 */
function ProjectCard({ title, image, description, link }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;