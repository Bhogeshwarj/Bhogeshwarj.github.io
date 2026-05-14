import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { MainInfo, Name, Shortinfo } from "./HomepageComponent";
import {
  AboutContent,
  AboutImg,
  AboutPara,
} from "../About/aboutComponents";
import { ShowMore } from "../Project/Task/TaskComponents";

function Homepage({ data, aboutData = {} }) {
  return (
    <section id="Home">
      <MainInfo>
        <Name>{data.Name}</Name>
        <Shortinfo>
          <Typewriter
            options={{
              strings: data.ShortInfo,
              autoStart: true,
              loop: true,
            }}
          />
        </Shortinfo>
        <div id="About" style={{ width: "100%" }}>
          <AboutContent>
            <AboutImg>
              <Image
                src="/Gemini_Generated_Image_xgi6luxgi6luxgi6.png"
                alt="Profile"
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 33vw"
                priority
              />
            </AboutImg>
            <AboutPara>
              {aboutData.AboutPara}
              {aboutData.Resume && (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={`${aboutData.Resume}`}
                  target="_blank"
                >
                  <ShowMore color="#D9F8C4">Resume</ShowMore>
                </Link>
              )}
            </AboutPara>
          </AboutContent>
        </div>
      </MainInfo>
    </section>
  );
}

export default Homepage;
