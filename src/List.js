import SimpleIntervalIcon from "./res/CardImages/SimpleIntervalIcon.png";
import CrowdFlowIcon from "./res/CardImages/CrowdFlowIcon.jpg";
import PortfolioV1Icon from "./res/CardImages/ResumeV1Icon.PNG";
import PortfolioV2Icon from "./res/CardImages/ResumeV2Icon.PNG";
import HeavenlyAstrologyIcon from "./res/CardImages/HeavenlyAstrologyIcon.ico";
import snapChefIcon from "./res/CardImages/SnapChefIcon.png";
import JPMorganIcon from "./res/CardImages/JPMorganIcon.png";
import AndroidStudioIcon from "./res/TechStackImages/AndroidStudioLogo2.png";
import ReactIcon from "./res/TechStackImages/ReactIcon.png";
import ReactNativeIcon from "./res/TechStackImages/ReactNativeIcon.png";
import GoogleCloudIcon from "./res/TechStackImages/googleCloudIcon.png";
import JavaIcon from "./res/TechStackImages/JavaLogo.png";
export const projects = [
  {
    title: "Portfolio V1",
    description:
      "My first portfolio website. This allowed me to become more comfortable with JavaScript and React.",
    links: [{ label: "Github", link: "https://github.com/mdrewry/Portfolio" }],
    projectIcon: PortfolioV1Icon,
    techStack: [
      {
        path: ReactIcon,
        name: "React",
      },
    ],
  },
  {
    title: "Portfolio V2",
    description:
      "A second attempt at creating a portfolio website with a different design in mind. I was able to use the experience gained from the Heavenly Astrology/UF internship to create a flexible, mobile friendly website.",
    links: [
      { label: "Github", link: "https://github.com/mdrewry/Portfolio-V2" },
      { label: "This Website", link: "markdrewry.com" },
    ],
    projectIcon: PortfolioV2Icon,
    techStack: [
      {
        path: ReactIcon,
        name: "React",
      },
    ],
  },
  {
    title: "Crowd Flow",
    description:
      "Crowd Flow was a project made at Swamphacks VI, in 2019. I worked with 2 others on the frontend of the website while other group members created a Google Cloud SQL database. The purpose of the app is to improve a passenger's experience on a cruise by highlighting high traffic areas and times.",
    links: [
      { label: "Github", link: "https://github.com/manthi4/SwampHack2020" },
      {
        label: "DevPost",
        link: "https://devpost.com/software/crowdflow-u0jghn",
      },
    ],
    projectIcon: CrowdFlowIcon,
    techStack: [
      {
        path: ReactIcon,
        name: "React",
      },
      {
        path: GoogleCloudIcon,
        name: "Google Cloud",
      },
    ],
  },
  {
    title: "Simple Interval",
    description:
      "An interval timer inspired by my friend's workout routine. It was created using Android Studio with Java. This app is available on the Google Play Store.",
    links: [
      { label: "Github", link: "https://github.com/mdrewry/IntervalTimer" },
      {
        label: "Play Store",
        link: "https://play.google.com/store/apps/details?id=com.markdrewry.intervaltimer&hl=en_US",
      },
    ],
    projectIcon: SimpleIntervalIcon,
    techStack: [
      {
        path: AndroidStudioIcon,
        name: "Android Studio",
      },
      {
        path: JavaIcon,
        name: "Java",
      },
    ],
  },
  {
    title: "Snap Chef",
    description:
      "This app was a small summer project created with my friends. We wanted to get some experience using React Native and the Google Vision API. The app allows a user to select or capture an image of available ingredients and displays a filtered list of recipes.",
    links: [{ label: "Github", link: "https://github.com/mdrewry/SnapChef" }],
    projectIcon: snapChefIcon,
    techStack: [
      {
        path: ReactNativeIcon,
        name: "React Native",
      },
    ],
  },
];

export const experience = [
  {
    title: "JPMorgan Chase & Co.",
    description:
      "This summer I will be working as a SWE Intern for JPMorgan Chase & Co.",
    links: [],
    projectIcon: JPMorganIcon,
  },
  {
    title: "GameSetMatch",
    description:
      "I have spent the summer of 2020 developing a full stack webapp that is powered with React on the frontend and Google Firebase on the backend. I am the engineer responsible for the codebase and work with a great project manager and user experience designer. This internship is the largest project I have worked on to date and has given me an amazing opportunity to become more familiar with JavaScript, React, Firebase, and managing large codebases. The project is currently private on Github. For more information contact the product owner, Joel Relova (joelrelova@gmail.com).",
    links: [
      {
        label: "Project Owner",
        link: "https://www.linkedin.com/in/joel-relova-0b476a2/",
      },
    ],
    projectIcon: SimpleIntervalIcon,
  },
  {
    title: "Heavenly Writing",
    description:
      "As part of my Software Engineering class, CEN3031 at UF, the University partnered with local businesses in order to provide experience working on a full stack webapp. This app was created using the MERN stack, and I developed the React frontend with a team of 2 others. ",
    projectIcon: HeavenlyAstrologyIcon,
    links: [{ label: "Github", link: "https://github.com/6XAM/MVP" }],
  },
];
