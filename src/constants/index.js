import { uog, rbc, rogers, dayforce, munichre } from "../assets/images";

import { R } from "../assets/icons";

import {
    contact,
    css,
    express,
    github,
    javascript,
    html,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    redux,
    sass,
    tailwindcss,
    typescript,
    react,
    git,
    calculator,
    shanti,
    molecule,
    puzzle,
    game,
    goal,
    person,
    graph,
    sort,
    stocks,
    statistics,
    calendar
} from "../assets/icons";

export const skillCategories = [
    {
        name: "Languages",
        skills: [
            "Python",
            "Java",
            "C",
            "SQL",
            "Go",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "C#",
        ],
    },
    {
        name: "Developer Tools",
        skills: [
            "Git",
            "Claude Code",
            "Datadog",
            "Grafana",
            "Prometheus",
            "SonarQube",
            "Jira",
            "VS Code",
        ],
    },
    {
        name: "Frameworks",
        skills: [
            "React",
            "Node.js",
            "Django",
            "Spring Boot",
            "pytest",
            "Playwright",
            "JUnit",
            "Jest",
            "Selenium",
            "Streamlit",
            "Tailwind",
        ],
    },
    {
        name: "Cloud & DevOps",
        skills: [
            "Azure",
            "Kubernetes",
            "Docker",
            "Terraform",
            "Helm",
            "Argo CD",
            "Azure DevOps",
            "Jenkins",
            "CI/CD",
            "Linux",
        ],
    },
    {
        name: "Libraries",
        skills: [
            "pandas",
            "NumPy",
            "scikit-learn",
            "PyTorch",
            "TensorFlow",
            "OpenCV",
            "LangChain",
            "seaborn",
            "jQuery",
            "Three.js",
        ],
    },
];

