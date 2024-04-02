"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";
import {skillsData} from "@/lib/data";
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills() {
  const {ref} = useSectionInView("Skills", 1);
  return (
    <section id="skills" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white border 
          border-black/[0.1] px-5 py-3 rounded-xl dark:bg-white/10
          dark:text-white/70"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
