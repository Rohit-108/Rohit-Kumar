import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";




export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },

  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "C++",
  "Python",
  "JavaScript (ES+)",
  "React Js",
  "Redux Toolkit",
  "Tailwind",
  "material UI",
  "API Handling",
];

export const social_links = [
  {
    url: "https://github.com/Rohit-108/",
    icon: <TbBrandGithub className="w-[22px] h-[22px] " />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/rohit-sharma108/",
    icon: <SlSocialLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  },
  {
    url: "https://www.instagram.com/myself__rohitsharma/",
    icon: <SlSocialInstagram className="w-[22px] h-[22px]" />,
    name: "Instagram",
  },
  {
    url: "https://x.com/ROHITSH5587",
    icon: <SlSocialTwitter className="w-[22px] h-[22px]" />,
    name: "Twitter",
  },
  {
    url: "https://www.facebook.com/profile.php?id=100027664215567",
    icon: <SlSocialFacebook className="w-[22px] h-[22px]" />,
    name: "Facebook",
  },
];


export const educationData = [
  {
    id: 1,
    level: 'Bachelor of Technology',
    college: 'ABES Engineering College Ghaziabad(ABESEC)',
    location: 'Ghaziabad, IND',
    passingYear: '2024',
    url: 'https://abes.ac.in/',
    description: `<ul>
    <li>Branch - Computer Science & Enginearing</li>
    <li>CGPA - 7.0</li>
<li> University - Dr. A.P.J.Abdul Kalam Technical University(AKTU), Lukhnow</li>
<li>Medium - English</li>    </ul>`,
  },
  {
    id: 2,
    level: 'Diploma in Computer Science',
    college: 'Goverment(Rajkiya) Polytechnic College, Aligarh',
    location: 'Aligarh, IND',
    passingYear: '2021',
    url: 'https://mmitaligarh.in/',
    description: `<ul>
      <li>Percentage - 71.91%</li>
    <li>Branch - Computer Science & Enginearing</li>
<li> Board - Board of Technical Education Uttar Pradesh Lukhnow</li>
<li>Medium - English</li>
  
  </ul>`,
  },
  {
    id: 3,
    level: 'Senior Secondary Education',
    college: 'S B P Inter College, Bahlolpur Bulandshahr',
    location: 'Bulandshahr, IND',
    passingYear: '2018',
    url: 'https://mmitaligarh.in/',
    description: `<ul>
    <li>Percentage - 65.51%</li>
    <li>Board - Board of High School and Intermediate Education Uttar Pradesh, Lukhnow</li>
    <li>Stream - Mathematics & Science</li>
    <li>Medium - Hindi</li>
  </ul>`,
  },
];




