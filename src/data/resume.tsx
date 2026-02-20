import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Clark Wayne Abutal",
  initials: "CW",
  url: "https://clarkwayne.vercel.app",
  location: "Santo Tomas, Batangas, Philippines",
  locationLink:
    "https://www.google.com/maps/@14.0996371,121.1595836,15z?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Fullstack Web Developer & Competitive Programmer. I love building things and solving problems.",
  summary:
    "I&apos;ve gained hands-on experience with technologies like **Next.js**, **Laravel**, **Flask**, **Ruby on Rails**, **Python**, **Typescript**, and have worked on a range of freelance projects and enterprise-grade applications from e-commerce to AI-powered legal applications. I&apos;m passionate about coding and I enjoy learning new tools to keep growing as a developer. Outside of work, I&apos;m always up for new challenges, whether it&apos;s a hackathon, a side project, or just exploring ways technology can solve real-world problems.",
  avatarUrl: "/me.JPG",
  skills: [
    "React",
    "Next.js",
    "PHP",
    "Laravel",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MySQL",
    "Docker",
    "Java",
    "C++",
    "Linux",
    "TensorFlow",
    "PyTorch",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@clarkwayne023",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "clark.wayne023@gmail.com",
    tel: "+639177212114",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CHlNlTO",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/clark-wayne-abutal-1005001aa/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/clrkwayne",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@clarkwayne2102",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://drive.google.com/file/d/1dVczF329yV-eRZ32r4NwI0w_VhNimkFj/view?usp=sharing",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PatentMaker Software GmbH",
      href: "https://patentmaker.eu/",
      badges: ["Germany"],
      location: "Remote",
      title: "Fullstack Web Developer - Freelance",
      logoUrl: "/patentmaker.png",
      start: "May 2025",
      end: "Present",
      description:
        "Engineering AI-orchestrated legal automation tools for patent drafting and prosecution. Building scalable backend services in TypeScript and Python, managing complex document generation and analysis, and structured data workflows for patent professionals across Europe.",
    },
    {
      company: "Leadfusion 360",
      href: "https://leadfusion360.com.au/",
      badges: ["Australia"],
      location: "Remote",
      title: "Fullstack Web Developer - Freelance",
      logoUrl: "/leadfusion.png",
      start: "March 2025",
      end: "April 2025",
      description:
        "Built AI-powered web applications with Svelte and Hono.js, transforming digital visibility for 50,000+ dental clinics across Australia. Optimizing performance, user experience, and automation to drive engagement and growth.",
    },
    {
      company: "Digiteer Software Studio",
      href: "https://www.digiteer.digital/",
      badges: [],
      location: "Onsite",
      title: "Fullstack Web Developer - Internship",
      logoUrl: "/digiteer.webp",
      start: "February 2025",
      end: "March 2025",
      description:
        "Spearheaded backend development for four major web projects, guiding the team in building scalable Ruby on Rails modules. Drove seamless GitHub collaboration, ensuring rapid integration in a fast-paced environment",
    },
    {
      company: "Nomad Telecom",
      href: "https://nomadtelecom.co/",
      badges: ["USA"],
      location: "Remote",
      title: "Backend Web Developer - Freelance",
      logoUrl: "/nomad.jpg",
      start: "December 2024",
      end: "January 2025",
      description:
        "Built an automated eSIM Fulfillment System that integrates Shopify, esim-go API, Supabase, and Gmail SMTP to automate order processing, QR code generation, and email delivery. Utilized webhooks, API orchestration, and cloud database management to streamline eSIM transactions, improving efficiency and automating customer communications for global eSIM sales.",
    },
    {
      company: "Italian Maritime Academy - Assessment and Training Center Inc.",
      href: "http://www.imaphilsinc.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer - Freelance",
      logoUrl: "/ima.jpg",
      start: "October 2024",
      end: "December 2024",
      description:
        "Developed a comprehensive Full-Stack Web Application for a seafarer assessment and training center, creating a portal that seamlessly redirects users to specialized applications like assessment tests, admin reports, and management dashboards. Built a robust Admin Panel and an interactive Widget Dashboard, empowering admins to efficiently manage and navigate links, enhancing operational efficiency and improving the user experience for both seafarers and administrators.",
    },
    {
      company: "City Chapels",
      href: "https://citychapels.ph/",
      badges: [],
      location: "Remote",
      title: "Backend Web Developer - Freelance",
      logoUrl: "/chapels.png",
      start: "October 2024",
      end: "November 2024",
      description:
        "Built a robust Node.js backend system that integrates with the Facebook API, enabling seamless retrieval of real-time data from the company's Facebook page. This solution streamlined data management, improved user engagement insights, and empowered the team with actionable analytics, significantly enhancing the company's digital presence and decision-making process.",
    },
    {
      company: "First Balfour, Inc.",
      href: "https://firstbalfour.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer - Freelance",
      logoUrl: "/balfour.png",
      start: "May 2024",
      end: "October 2024",
      description:
        "Developed multiple enterprise solutions including an Employee Directory System, Asset Management System, and Database API using Next.js, PHP, Laravel, and MySQL, enhancing IT infrastructure and developer productivity by implementing robust CRUD functionalities and secure data access mechanisms.",
    },
    {
      company: "FAITH Colleges",
      badges: [],
      href: "https://firstasia.edu.ph",
      location: "Tanauan City, Batangas",
      title: "Software Engineer & Machine Learning Engineer Intern",
      logoUrl: "/faith.png",
      start: "June 2024",
      end: "September 2024",
      description:
        "Developed a React-Flask web app for real-time leaf identification and model performance tracking, achieving 99.9% accuracy by training a YOLOv8 model with enhanced pre-processing using NumPy, Scikit-learn, and TensorFlow, integrating Grounding-Dino/Tiny for object detection to filter non-leaf images, and streamlining deployment with GitHub Actions, reducing Linux server deployment times by 80%.",
    },
  ],
  education: [
    {
      school: "First Asia Institute of Technology and Humanities",
      href: "https://firstasia.edu.ph",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/faith.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Bravehearts",
      href: "https://bravehearts.vercel.app",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Built a campus-exclusive website for my school; streamlining announcements and events, integrated social media and story-sharing to boost student engagement and connection.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Supabase",
        "Shadcn UI",
        "React Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://bravehearts.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CHlNlTO/bravehearts",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://uiffmgyykbhewphigjsf.supabase.co/storage/v1/object/public/videos/bravehearts.mov",
    },
    {
      title: "IMA Portal",
      href: "http://imacloudapplications.southeastasia.cloudapp.azure.com/",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "Developed an admin panel and client dashboard for IMA Cloud Applications, a leading provider of seafarer and vessel management solutions.",
      technologies: [
        "PHP",
        "Laravel",
        "Filament",
        "MySQL",
        "GridStackJS",
        "TailwindCSS",
        "Livewire",
      ],
      links: [
        {
          type: "Website",
          href: "http://imacloudapplications.southeastasia.cloudapp.azure.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CHlNlTO/ima-portal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://uiffmgyykbhewphigjsf.supabase.co/storage/v1/object/public/videos/ima_portal.mov",
    },
    {
      title: "Snapfolia",
      href: "https://snapfolia.vercel.app/",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Trained a deep-learning model to accurately identify leaf images, enabling quick and precise plant classification for researchers, students, and enthusiasts.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Python",
        "Flask",
        "TensorFlow",
        "YOLOv8",
        "Scikit-learn",
        "NumPy",
      ],
      links: [
        {
          type: "Website",
          href: "https://leaflet-web-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CHlNlTO/leaflet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://uiffmgyykbhewphigjsf.supabase.co/storage/v1/object/public/videos/leaflet.mov",
    },
    {
      title: "Synergreens",
      href: "https://synergreens-by-deo-abutal.vercel.app/",
      dates: "August 2024",
      active: true,
      description:
        "Developed a sleek e-commerce website for a food supplement distribution business, showcasing products with dynamic Framer Motion animations and modern HyperUI components for an engaging user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "Shadcn UI",
        "Tailwind UI",
        "Magic UI",
        "HyperUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://synergreens-by-deo-abutal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/CHlNlTO/synergreens-by-deo-abutal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://uiffmgyykbhewphigjsf.supabase.co/storage/v1/object/public/videos/synergreens.mov",
    },
  ],
  hackathons: [
    {
      title: "CodeChum National Programming Challenge 2024",
      dates: "Novemeber 13th, 20th, 27th, 2024",
      location: "Remote",
      description:
        "Teams of 10 exemplary students from 60+ universities in the Philippines compete in a series of programming challenges.",
      image: "/codechum.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
    {
      title: "KMC Solutions Hackathon 2024",
      dates: "October 24th- 25th, 2024",
      location: "Makati, Philippines",
      description:
        "Developed a web application bridging the gap between talent and opportunity in job hunting.",
      image: "/kmc.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
    {
      title: "DICT HackForGov 2024",
      dates: "June 24th 2024",
      location: "Makati, Philippines",
      description:
        "Competed in a cybersecurity challenge, excelling in message decryption, website hacking, and security problem-solving, ranking among the top performers and showcasing my expertise in ethical hacking and cybersecurity.",
      image: "/hackforgov.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
    {
      title: "ISITE National Skills Competition 2024",
      dates: "April 12th 2024",
      location: "Calabarzon, Philippines",
      description:
        "Competed in a national programming competition, showcasing expertise in data structures and algorithms against top university students nationwide, demonstrating problem-solving prowess and computational thinking skills.",
      image: "/isite.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
    {
      title: "ACM ICPC 2024",
      dates: "October 22nd-24th 2023",
      location: "Taoyuan, Taiwan",
      description:
        "Competed in the ACM ICPC 2023, battling against top universities from Southeast Asia, Taiwan, Singapore, Japan, and Malaysia in a one-day, high-pressure contest focused on data structures and algorithms, testing my problem-solving and coding skills at the highest level.",
      image: "/icpc.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
    {
      title: "DICT Philippine Startup Challenge 2023",
      dates: "October 12th 2023",
      location: "Laguna, Philippines",
      description:
        "Joined a competition where I developed a mobile app that provides real-time gas price information, delivering immediate updates to users and offering a seamless, user-friendly experience for tracking fuel costs.",
      image: "/dict.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg",
      links: [],
    },
    {
      title: "ISITE National Skills Competition 2023",
      dates: "May 12th 2023",
      location: "Calabarzon, Philippines",
      description:
        "Competed in a national programming competition where I placed 2nd Runner Up in C++ Category, showcasing expertise in data structures and algorithms against top university students nationwide.",
      image: "/isite.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg",
      links: [],
    },
  ],
} as const;
