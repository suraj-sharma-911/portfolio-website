"use client";
import {useSectionInView} from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";
import {useFormStatus} from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const {ref, inView} = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mt-28 mb-20 w-[min(100%,38rem)]
    text-center"
      initial={{opacity: 0}}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:surajrs911@gmail.com">
          surajrs911@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-6 flex flex-col dark:text-black"
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          required
          maxLength={500}
          name="senderEmail"
          placeholder="Your email"
          className="h-14 px-4 mb-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:transition-all dark:outline-none"
        />
        <textarea
          placeholder="Your message"
          required
          name="message"
          maxLength={5000}
          className="h-52 mb-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
