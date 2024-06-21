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
    tesla,
    shopify,
    
    weatherApp,
    iphone,
   
    threejs,
    Portfolio,
    CryptoApp,
    Nikepage,
    Gitprofile
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend  Developer",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "Iphone-clone website",
      description:
        "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react 3Js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: iphone,
      source_code_link: "https://iphone-clone-two.vercel.app/",
    },
    {
      name: "React-Weather-App",
      description:
        "The React Weather App provides real-time weather updates for any location using an intuitive and responsive interface. It integrates with a weather API to display current conditions, forecasts, and detailed metrics like temperature, humidity, and wind speed. With dynamic weather icons and background themes, it enhances user engagement. The app's modular design ensures easy maintenance and scalability..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: weatherApp,
      source_code_link: "https://weather-app-theta-five-20.vercel.app/",
    },
    {
      name: "PersonalPortfolio(html-css)",
      description:
        "The Personal Portfolio showcases a curated selection of projects, skills, and experiences, reflecting my professional journey and creative abilities. It combines a modern, responsive design with interactive elements to engage visitors and highlight accomplishments effectively. Featuring a clean layout, it provides easy navigation through work samples, a resume, and contact information. ",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://tanmaydev56.github.io/portfolio-htmlcss-/",
    },
    {
      name: "React-Crypto-App",
      description:"CryptoApp_frontEnd is a sophisticated web app built with React, Tailwind CSS, TypeScript, and advanced technologies. It offers real-time cryptocurrency data, market analytics, and personalized portfolio management. The app's responsive design ensures seamless use across devices, with features for tracking prices, setting alerts, and accessing detailed reports."
      ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
          },
          {
            name: "typescript",
            color: "green-text-gradient",
            },
            {
              name: "tailwindcss",
              color: "pink-text-gradient",
              },
              ],
              image: CryptoApp,
              source_code_link: "https://crypto-app-front-end-topaz.vercel.app/",
    },
    {
      name: "React-NikePage",
      description:" React-NikePage is a sophisticated web app built with React, Tailwind CSS, TypeScript, and advanced technologies. It offers real-time cryptocurrency data, market analytics, and personalized portfolio management. The app's responsive design ensures seamless use across devices, with features for tracking prices, setting alerts, and accessing detailed reports."
      ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
          },
          {
            name: "typescript",
            color: "green-text-gradient",
            },
            {
              name: "tailwindcss",
              color: "pink-text-gradient",
              },
              ],
              image: Nikepage,
              source_code_link: "https://react-baisic-nike.vercel.app/",
    },
    {
      name: "Git_profile",
    
      
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
          },
          {
            name: "javaScript",
            color: "green-text-gradient",
            },
            {
              name: "css",
              color: "pink-text-gradient",
              },
              ],
              image: Gitprofile,
              source_code_link: "tanmaydev56.github.io/git_profile/",
    },

  ];
  
  export { services, technologies, experiences, projects };