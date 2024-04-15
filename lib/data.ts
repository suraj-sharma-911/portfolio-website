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
      "Developed backend solutions for Hino Motors, including a portal with multiple features for fleet management. Led migration from RabbitMQ to Kafka, resulting in a significant reduction in data processing time. Improved data latency by 80% through strategic database optimizations.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2021 - Jun 2023",
  },
  {
    title: "Software Engineer at Incture",
    location: "Incture - Bengaluru, Karnataka, India",
    description:
      "Leading a team of six to address client concerns and enhance platform functionality. Skilled in full-stack development, with a focus on React.js and Node.js for Accounts Payable Automation. Also involved in mentoring colleagues and contributing to backend projects for clients.",
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
  "Azure Cloud",
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
  "Java",
] as const;
