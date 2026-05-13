/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "../ScollAnimation/ScrollAnimation";
import { ProjectTitle } from "../Project/ProjectContainerComponents";
import { useMediaQuery } from "../Hooks/useMediaQuery";

const BlogMain = styled.section`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 80vh;
  height: auto;
  padding: 6rem 0 8rem;
  background-color: #ffb5a2;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols}, minmax(0, 1fr));
  gap: 1.5rem;
  width: min(90vw, ${(p) => (p.cols >= 4 ? "78rem" : "44rem")});
  margin: 3rem 0 2rem;
  transition: grid-template-columns 0.6s ease, width 0.6s ease;
  @media (max-width: 900px) {
    grid-template-columns: repeat(${(p) => Math.min(p.cols, 2)}, minmax(0, 1fr));
    width: 90vw;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    width: 88vw;
  }
`;

const BlogCard = styled.a`
  background-color: #fde7c1;
  border-radius: 1.25rem;
  padding: 1.25rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  min-height: 11rem;
  box-shadow: rgba(99, 99, 99, 0.18) 0px 2px 8px 0px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.18) 0px 6px 14px 0px;
  }
`;

const BlogCardTitle = styled.h3`
  font-family: "Rum Raisin", sans-serif;
  font-weight: 500;
  font-size: 1.05rem;
  margin: 0 0 0.5rem;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogCardPlatform = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #7a6a3f;
`;

const BlogCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
`;

const ReadLink = styled.span`
  font-family: "Rum Raisin", sans-serif;
  font-size: 0.85rem;
  background-color: white;
  border-radius: 1.25rem;
  padding: 0.35rem 0.9rem;
  color: #7CA1B4;
`;

const ExternalIcon = styled.span`
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  color: #7CA1B4;
`;

const ShowMoreBtn = styled.div`
  cursor: pointer;
  font-family: "Rum Raisin", sans-serif;
  background-color: #fde7c1;
  padding: 1rem 3rem;
  border-radius: 2rem;
  transition: 0.3s all ease;
  box-shadow: rgba(99, 99, 99, 0.18) 0px 2px 8px 0px;
  &:hover {
    background-color: #ffd9a8;
  }
  &::selection {
    background-color: transparent;
  }
`;

function Blog({ data = [] }) {
  const blogs = [].concat(data);
  const isMobile = useMediaQuery("(max-width: 520px)");
  const [expanded, setExpanded] = useState(false);

  const collapsedCount = isMobile ? 2 : 4;
  const visible = expanded ? blogs : blogs.slice(0, collapsedCount);
  const cols = expanded ? 4 : 2;

  ScrollAnimation(["BlogTit"]);

  if (!blogs.length) {
    return (
      <BlogMain id="Blog">
        <ProjectTitle id="BlogTit">BLOGS</ProjectTitle>
      </BlogMain>
    );
  }

  return (
    <BlogMain id="Blog">
      <ProjectTitle id="BlogTit">BLOGS</ProjectTitle>
      <BlogGrid cols={cols}>
        {visible.map((content, index) => (
          <BlogCard
            key={index}
            href={content.Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <BlogCardTitle>{content.Title}</BlogCardTitle>
              <BlogCardPlatform>{content.Platform}</BlogCardPlatform>
            </div>
            <BlogCardFooter>
              <ExternalIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V5.207L4.854 11.854a.5.5 0 0 1-.708-.708L10.793 4.5H5.5A.5.5 0 0 1 5 4z" />
                </svg>
              </ExternalIcon>
              <ReadLink>Read</ReadLink>
            </BlogCardFooter>
          </BlogCard>
        ))}
      </BlogGrid>
      {blogs.length > collapsedCount && (
        <ShowMoreBtn onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Show Less" : "Show More"}
        </ShowMoreBtn>
      )}
    </BlogMain>
  );
}

export default Blog;
