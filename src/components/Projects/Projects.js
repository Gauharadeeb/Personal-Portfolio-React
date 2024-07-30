import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.webp";

import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.webp";
import bitsOfCode from "../../Assets/Projects/BitsOfCode.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Airbnb-Booking"
              description="This project enables users to sign up and sign in securely, with data stored in MongoDB to ensure privacy. Users can 
view detailed information about available properties, including names, locations, amenities, and pricing. They can 
also book properties for specific dates, with the booking details (property and dates) being stored securely. 
Additionally, the website is designed to be fully responsive and works well on all devices."
              ghLink="https://github.com/Gauharadeeb01/Airbnb-booking-website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Website"
              description="This portfolio website showcases My projects, resume, and technical skills. It is designed to be visually appealing, user-friendly, and fully responsive, ensuring it looks great on any device. The website is built using modern web technologies, including React.js, Javascript,HTML, and CSS3, with deployment on Vercel."
              ghLink="https://github.com/Gauharadeeb01/Portfolio-website-React"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Bank Management Sytem-ATM"
              description="Bank Management System allows users to create new accounts with unique IDs. It stores account details such as the 
account holder’s name, account type, and initial balance. Additionally, it implements features for updating account 
information and storing details of each transaction."
              ghLink="https://github.com/Gauharadeeb01/Bank-Managment-System-ATM"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cab-Booking"
              description="Cab Booking System is a user-Friendly Website Contain features like User Registration and Authentication, Ride 
booking, Fare calculation. It facilitates the booking of a cab within the university premises, allowing individuals to 
arrange transportation conveniently from their residence."
              ghLink="https://github.com/Gauharadeeb01/INT213-Cab-Booking-System"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Instagram-Clone"
              description="This Instagram clone is a full-stack web application built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. The application replicates core features of Instagram, allowing users to share photos, follow other users, like and comment on posts, and manage their profiles. It is designed to provide a seamless and engaging user experience, mirroring the functionality and aesthetic of the popular social media platform."
              ghLink="https://github.com/Gauharadeeb01/Insta-clone"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
