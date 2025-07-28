import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

/**
 * Project Gallery section styled with Bootstrap 5.
 * Displays projects in a responsive grid of cards.
 */
function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  // Load projects from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Project Gallery</h2>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;