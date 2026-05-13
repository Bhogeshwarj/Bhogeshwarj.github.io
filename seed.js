const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const docs = {
  "01_About": {
    AboutPara:
      "Hi, I'm Bhogeshwar Jadhav — a Full Stack Developer based in Pune, India. I design, build, and deploy scalable web and mobile applications using Next.js, Node.js, React Native, and AWS. I love crafting AI-powered solutions, high-performance REST APIs, and clean cloud deployments. Currently building products at Pairenthesis (California) and pursuing my B.E. in Computer Engineering at D.Y. Patil College of Engineering, Pune.",
    Resume: "/resume.pdf",
  },
  "02_Experience": {
    ExperienceData: [
      {
        year: 2025,
        month: 5,
        position: "Full Stack Developer",
        company: "Pairenthesis",
        location: "California, USA (Remote)",
        duration: "May 2025 - Present",
        description:
          "Designed a scalable in-app and push notification system using Firebase Cloud Messaging, increasing user engagement by 25%. Built RESTful APIs with Node.js, Express, and PostgreSQL, improving data retrieval speed by 30%. Integrated the OpenAI API for AI-powered workflows that reduced manual client operations by 40%. Built responsive React Native components that improved mobile app load time by 18%.",
        skills: [
          "Next.js",
          "Node.js",
          "Express",
          "PostgreSQL",
          "React Native",
          "Firebase",
          "OpenAI",
        ],
      },
      {
        year: 2025,
        month: 3,
        position: "App Developer Intern",
        company: "LDvia Innovations",
        location: "Pune, India",
        duration: "Mar 2025 - May 2025",
        description:
          "Engineered authentication flows (Sign Up, Sign In, Forgot Password, OTP verification) with TanStack Query, achieving 99% login success. Deployed backend APIs on AWS EC2 and the React Native frontend on AWS Amplify, reducing downtime by 35%. Designed reusable UI components that improved development efficiency by 25%.",
        skills: [
          "React Native",
          "TanStack Query",
          "AWS EC2",
          "AWS Amplify",
          "Node.js",
        ],
      },
      {
        year: 2024,
        month: 12,
        position: "Full Stack Developer Intern",
        company: "DigiLifeStyle",
        location: "Pune, India",
        duration: "Dec 2024 - Feb 2025",
        description:
          "Built a responsive, SEO-optimized website using Next.js with Server-Side Rendering, improving the Google Lighthouse SEO score by 20%. Maintained REST APIs with Node.js and Express integrated with PostgreSQL and MongoDB, supporting 10,000+ user records. Optimized database queries and indexing for a 35% performance gain.",
        skills: [
          "Next.js",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "SSR",
        ],
      },
    ],
  },
  "03_Home": {
    Name: "Bhogeshwar Jadhav",
    ShortInfo: [
      "Full Stack Developer",
      "Next.js & React Native Enthusiast",
      "I build scalable web & mobile apps",
      "AWS • Node.js • PostgreSQL",
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
        TaskHeading: "AI Mock Interview App",
        Type: "Next.js • Drizzle ORM • PostgreSQL • Docker • AWS",
        Github: "https://github.com/Bhogeshwarj",
        More: "https://github.com/Bhogeshwarj",
      },
      {
        TaskHeading: "Smart Gamezone Booking System",
        Type: "Next.js • Node.js • PostgreSQL • Stripe/Razorpay • AWS",
        Github: "https://github.com/Bhogeshwarj",
        More: "https://github.com/Bhogeshwarj",
      },
    ],
  },
  "06_Skills": {
    SkillsData: [
      { name: "JavaScript", icon: "Javascript.svg" },
      { name: "TypeScript", icon: "Typescript.svg" },
      { name: "Next.js", icon: "Nextjs.svg" },
      { name: "React", icon: "React.svg" },
      { name: "Node.js", icon: "Nodejs.svg" },
      { name: "Express", icon: "Expressjs.svg" },
      { name: "MongoDB", icon: "Mongodb.png" },
      { name: "Firebase", icon: "Firebase.svg" },
      { name: "HTML5", icon: "HTML5.svg" },
      { name: "CSS3", icon: "CSS3.svg" },
      { name: "Git", icon: "Git.svg" },
      { name: "Styled Components", icon: "Styledcomponent.png" },
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
