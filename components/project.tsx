"use client";
import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {projectsData} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {IoCodeSlashOutline, IoEyeOutline} from "react-icons/io5";

type projectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitUrl,
  previewUrl,
}: projectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: ref, offset: ["0 1", "1.33 1"]});
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="
      group
      mb-3 
      sm:mb-8 
      last:mb-0"
      id="project"
    >
      <section
        className=" 
      bg-gray-100 
      max-w-[42rem] 
      border 
      border-black/5
      overflow-hidden 
      sm:pr-8 
      relative 
      sm:h-[25rem] 
      mb-3 
      sm:mb-8 
      last:mb-0
      sm:group-even:pl-8 
      hover:bg-gray-200 
      rounded-lg
      transition
      dark:bg-white/10
      dark:hover:bg-white/20
      dark:text-white"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex
      flex-col h-full sm:group-even:ml-[18rem] "
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase 
              tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            className="absolute hidden sm:block top-8 
        -right-40 w-[28.25rem] 
        rounded-t-lg 
        shadow-2xl 
        group-even:right-[initial] 
        group-even:-left-40
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2

        transition 
        group-hover:scale-[1.04]
        "
            src={imageUrl}
            alt={title}
            quality={95}
          />
        </div>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#686767] dark:bg-black/60 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-[0.15rem] relative rounded-full dark:border-[#ADB7BE] border-gray-400 hover:border-gray-950/40 dark:hover:border-gray-950/40 group/link"
              target="_blank"
            >
              <IoCodeSlashOutline className="h-10 w-10 dark:text-[#ADB7BE] text-gray-400 hover:text-gray-950/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-gray-950/40" />
            </Link>
          ) : null}
          {previewUrl ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-[0.15rem] relative rounded-full border-gray-400 hover:border-gray-950/40 dark:border-[#ADB7BE] dark:hover:border-gray-950/40 group/link"
            >
              <IoEyeOutline className="h-10 w-10 dark:text-[#ADB7BE] text-gray-400 hover:text-gray-950/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-gray-950/40" />
            </Link>
          ) : null}
        </div>
      </section>
    </motion.div>
  );
}
