"use client";

import { useEffect, useState } from "react";
import Terminal from "../components/Terminal";
import styles from "./Home.module.css";

function CyclingText({ options }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % options.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [options.length]);

  const maxLength = Math.max(...options.map((opt) => opt.length));
  const paddedOption = options[index].padEnd(maxLength, " ");

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        minWidth: `${maxLength}ch`,
        fontFamily: "Fira Code, monospace",
        color: "#ffffff",
        fontWeight: "bold",
        whiteSpace: "pre",
        background: "#e63946",
        backgroundOrigin: "content-box",
        position: "relative",
        padding: "0 10px",
        borderRadius: "5px",
      }}
    >
      {paddedOption}
    </div>
  );
}

export default function Home() {
  const options = ["help", "about", "education", "projects", "contact"];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OwenTillger:$~<span className={styles.blink}>|</span><span className={styles.help}>type <CyclingText options={options} /> to start</span></h1>
      <p>
        Quick Contact:{" "}
        <a href="mailto:owentillger@gmail.com" target="_blank" rel="noreferrer">
          owentillger@gmail.com
        </a>
        <a> | </a>
        <a href="https://x.com/0xOwen" target="_blank" rel="noreferrer">
          x.com/0xOwen
        </a>
        <a> | </a>
        <a href="https://t.me/OwenOTTR" target="_blank" rel="noreferrer">
          t.me/@OwenOTTR
        </a>
      </p>
      <Terminal />
    </div>
  );
}