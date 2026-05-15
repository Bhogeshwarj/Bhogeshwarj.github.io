const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const docs = {
  "01_About": {
    AboutPara:
      "Hi, I'm Bhogeshwar Jadhav — a Full-Stack Software Engineer based in Pune, India with 1+ year of production experience at Pairenthesis, a US-based AI SaaS startup, where I was promoted from intern to full-time within 6 months. I ship end-to-end across Next.js, FastAPI, PostgreSQL, Redis, and AWS, and have built production LLM-powered features with Langfuse observability. I love building scalable systems, shipping real product, and solving problems that touch users. Currently pursuing my B.E. in Computer Engineering at D.Y. Patil College of Engineering, Pune (SGPA 8.72/10).",
    Resume: "/resume.pdf",
  },
  "02_Experience": {
    ExperienceData: [
      {
        year: 2025,
        month: 10,
        position: "Software Engineer (Full-Time)",
        company: "Pairenthesis",
        location: "USA (Remote)",
        duration: "Oct 2025 - Present",
        description:
          "Promoted from intern to full-time within 6 months. Architected a real-time notification system on Firebase Cloud Messaging delivering 1,000+ daily push and in-app notifications. Engineered high-performance FastAPI + PostgreSQL + Redis backends serving 10,000+ daily requests, applying query batching, caching, and connection pooling to reduce API latency. Shipped production LLM workflows with Langfuse observability — prompt tracing, response monitoring, and latency tracking. Designed end-to-end CI/CD pipelines on AWS ECS using Docker and GitHub Actions. Built OAuth integrations with Salesforce and HubSpot for automated lead ingestion.",
        skills: [
          "FastAPI",
          "PostgreSQL",
          "Redis",
          "Firebase",
          "AWS ECS",
          "Docker",
          "Langfuse",
          "GitHub Actions",
        ],
      },
      {
        year: 2025,
        month: 5,
        position: "Software Engineer Intern",
        company: "Pairenthesis",
        location: "USA (Remote)",
        duration: "May 2025 - Oct 2025",
        description:
          "Built and iterated on core product features using Next.js and Node.js; promoted to full-time engineer within 6 months based on delivery ownership and execution quality. Owned complete feature lifecycle from requirement scoping and API design through AWS deployment and production monitoring. Integrated OAuth workflows for LinkedIn and Twitter/X, enabling automated content posting and cross-platform sharing. Built webhook integrations with Tally, Typeform, and Zapier Forms, automating real-time customer data ingestion.",
        skills: [
          "Next.js",
          "Node.js",
          "AWS EC2",
          "AWS ECS",
          "AWS S3",
          "PostgreSQL",
          "REST APIs",
          "OAuth",
        ],
      },
      {
        year: 2025,
        month: 3,
        position: "App Developer Intern",
        company: "LDvia Innovations",
        location: "Pune, India (On-Site)",
        duration: "Mar 2025 - Apr 2025",
        description:
          "Implemented complete authentication flows (Sign Up, Sign In, OTP, Password Recovery) using TanStack Query and JWT, achieving a 99% login success rate in production. Deployed and managed a Node.js backend on AWS EC2 and React Native app on AWS Amplify; configured monitoring and auto-restart policies. Built a reusable component library of 12+ shared UI components, improving cross-team development efficiency.",
        skills: [
          "React Native",
          "Node.js",
          "TanStack Query",
          "AWS EC2",
          "AWS Amplify",
          "JWT",
        ],
      },
      {
        year: 2024,
        month: 12,
        position: "Full Stack Developer Intern",
        company: "DigiLifeStyle",
        location: "Pune, India (On-Site)",
        duration: "Dec 2024 - Feb 2025",
        description:
          "Rebuilt the company website using Next.js SSR with SEO optimisation, improving search visibility, page load performance, and long-term maintainability. Designed and maintained REST APIs using Node.js/Express, PostgreSQL, and MongoDB, supporting 10,000+ user records with consistent sub-200ms response times. Developed modern, responsive UI components using React, Next.js, and Tailwind CSS.",
        skills: [
          "Next.js",
          "React",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
    ],
  },
  "03_Home": {
    Name: "Bhogeshwar Jadhav",
    ShortInfo: [
      "Full-Stack Software Engineer",
      "AI & LLM Engineer",
      "I ship production systems end-to-end",
      "Next.js • FastAPI • AWS • LLMs",
      "Intern → FTE in 6 months @ a US AI startup",
    ],
  },
  "04_Nevbar": {
    NevbarData: [
      { Name: "Home", Link: "#Home", img: "home" },
      { Name: "About", Link: "#About", img: "about" },
      { Name: "Skills", Link: "#Skills", img: "skills" },
      { Name: "Projects", Link: "#Projects", img: "project" },
      { Name: "Experience", Link: "#Experience", img: "timeline" },
      { Name: "Contact", Link: "#Contact", img: "contact" },
    ],
  },
  "05_Project": {
    ProjectData: [
      {
        TaskHeading: "AI Mock Interview Platform",
        Type: "Next.js 14 • TypeScript • FastAPI • PostgreSQL • Gemini API • Docker • AWS ECS • NextAuth.js",
        Github: "https://github.com/Bhogeshwarj",
        More: "https://github.com/Bhogeshwarj",
      },
      {
        TaskHeading: "BookMyArena — Sports Facility Booking",
        Type: "Next.js • Node.js • PostgreSQL • Redis • Stripe • AWS",
        Github: "https://github.com/Bhogeshwarj",
        More: "https://github.com/Bhogeshwarj",
      },
      {
        TaskHeading: "Requestly — Open Source Contribution",
        Type: "OSS Browser Extension • 8k+ GitHub stars • Frontend bug fixes & UI improvements",
        Github: "https://github.com/requestly/requestly",
        More: "https://github.com/requestly/requestly",
      },
    ],
  },
  "06_Skills": {
    SkillsData: [
      { name: "TypeScript", icon: "Typescript.svg" },
      { name: "JavaScript", icon: "Javascript.svg" },
      { name: "Python", icon: "Python.svg" },
      { name: "Next.js", icon: "Nextjs.svg" },
      { name: "React", icon: "React.svg" },
      { name: "FastAPI", icon: "FastAPI.svg" },
      { name: "Node.js", icon: "Nodejs.svg" },
      { name: "Express", icon: "Expressjs.svg" },
      { name: "PostgreSQL", icon: "PostgreSQL.svg" },
      { name: "MongoDB", icon: "Mongodb.png" },
      { name: "Redis", icon: "Redis.svg" },
      { name: "AWS", icon: "AWS.svg" },
      { name: "Docker", icon: "Docker.svg" },
      { name: "Firebase", icon: "Firebase.svg" },
      { name: "GitHub Actions", icon: "GitHubActions.svg" },
      { name: "Langfuse", icon: "Langfuse.svg" },
      { name: "Gemini / OpenAI", icon: "AI.svg" },
      { name: "Tailwind CSS", icon: "Tailwind.svg" },
      { name: "React Native", icon: "React.svg" },
      { name: "HTML5", icon: "HTML5.svg" },
      { name: "CSS3", icon: "CSS3.svg" },
      { name: "Git", icon: "Git.svg" },
    ],
  },
  "07_Blog": {
    BlogData: [
      {
        Title:
          "We Switched to Requestly for the Price. We Stayed for How It Changed Our Workflow.",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/we-switched-to-requestly-for-the-price-we-stayed-for-how-it-changed-our-workflow-8dc1528fa68d",
      },
      {
        Title:
          "We Migrated from Postman to Requestly — Here's What Actually Happened",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/we-migrated-from-postman-to-requestly-heres-what-actually-happened-15f96a23320a",
      },
      {
        Title:
          "Postman Just Killed Our Free Workspace Mid-MVP. Here's What We're Doing About It.",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/postman-just-killed-our-free-workspace-mid-mvp-heres-what-we-re-doing-about-it-29c23f96415a",
      },
      {
        Title:
          "Getting Started with Requestly's Local Workspace — My Hands-On Experience",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/getting-started-with-requestlys-local-workspace-my-hands-on-experience-2293446479be",
      },
      {
        Title:
          "Mastering Variables & Environments in Requestly: A Hands-On Guide for Developers",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/mastering-variables-environments-in-requestly-a-hands-on-guide-for-developers-a71e0d20f35e",
      },
      {
        Title: "Automating API Tests with Requestly's Collection Runner",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/automating-api-tests-with-requestlys-collection-runner-2ebe585cf8f9",
      },
      {
        Title: "Uploading & Fetching Images with AWS S3 in Next.js",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/uploading-fetching-images-with-aws-s3-in-next-js-bb75e5ee50eb",
      },
      {
        Title: "LinkedIn Integration in Next.js",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/linked-in-integration-in-next-js-5cc983ae9aa8",
      },
      {
        Title: "Setup Backend Prisma with MongoDB",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/setup-backend-prisma-with-mongodb-185166910bcb",
      },
      {
        Title: "GitHub",
        Platform: "Medium",
        Link: "https://medium.com/@bhogeshwarj/github-8afc81e1c882",
      },
    ],
  },
};

async function seed() {
  const batch = db.batch();
  for (const [id, data] of Object.entries(docs)) {
    const ref = db.collection("Data").doc(id);
    batch.set(ref, data);
    console.log(`queued: Data/${id}`);
  }
  await batch.commit();
  console.log("\nSeed complete. 6 documents written to the Data collection.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
