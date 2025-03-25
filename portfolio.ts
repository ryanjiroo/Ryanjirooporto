import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Ryan N",
  title: "Hi all, I'm Ryan",
  description:
    "Hey there! I'm a passionate Fullstack Developer skilled in Laravel, ReactJS, NextJS, NodeJS, and Java Spring Boot. I love building efficient, scalable web apps and enjoy working both independently and with a great team. Let’s create something amazing together!",
  resumeLink: "https://drive.google.com/file/d/1KeNm8CZvBHxpDnXc3NN6ROecqwpxWpVh/view?usp=sharing",
};

export const openSource = {
  githubUserName: "ryanjiroo",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:ryanayr2112@gmail.com",
  linkedin: "https://www.linkedin.com/in/xryanayrx/",
  github: "https://github.com/ryanjiroo",
  instagram: "https://www.instagram.com/ryannkopites",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("Front-end Developer – Crafting beautiful, responsive, and interactive web experiences using React.js, Next.js, Tailwind CSS, and Bootstrap."),
        emoji("Back-end Developer – Building powerful, scalable, and secure server-side applications with Node.js, Django & Django REST Framework, Java Spring Boot, and Laravel (PHP)."),
        emoji("Tools & DevOps – Optimizing development workflow, deployment, and cloud infrastructure with Docker, AWS, and GitHub."),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Cpp",
          iconifyTag: "logos:c-plusplus",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Flask",
          iconifyTag: "logos:flask",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "95",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "Machine Learning",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Dian Nuswantoro University (UDINUS)",
    subHeader: "Computer Science",
    duration: "September 2021 - Now",
    desc: "",
    grade: "3.64",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "SMA Negeri 15 Semarang",
    subHeader: "Science",
    duration: "August 2018 - May 2021",
    desc: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer Intern",
    company: "Telkom Indonesia",
    companyLogo: "/Ryanjirooporto/public/img/icons/common/telkom.png",
    date: "April 2024 - July 2024",
    desc: "During this internship, I revisited foundational concepts and gained practical experience with Laravel, Bootstrap, and MySQL. I actively contributed to a web development project with Laravel, enhancing my frontend and backend development skills. Additionally, I managed and optimized MySQL databases to ensure efficient data storage and retrieval. ",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "PT Winnicode Garuda Teknologi",
    companyLogo: "/Ryanjirooporto/public/img/icons/common/winnicode.jpg",
    date: "January 2025 - March 2025",
    desc: "During this Project-Based Internship, I learned about the role of a Full Stack Developer at PT. Winnicode Garuda Teknologi. I gained hands-on experience and practical knowledge in utilizing various tools and technologies such as ReactJS, Laravel, MySQL, Git, TailwindCSS and others commonly used by Full Stack Developers in developing web-based applications for employee attendance.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Machine Learning Cohort",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    companyLogo: "/Ryanjirooporto/public/img/icons/common/bangkit.jpg",
    date: "September 2024 - January 2025",
    desc: "Participated in an intensive Machine Learning program by Google, GoTo, and Traveloka. Gained hands-on experience in building, training, and deploying models using TensorFlow, along with data preprocessing and model optimization. Worked on a capstone project focused on applying ML to empower education, collaborating with peers and industry advisors. Besides that, I also learned about data analysis with Python and SQL Query. ",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Fallout Activation",
    desc: "Web based application for Fallout Activation to manage Indihome and Indibiz problem report. Build with Laravel, NodeJS, Bootstrap, and MySQL.",
    link: "https://drive.google.com/file/d/1yssJ7--o2PVehTW1KyJx5mYVT4PiC2T_/view?usp=sharing",
  },
  {
    name: "Bike Sharing Data Analysis",
    desc: "Analyzed bike-sharing data using Python and Jupyter Notebook. Visualized data using Matplotlib and Seaborn to identify trends and patterns.",
    github: "https://github.com/ryanjiroo/Analisis-Data",
    link: "https://ryanbikesharing.streamlit.app/",
  },
  {
    name: "Warung Convert",
    desc: "An Android application that allows users to convert mobile credit (pulsa) into e-wallet balance or cash quickly and securely. Build with Android Studio Java and Firebase.",
    github: "https://github.com/ryanjiroo/Warung_Convert",
  },
];

export const feedbacks: FeedbackType[] = [

];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Ryan Nugroho | Full Stack Developer",
  description: greetings.description,
  author: "Ryan Nugroho",
  image: "https://avatars.githubusercontent.com/u/92157016?s=96&v=4",
  url: "",
  keywords: [
    "Ryan Nugroho",
    "Ryan",
    "Nugro",
    "Ryan Nugroho Portfolio",
    "ryanjiroo",
    "ryanjiroo Portfolio",
    "ryanjiroo Developer",
    "ryanjiroo Full Stack Developer",
    "ryanjiroo Software Developer",
    "ryanjiroo Web Developer",
    "ryanjiroo Backend Developer",
    "ryanjiroo Frontend Developer",
    "ryanjiroo React Developer",
    "ryanjiroo Django Developer",
    "ryanjiroo Next.js Developer",
    "ryanjiroo Node.js Developer",
    "ryanjiroo Java Developer",
    "ryanjiroo Spring Boot Developer",
    "ryanjiroo Laravel Developer",  
  ],
};
