import { useState, useEffect } from "react";
import Image from "next/image";

import { NevbarUl, Nevbarli } from "./nevbarComponents";
import Link from "next/link";

function Nevbar({ data }) {
  const [check, setcheck] = useState(0);
  const toggleActive = {
    backgroundColor: "lightblue",
    height: "30px",
    flexDirection: "row",
    minWidth: "5rem",
    gap: "10px",
    fontSize: "small",
  };

  useEffect(() => {
    const sections = data.map((item) => document.querySelector(item.Link));
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Triggers when section occupies the active view area
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          const index = data.findIndex((item) => item.Link === id);
          if (index !== -1) {
            setcheck(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [data]);
  return (
    <NevbarUl>
      {data.map((content, index) => {
        return (
          <li
            style={{
              listStyle: "none",
            }}
            key={index}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={content.Link}
            >
              <Nevbarli
                onClick={() => {
                  setcheck(index);
                }}
                style={check == index ? toggleActive : {}}
              >
                <Image
                  src={`/icons8-${content.img}-32.png`}
                  height={25}
                  alt="img"
                  width={25}
                  priority
                />
                {content.Name}
              </Nevbarli>
            </Link>
          </li>
        );
      })}
    </NevbarUl>
  );
}

export default Nevbar;
