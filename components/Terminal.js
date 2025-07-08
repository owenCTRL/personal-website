"use client";

import { useRef, useState, useEffect } from "react";
import { CONTENTS } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

const SHORTCUTS = {
  "1": "help",
  "2": "about",
  "3": "resume",
  "4": "education",
  "5": "skills",
  "6": "projects",
  "7": "journal",
  "8": "contact",
  "ctrl+l": "clear",
};

export default function Terminal() {
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      const shortcut =
        e.ctrlKey && key === "l" ? "ctrl+l" : key;

      const command = SHORTCUTS[shortcut];
      if (command) {
        e.preventDefault(); // optional, to block default actions like browser clear screen
        addCommand(command); // <-- You must define this function or use your existing handler
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const addCommand = async (command) => {
    let output;
    setLoading(true);

    const normalizedCommand = command.toLowerCase();

    if (normalizedCommand === "clear") {
      setLoading(false);
      return setCommands([]);
    }

    // Show "Loading..." first
    setCommands([{ command, output: "Loading..." }]);

    if (normalizedCommand in CONTENTS) {
      output = await CONTENTS[normalizedCommand]();
    } else {
      output = CONTENTS.error(escapeHTML(command));
    }
    
    setLoading(false);
    setCommands([{ command, output }]); // Replace with new command only

  };

  return (
    <div className={styles.terminal} ref={terminalRef}>
      {/* <Command command="help" output="Some very long text will go in here" /> */}
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(command) => addCommand(command)} />}
    </div>
  );
}
