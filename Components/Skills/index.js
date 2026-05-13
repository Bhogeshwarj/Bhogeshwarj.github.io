import {
  SkillsPage,
  Title,
  Lang,
  LangImg,
} from "./skillsComponents";
import Image from "next/image";
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useMediaQuery } from "../Hooks/useMediaQuery";

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols}, minmax(12rem, 1fr));
  gap: 2rem 3rem;
  max-width: 90vw;
  justify-content: center;
  align-items: center;
  transition: grid-template-columns 0.6s ease;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(${(p) => Math.min(p.cols, 2)}, minmax(10rem, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ShowMore = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 10vh;
  min-width: 15vw;
  margin: 4rem 0 13vh 0;
  width: 32rem;
  font-family: "Rum Raisin", sans-serif;
  border-radius: 2rem;
  cursor: pointer;
  transition: 1s all ease;
  background-color: #fff0d9;
  @media (max-width: 480px) {
    width: 70vw;
    min-width: 30vw;
    padding: 1.2rem 0;
    font-size: 1.5rem;
  }
  &::selection {
    background-color: transparent;
  }
`;

const Skills = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const [expanded, setExpanded] = useState(false);

  const collapsedCount = isMobile ? 4 : 6;
  const visible = expanded ? data : data.slice(0, collapsedCount);
  const cols = expanded ? 4 : 2;

  const ScrollElements = ["SkillsTitle", "SkillsGrid", "Skillcont3"];
  ScrollAnimation(ScrollElements);

  return (
    <section id="Skills">
      <SkillsPage>
        <Title id="SkillsTitle">Skills</Title>
        <SkillsGrid id="SkillsGrid" cols={cols}>
          {visible &&
            visible.map((item, index) => (
              <Lang key={index}>
                <LangImg>
                  <Image
                    src={`/Skills/${item.icon}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 480px) 50vw, (max-width: 800px) 30vw, 15vw"
                    priority={index < 4}
                  />
                </LangImg>
                {item.name}
              </Lang>
            ))}
        </SkillsGrid>
        <ShowMore
          id="Skillcont3"
          onClick={() => setExpanded((v) => !v)}
        >
          SHOW {expanded ? "LESS" : "MORE"}
        </ShowMore>
      </SkillsPage>
    </section>
  );
};

export default Skills;
