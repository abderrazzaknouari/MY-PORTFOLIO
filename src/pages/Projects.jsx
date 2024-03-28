import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import MINI from "../assets/projects/Ministere-Project.png";
import IN_AS_APP from "../assets/projects/Intelligent-assistant.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MINI}
              isBlog={false}
              title="Website for the Ministry of Industry and Commerce "
              description="I participated in a team at AXELINK Maroc during one of my internships, where we developed a website for the ministry using React & .NET "
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IN_AS_APP}
              isBlog={false}
              title="Intelligent assistant app "
              description="I developed, as part of an innovation project, a virtual assistant using Spring AI capable of tasks such as scheduling tasks in Google Calendar, managing task lists in Google Tasks, sending emails via Gmail, or providing information based on user queries"
              ghLink=""
              demoLink=""
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects