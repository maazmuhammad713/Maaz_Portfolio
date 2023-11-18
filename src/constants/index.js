import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  knowledgestreams,
  aurlab,
  tesla,
  shopify,
  sufar,
  movieland,
  carrent,
  jobit,
  tripguide,
  threejs,
  todo,
  ecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ReactJS Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Photographer :)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PostgreSQL",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Trainee",
    company_name: "Knowledge Streams",
    icon: knowledgestreams,
    iconBg: "#005EFB",
    date: "September 2023 - December 2023",
    points: [
      "HTML, CSS, and JS and crafted responsive websites for responsive experiences.",
      "Gained knowledge of Git for efficient version control, and Implemented RESTful APIs using Express.js and Node.js.",
    ],
  },
  {
    title: "Front-End Intern",
    company_name: "AUR-LAB",
    icon: aurlab,
    iconBg: "#061721",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm a Full Stack Web Developer. I have created many web projects.I have a 1 Year Experience in this field",
    name: "Adrees Musa",
    designation: "Associate Software Engineer",
    company: "Focusteck",
  },
  {
    testimonial:
      "I'm a Full Stack Web Developer.I have solved over 300 leetcode problems",
    name: "Numan Anees",
    designation: "Associate Software Engineer",
    company: "Devsinc",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I am a Professional Flutter Developer Studying CS From Behria University. I love to create Android/IOS Apps using Futter!",
    name: "Moiz Minhas",
    designation: "Flutter Intern",
    company: "Assort Tech",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SUFAR",
    description:
      "A travel guide & booking website using MERN. The website has a chatbot powered by the GPT Turbo API, which can act as a virtual tour guide.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "Google Maps",
        color: "white-text-gradient",
      },
      {
        name: "ReactStrap",
        color: "pink-text-gradient",
      },
    ],
    image: sufar,
    source_code_link: "https://github.com/maazmuhammad713/SUFAR",
  },
  {
    name: "MovieLand",
    description:
      "Developed a website using Html, CSS, Javascript, where you have access to all the movies.Integrated OMDb API which gives us access to data about movies.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML-5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "OMDBapi",
        color: "white-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
    ],
    image: movieland,
    source_code_link: "https://github.com/maazmuhammad713/Movie_Land",
  },
  {
    name: "Note-Taking App",
    description:
      "Designed and implemented a task management application using ReactJS to enhance performance. The application features robust search functionality and supports CRUD operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "hooks",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/maazmuhammad713/Note-Taking-App",
  },
  {
    name: "Learning Management System",
    description:
      "Individually developed a student portal backend using Express JS and PostgreSQL, highlighting my expertise in creating server-side solutions. The project demonstrates my proficiency in backend development",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "white-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
      {
        name: "yup",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/maazmuhammad713/LMS-Sequelize",
  },
  {
    name: "E-Commerce Store",
    description:
      "Developed the backend infrastructure for an e-commerce platform using Express JS and PostgreSQL. This project reflects my capability in developing server-side solutions within the dynamic context of e-commerce functionality.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "sequelize",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "white-text-gradient",
      },
      {
        name: "jwt",
        color: "blue-text-gradient",
      },
      {
        name: "yup",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/maazmuhammad713/E-Commerce-ExpressJS",
  },
];

export { services, technologies, experiences, testimonials, projects };
