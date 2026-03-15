"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCandidate() {

  const [name, setName] = useState("");
  const router = useRouter();

  async function addCandidate() {

    if (!name) {
      alert("Enter candidate name");
      return;
    }

    await fetch("/api/candidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    router.push("/");
  }

  return (
    <div>

      <h1>Add Candidate</h1>

      <div style={box}>

        <input
          placeholder="Candidate name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <button onClick={addCandidate} style={btn}>
          Add Candidate
        </button>

      </div>

    </div>
  );
}

const box = {
  background: "white",
  padding: 20,
  borderRadius: 8
};

const input = {
  padding: 8,
  marginRight: 10
};

const btn = {
  padding: "8px 12px",
  cursor: "pointer"
};
