import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Redux",
  //   Image: "/redux.png",
  //   width: 80,
  //   height: 80,
  // },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    Image: "/nextjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Stripe Payment",
  //   Image: "/stripe.webp",
  //   width: 80,
  //   height: 80,
  // },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  // {
  //   name: "Discord",
  //   src: "/instagram.svg",
  // },
  // {
  //   name: "Facebook",
  //   src: "/facebook.svg",
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/d3mijs_/",
    src: "/instagram.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/demian-juarez-saldaña-874822240/",
    src: "/linkedin.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/D3mm220",
    src: "/github.svg",
  },
];
export const Projects = [
  {
    title: "Demian Blog",
    text: "Web Blog Created with Sanity.io, Next & Typescript",
    src: "/DemianBlog.png",
    link: "https://blognext14-sanity.vercel.app",
  },
  {
    title: "PromptLand",
    text: "Social Red To Share Prompts Created with Next, NextAuth & Typescript",
    src: "/PromptLand.png",
    link: "https://prompt-land-ten.vercel.app",
  },
  {
    title: "ZNEST",
    text: "(I worked on this project during my internship at GM2). Flatform for contacting senior living comunnities",
    src: "/znest.png",
    link: "https://www.znest.com/",
  },
  {
    title: "Matrix themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Matrix.png",
    link: "",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