export const skills1 = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: R,
        name: "R",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Munich Re",
        icon: munichre,
        iconBg: "#FFFFFF",
        date: "June 2026 - Present",
        points: [
            "Refactored production Python backend workflows for an AI-powered insurance underwriting platform, optimizing API integrations and order synchronization for 2 insurance clients to enable daily updates instead of 90-day polling cycles.",
            "Reduced backend API request latency by 23% through persistent, client-specific HTTPX connection pooling, eliminating redundant TCP/TLS handshakes and validating improvements through load testing.",
            "Built an LLM-powered code review workflow using Claude Code, leveraging context engineering and Git diff analysis to automate code validation and generate severity-ranked findings. Shared the workflow across the engineering department.",
            "Optimized Azure Kubernetes infrastructure using Terraform and Helm, tuning Argo CD resources and scaling system nodes to accelerate database migrations ahead of a production release with a 1-hour downtime SLA.",
            "Developed automated end-to-end regression tests for an AI-powered underwriting platform using Python, pytest, and Playwright, validating frontend-backend API data integrity and identifying 15 defects tracked in Jira."
        ],
    },
    {
        title: "Undergraduate Machine Learning Researcher",
        company_name: "University of Guelph",
        icon: uog,
        iconBg: "#52575D",
        date: "May 2025 - June 2026",
        points: [
            "Developed 2 computer vision tools for veterinary capsule endoscopy, automating gastrointestinal region classification and filtering non-diagnostic footage to reduce clinical review time by 30 minutes per case.",
            "Built large-scale data pipelines to process 200GB+ of raw endoscopy video into model-ready datasets (frame extraction, patching, labeling, normalization, feature engineering) using OpenCV, NumPy, pandas, and scikit-learn.",
            "Trained and benchmarked Random Forest, XGBoost, and CNN models using PyTorch and TensorFlow on 1M+ endoscopy frames, evaluating classification performance through cross-validation, precision, and recall."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Munich Re",
        icon: munichre,
        iconBg: "#FFFFFF",
        date: "May 2025 - August 2025",
        points: [
            "Designed and deployed Kubernetes RBAC policies using Terraform, Helm and Argo CD via Azure DevOps, enforcing least-privilege access across 10 clusters and 45 namespaces supporting 7 teams in multi-tenant environments.",
            "Implemented Cilium ingress and egress network policies across Kubernetes clusters to secure Datadog monitoring traffic, enforce least-privilege connectivity, and troubleshoot denied flows using Hubble.",
            "Drove the platform team's Agile-to-Kanban transition, optimizing Azure DevOps boards, backlog prioritization, and workflow management to improve cross-functional collaboration, project visibility, and delivery predictability."
        ],
    },
    {
        title: "Site Reliability Engineer Intern",
        company_name: "Dayforce",
        icon: dayforce,
        iconBg: "#AFEEEE",
        date: "September 2024 - April 2025",
        points: [
            "Migrated 4 pages of a legacy application from HTML, CSS, and C# to the SRE Watchtower platform using TypeScript, Django ORM (Python), and MySQL, increasing operational efficiency by 11%.",
            "Developed 2 custom dashboards in Azure Data Studio to visualize key performance metrics, saving 45 hours annually by reducing manual monitoring efforts.",
            "Conducted a feasibility study on optimizing Rundeck’s node rebalancing to prevent overloads and reduce PagerDuty alerts by 30%.",
        ],
    },
    {
        title: "Student Ambassdor",
        company_name: "Royal Bank of Canada (RBC)",
        icon: rbc,
        iconBg: "#A7C7E7",
        date: "May 2024 - Present",
        points: [
            "Represented RBC on campus by promoting internship opportunities, organizing recruitment events, and sharing upcoming initiatives with the University of Guelph’s computer science co-op coordinators.",
            "Connected with and mentored incoming and current interns, facilitating professional development sessions and linking students with RBC’s Early Talent team.",
            "Supported RBC’s early talent outreach by building relationships with students, fostering interest in technology internships, and strengthening RBC’s presence within the campus community.",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Royal Bank of Canada (RBC)",
        icon: rbc,
        iconBg: "#A7C7E7",
        date: "May 2024 - September 2024",
        points: [
            "Designed a Grafana dashboard displaying 150+ data center metrics by leveraging APIs, Python, and Prometheus.",
            "Deployed a Grafana dashboard in production using Helios and Docker, optimizing data visualization and visibility for 200 daily users.",
            "Developed 20 unit, smoke, and regression tests, utilizing JUnit and Jenkins, to achieve a 90% pass rate in the CI/CD pipeline.",
        ],
    },
    {
        title: "Teaching Assistant for Software Design 2",
        company_name: "University of Guelph",
        icon: uog,
        iconBg: "#52575D",
        date: "January 2024 - May 2024",
        points: [
            "Taught software principles to over 100 students, adapting instructional methods to improve engagement and understanding.",
            "Led lab sessions focused on data collection and visualization using Python, directly contributing to a 15% increase in class performance.",
            "Developed Python autograders to automate grading for labs and quizzes, reducing grading time by 75%.",
            "Worked with faculty to update and refine course materials based on student feedback, ensuring instructional clarity and relevance.",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Royal Bank of Canada (RBC)",
        icon: rbc,
        iconBg: "#A7C7E7",
        date: "May 2023 - January 2024",
        points: [
            "Developed 3 command modules for Slack and Cisco Webex chatbots using Python in an Agile development process, seamlessly integrating enterprise network tools.",
            "Developed a LLM team documentation chatbot utilizing vector database, LangChain, and GPT, significantly improving communication efficiency and facilitating seamless knowledge sharing across a vast repository of over 3000 pages.",
            "Utilized React.js to create dynamic front-end components for visualizing network graphs, enhancing network monitoring and troubleshooting.",
            "Delivered a comprehensive presentation of my achievements and contributions to top executives in T&O during the summer term and to the Director of TI in the fall, highlighting key accomplishments and insights acquired throughout the experience.",
            "Selected as RBC’s Student Ambassador for the University of Guelph, collaborating with the Early Talent team to represent RBC on campus, mentor interns, and support recruitment and outreach initiatives."
        ],
    },
    {
        title: "Research Assistant",
        company_name: "University of Guelph",
        icon: uog,
        iconBg: "#52575D",
        date: "May 2022 - September 2022",
        points: [
            "Supported Sports Management by leading technology research, and advising clients like Paralympics Canada on current and future best practices.",
            "Developed a Python program, using OpenCV and Pytesseract, to parse 1000+ PNGs of weekly sports ratings to CSV files.",
            "Handled UI/UX website design of 10+ webpages with custom graphics using Figma, resulting in high client satisfaction.",
            "Built a website using HTML, CSS, Bootstrap, and JavaScript to display and filter academic research for a client.",
        ],
    },
    {
        title: "Computer Science Program Director",
        company_name: "Rogers Communications",
        icon: rogers,
        iconBg: "#FAA0A0",
        date: "February 2022 - May 2022",
        points: [
            "Developed and taught an 8-week afterschool computer science program to 100 at-risk youth between 6 to 12 years old.",
            "Mentored 200 students at Rogers' annual afterschool program hackathon.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: shanti,
        theme: 'btn-back-red',
        name: 'TikTrend',
        tools: 'Python, scikit-learn, PyTorch, pandas, SQLite, Git',
        description: 'Developed a machine learning model with Python, PyTorch, and scikit-learn to predict TikTok trends, leveraging engagement data and applying feature engineering to extract trend-predictive metrics.',
        link: 'https://github.com/p-sandher/TikTrend',
    },
    {
        iconUrl: molecule,
        theme: 'btn-back-black',
        name: 'Molecule Visualizer',
        tools: 'C, Python, jQuery, MySQL, JavaScript, HTML, CSS',
        description: 'Developed a comprehensive full-stack molecule visualizer that enables users to interactively view complex molecular structures and download them as SVG files for enhanced graphical representation',
        link: 'https://github.com/p-sandher/Molecule-Visualizer',
    },
    {
        iconUrl: puzzle,
        theme: 'btn-back-green',
        name: 'Guessmate Mobile Game',
        tools: 'React Native, React.js, Expo',
        description: "Developed a mobile game that intelligently predicts a user's number through a sequence of intuitive questions, enhancing engagement through interactive guesswork." ,
        link: 'https://github.com/p-sandher/GuessMate-Game',
    },
    {
        iconUrl: game,
        theme: 'btn-back-pink',
        name: 'Grid Games',
        tools: 'Java, Junit, Gradle',
        description: "Designed and implemented interactive Tic-Tac-Toe and Number Scrabble games featuring intuitive GUIs, utilizing object-oriented programming principles to ensure scalability and maintainability.",
        link: 'https://github.com/p-sandher/Tictactoe-Game-Menu',
    },
    {
        iconUrl: goal,
        theme: 'btn-back-blue',
        name: 'Goal Tracker',
        tools: 'React Native, React.js, Expo',
        description: 'Developed a mobile application designed for goal tracking, featuring user-friendly interfaces and personalized goal management tools to improve user productivity and focus.',
        link: 'https://github.com/p-sandher/Goal-Tracking-App',
    },
    {
        iconUrl: calendar,
        theme: 'btn-back-black',
        name: 'AdaCalendar Creator',
        tools: 'Ada',
        description: 'Developed a dynamic annual calendar generator using Ada, capable of creating visually appealing and customizable calendars for any given year.',
        link: 'https://github.com/p-sandher/Ada-Calendar',
    },
    {
        iconUrl: statistics,
        theme: 'btn-back-red',
        name: 'Statistics Calculator',
        tools: 'Cobol',
        description: 'Calculates key statistics such as standard deviation and harmonic, geometric and standard mean for insightful analysis.',
        link: 'https://github.com/p-sandher/Cobol-Statistics-Measures',
    },
    {
        iconUrl: calculator,
        theme: 'btn-back-yellow',
        name: 'InfinityCalc',
        tools: 'Fortran',
        description: 'A high-capacity calculator program in Fortran, designed to handle exceptionally large numbers without risk of overflow, ensuring reliable and extensive computational power.',
        link: 'https://github.com/p-sandher/Fortran-Calculator',
    },
    {
        iconUrl: stocks,
        theme: 'btn-back-pink',
        name: 'S&P 500 Stock Price Scraper',
        tools: 'Python',
        description: 'Created an S&P 500 Stock Price Scraper using Python to automate the collection and analysis of real-time financial data, enhancing investment decision-making processes.',
        link: 'https://github.com/p-sandher/S-P-500-Stock-Price-Scraper',
    },
    {
        iconUrl: sort,
        theme: 'btn-back-blue',
        name: 'SortMaster Fortran',
        tools: 'Fortran',
        description: 'A sorting application, equipped with dual algorithms for both iterative and recursive sorting, for efficient organization and analysis of numerical data.',
        link: 'https://github.com/p-sandher/Fortran-Sorting',
    },
    {
        iconUrl: graph,
        theme: 'btn-back-green',
        name: 'COVID-19 Data Visualizer',
        tools: 'Python',
        description: 'Developed a COVID-19 data visualizer that graphically presented statistics from Statistics Canada, using data processing and visualization techniques to depict pandemic trends and impacts.',
        link: 'https://github.com/p-sandher/COVID-19-Data-Visualizer-',
    },
    {
        iconUrl: person,
        theme: 'btn-back-yellow',
        name: 'Portfolio Website (2021-2023)',
        tools: 'React.js, HTML, CSS, JavaScript',
        description: 'Developed a personal portfolio website using React, showcasing my software development projects, professional skills, and personal experiences.',
        link: 'https://github.com/p-sandher/puneet-sandher-website',
    }
];
