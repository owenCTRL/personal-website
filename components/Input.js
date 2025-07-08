"use client";

import { useState } from "react";
import styles from "./Input.module.css";

export default function Input({ command, onSubmit }) {
  const [_command, setCommand] = useState(command ? command : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.promptLine}>
      <label htmlFor="command" className={styles.promptLabel}>
        <span className={styles.symbolChevron}> &gt;&gt; </span>
      </label>

      <input
        type="text"
        id="command"
        className={styles.input}
        value={_command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={!!command}
        ref={(input) => input && !command && input.focus()}
        autoFocus={command === "<command>"}
      />
    </form>
  );
}
