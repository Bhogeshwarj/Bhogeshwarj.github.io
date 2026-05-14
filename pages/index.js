import db from "../db";

import dynamic from "next/dynamic";

const Foot = dynamic(() => import("../Components/Layout/foot/foot"));
const Experience = dynamic(() => import("../Components/Experience/Experience"));
const Nevbar = dynamic(() => import("../Components/Layout/nevbar/nevbar"));
import Homepage from "../Components/HomePage/Homepage";
const Contact = dynamic(() => import("../Components/Contact"));
const Project = dynamic(() => import("../Components/Project/Project"));
const Skills = dynamic(() => import("../Components/Skills"));
const Blog = dynamic(() => import("../Components/Blog/Blog"));

import { collection, getDocs } from "firebase/firestore";

export default function Home({ Data }) {
  const mainStyle = {
    scrollBehavior: "smooth",
  };
  console.log("HELLO And Welcome To My Portfolio");
  const [
    aboutData,
    { ExperienceData },
    homeData,
    { NevbarData },
    { ProjectData },
    { SkillsData },
    BlogDoc,
  ] = Data;
  const BlogData = (BlogDoc && BlogDoc.BlogData) || [];

  const customNavbarData = [
    { Name: "Home", Link: "#Home", img: "home" },
    { Name: "Work Experience", Link: "#Experience", img: "timeline" },
    { Name: "Skills", Link: "#Skills", img: "skills" },
    { Name: "Projects", Link: "#Project", img: "project" },
    { Name: "Blogs", Link: "#Blog", img: "project" }, 
    { Name: "Contact", Link: "#Contact", img: "contact" }
  ];

  return (
    <div style={mainStyle}>
      <Nevbar data={customNavbarData} />
      <Homepage data={homeData} aboutData={aboutData} />
      <Experience data={ExperienceData} />
      <Skills data={SkillsData} />
      <Project data={ProjectData} />
      <Blog data={BlogData} />
      <Contact />
      <Foot />
    </div>
  );
}

export async function getStaticProps() {
  const DataRef = await getDocs(collection(db, "Data"));
  const Data = DataRef.docs.map((entry) => entry.data());

  return {
    props: {
      Data,
    },
    revalidate: 60,
  };
}
