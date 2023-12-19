import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import maaz from "../assets/maazt.png";
import { Helmet } from "react-helmet";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Helmet>
        <title>Maaz Ghazanfar - Software Developer</title>
        <meta
          name="description"
          content="Learn about Maaz Ghazanfar, a software developer with expertise in JavaScript and the MERN Stack."
        />
      </Helmet>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      <motion.div variants={textVariant()}>
        <div className="flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a software developer with experience in JavaScript, and
            expertise in MERN Stack. I'm a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's connect together on{" "}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/maaz-ghazanfar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            to bring your ideas to life!
          </motion.p>
          <img
            src={maaz}
            alt="Maaz Ghazanfar"
            className="ml-4 w-1/6 h-auto object-contain"
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
