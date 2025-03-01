import React, { useState } from 'react';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "FXDX v2 Dashboard",
      period: "Mar 2024 - Apr 2024",
      image: "/api/placeholder/400/320",
      bgColor: "bg-pink-300"
    },
    {
      id: 2,
      title: "Quinvest Dashboard",
      period: "Jun 2024 - Feb 2024", 
      image: "/api/placeholder/400/320",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      title: "Namma PG - UX&UI",
      period: "2023",
      image: "/api/placeholder/400/320",
      bgColor: "bg-pink-100"
    },
    {
      id: 4,
      title: "The Art 360 - UI",
      period: "December 2022",
      image: "/api/placeholder/400/320", 
      bgColor: "bg-blue-500"
    },
    {
      id: 5,
      title: "Quinvest Landing Page",
      period: "Jun 2024 - Feb 2024",
      image: "/api/placeholder/400/320",
      bgColor: "bg-green-500"
    },
    {
      id: 6,
      title: "FXDX v2 Landing Page",
      period: "December 2023",
      image: "/api/placeholder/400/320",
      bgColor: "bg-pink-300"
    },
    {
      id: 7,
      title: "Crypto Portfolio App",
      period: "May 2023 - July 2023",
      image: "/api/placeholder/400/320",
      bgColor: "bg-purple-500"
    },
    {
      id: 8,
      title: "Finance Dashboard",
      period: "August 2023",
      image: "/api/placeholder/400/320",
      bgColor: "bg-yellow-300"
    },
    {
      id: 9,
      title: "eCommerce UI Kit",
      period: "March 2023 - May 2023",
      image: "/api/placeholder/400/320",
      bgColor: "bg-red-400"
    }
  ];

  // Display first 6 projects initially, then all when "View More" is clicked
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  // Handle View More button click
  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-orange-500">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayedProjects.map((project) => (
          <div key={project.id} className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
            <div className={`${project.bgColor} p-4 rounded-lg`}>
              <div className="h-48 flex items-center justify-center mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="max-h-full max-w-full rounded"
                />
              </div>
              <div className="flex justify-between items-center p-2">
                <div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.period}</p>
                </div>
                <div>
                  <button className="p-2 bg-gray-800 bg-opacity-40 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {!showAll && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleViewMore}
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;