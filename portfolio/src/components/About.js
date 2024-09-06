

import React from "react";


import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";


const description =
  "A motivated individual who is good at problem-solving and programming, with an emphasis on writing clean and maintainable code. Aspiring to make a career in software engineering with a focus on Full Stack-Developement";


const skillsList = [
  "NextJS",
  "ReactJS",
  "JavaScript",
  "Data Structure & Algorithms",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Tailwind CSS",
  "HTML , CSS",
  "GIT",
  "Prisma",
  "Redux"
];


const detailOrQuote =
  "Full-stack architect: Turning ideas into fully functional realities. Creating end-to-end solutions, one line of code at a time From server logic to UI magic—I've got it all covered!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
