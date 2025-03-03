import React, { useState } from "react";
import restaurant from "../assets/restaurant.png";
import financial from "../assets/mobile.png";
import HealthCare from "../assets/Healthcare.png";
import counter from "../assets/counter.png";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Project data with images and links
  const projects = [
    {
      id: 1,
      title: "Restaurant Website - UI",
      image: restaurant,
      bgColor: "bg-pink-500/80",
      link: "https://navora-restaurant-website.netlify.app/",
    },
    {
      id: 2,
      title: "Financial Dashboard - UI&UX",
      image: financial,
      bgColor: "bg-green-500/80",
    },
    {
      id: 3,
      title: "HealthCare Website - UI",
      image: HealthCare,
      bgColor: "bg-pink-200/80",
      link: "https://skhealthcare.co.in/",
    },
    {
      id: 4,
      title: "Authentication & Counter - UI&UX",
      image: counter,
      bgColor: "bg-blue-500/80",
      link: "https://tiny-travesseiro-5d7f74.netlify.app/",
    },
    {
      id: 5,
      title: "Quinvest Landing Page",
      image: "https://placehold.co/400x320/00cc66/ffffff",
      bgColor: "bg-green-500/80",
    },
  ];

  // Show first 3 projects by default, show all when "View More" is clicked
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="experience-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className={`project-content ${project.bgColor}`}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-details">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="project-button">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </a>
                    ) : (
                      <button className="project-button opacity-50 cursor-not-allowed">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <button onClick={() => setShowAll(!showAll)} className="view-more-button">
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
