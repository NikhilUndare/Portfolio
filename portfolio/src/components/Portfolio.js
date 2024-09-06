

import React from "react";


import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "Event Proposal",
    description:
      "Built the backend using NodeJS to serve the APIs. Worked on the database schema design for MongoDB. Developed Header, Footer, User Post and Upload Form components using React. Implemented frontend routes using react-router. ",
    url: " https://event-proposal-react-2023.onrender.com ",
  },
  {
    title: "E-Commerce-Store",
    description:
      "Developed the primary framework for E-Commerce Dashboard and CMS using NextJs. Used Tailwind CSS for building quality components and managing styles. mplemented Clerk Provider for authentication. Utilized API Routes for setting up backend logic, error handling and authentication. ",
    url: " https://ecommerce-store-jade-chi.vercel.app  ",
  },
  {
    title: "My Resume Site",
    description:
      "Explore my complete Projects and skills from my resume...",
    url: "https://nikhilundare.github.io/OnlineResume/",
  },
  {
    title: "Some other info about Me",
    description:
      "",
    url: "#",
  },
];



const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
