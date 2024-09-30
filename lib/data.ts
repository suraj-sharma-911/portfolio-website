import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";
import amazonCloneProject from "@/public/amazonCloneProject.png";
import portfolioImg from "@/public/portfolioImg.png";
import nextjsDashboardImg from "@/public/nextjsDashboardImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    location: "Coimbatore Institute of Technology",
    description:
      "Graduated with a focus on computer science and engineering, gaining foundational knowledge in software development, algorithms, and data structures. Participated in various projects and activities to enhance practical skills and understanding of industry concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2018 - Apr 2021",
  },
  {
    title: "Associate Software Engineer - Trainee at Incture",
    location: "Bengaluru, Karnataka, India",
    description:
      "Completed training in Azure Cloud fundamentals and Data Engineering. Acquired skills in Java, microservices, Spring Boot, Hibernate, and SQL. Collaborated on the development of a hospital bed search and booking web app, focusing on backend design and RESTful API development.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Oct 2021",
  },
  {
    title: "Associate Software Engineer at Incture",
    location: "Bengaluru, Karnataka, India",
    description:
      "As a Node.js Backend Developer, I engineered backend systems for 20,000 IoT-connected trucks, optimizing 2TB+ databases and integrating telemetry from 5+ Telematics Service Providers. I implemented geofencing for 500+ dealers, improving dealer interactions and truck servicing. \n I also led the migration from RabbitMQ to Kafka, processing 50M+ daily messages, reducing delays from two minutes to 60 milliseconds, and achieving 99% uptime. I enhanced cloud integration using Azure services, including Event Grid and Service Bus, for reliable event-based processing.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2021 - Jun 2023",
  },
  {
    title: "Software Engineer at Incture",
    location: "Incture - Bengaluru, Karnataka, India",
    description:
      "As a Solutioning and Backend Developer for NTUC FairPrice, I architected an automated system that generated PPTX price cards for 800+ users across 400 stores, utilizing SAP DMS. I developed over 50 OData APIs using SAP CAP and optimized the generation of 1,000+ slides in under two minutes. I led a team of five in template creation and ensured on-time delivery by closely aligning solutions with client goals. \n For Hino Motors, USA, I led production support, enhancing system scalability by onboarding Canadian users and achieving 95% SLA compliance. I also managed 100+ change requests and technical documentation.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "Built a functional e-commerce site mirroring Amazon.com. Used HTML, CSS, JavaScript, React.js/Nextjs and Tailwind CSS for responsive design. Features include product listings, user authentication, and checkout. Demonstrates front-end development skills.",
    tags: ["React", "HTML", "CSS", "Vercel"],
    imageUrl: portfolioImg,
    gitUrl: "https://github.com/suraj-sharma-911/portfolio-website",
    previewUrl: "",
  },
  {
    title: "Accounts Payable Dashboard",
    description:
      "Built a functional Accounts Payable site. Features include user authentication, Customer and Ivoice listings, Dashboard, search and CRUD operations. Demonstrates Full-stack development skills.",
    tags: ["React", "HTML", "CSS", "NextJs", "PostgresSQL"],
    imageUrl: nextjsDashboardImg,
    gitUrl: "https://github.com/suraj-sharma-911/nextjs-invoiceDashboard",
    previewUrl: "https://nextjs-dashboard-eight-mu-49.vercel.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "Built a functional e-commerce site mirroring Amazon.com. Used HTML, CSS, JavaScript, and React.js for responsive design. Features include product listings, user authentication, and checkout. Demonstrates front-end development skills.",
    tags: ["React", "HTML", "CSS", "Firebase"],
    imageUrl: amazonCloneProject,
    gitUrl: "https://github.com/suraj-sharma-911/amazon-clone",
    previewUrl: "https://clone-88d2f.web.app/",
  },
] as const;

export const skillsData = [
  "Node.js",
  "JavaScript",
  "Express",
  "SQL Server",
  "Sequelize",
  "Kafka",
  "Azure Functions",
  "Azure ServiceBus/ Queues",
  "Azure Blob storage",
  "RabbitMQ",
  "SAP BTP",
  "SAP CAP",
  "SAP HANA",
  "Redis",
  "PostgreSQL",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "Git",
  "Jira",
  "Azure DevOps",
] as const;
