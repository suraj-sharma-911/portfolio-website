"use client";
import {motion} from "framer-motion";
import React, {useEffect} from "react";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 
      max-w-[45rem] 
      text-center 
      leading-8
      sm:mb-40
      scroll-mt-28"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        A <span className="font-medium">Software Engineer</span> from Bengaluru,
        India, with a background in{" "}
        <span className="font-medium">
          full-stack development, cloud architecture, and leading projects
        </span>{" "}
        over two years. I have deep knowledge in technologies such as{" "}
        <span className="font-medium italic">
          JavaScript, TypeScript, React.js, Node.js, Azure, SQL, SAP CAP, SAP BTP and AWS.
        </span>{" "}
        My experience in the tech field has focused on solving complex problems,
        improving system performance, and successfully completing projects from
        start to finish. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Software
        Engineer.
      </p>
      <p className="">
        During my time at <span className="font-medium">Incture</span>, I{" "}
        <span className="underline">led</span> teams, developed technological
        solutions, and contributed to projects that met and exceeded client
        expectations. I played a key role in a team that resolved{" "}
        <span className="font-medium">95% of client issues</span> and was
        instrumental in project enhancements that led to significant business
        outcomes. I continually seek out new technologies and approaches to
        enhance my skills and push the boundaries of what's possible in software
        engineering.
      </p>
    </motion.section>
  );
}
