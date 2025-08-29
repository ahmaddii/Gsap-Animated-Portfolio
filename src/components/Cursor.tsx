"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const addMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const addHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.tagName === "A" || target?.tagName === "BUTTON") {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", addMouse);
    window.addEventListener("mousedown", addClick);
    window.addEventListener("mouseover", addHover);

    return () => {
      window.removeEventListener("mousemove", addMouse);
      window.removeEventListener("mousedown", addClick);
      window.removeEventListener("mouseover", addHover);
    };
  }, []);

  return (
    <>
      {/* Outer glow ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[999] w-10 h-10 rounded-full border-2 border-purple-500 transition-all duration-300 ease-out 
        ${clicked ? "scale-75 opacity-70" : ""}
        ${hovered ? "scale-125 border-pink-500" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />

      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[999] w-2 h-2 rounded-full bg-purple-500 transition-all duration-150 ease-out
        ${clicked ? "scale-150 bg-pink-500" : ""}
        `}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default Cursor;
