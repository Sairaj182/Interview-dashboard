"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [candidates, setCandidates] = useState([]);

  async function loadCandidates() {
    const res = await fetch("/api/candidates", { cache: "no-store" });
    const data = await res.json();
    setCandidates(data);
  }

  useEffect(() => {
    loadCandidates();
  }, []);

  return (
    <div>

      <h1>Interview Dashboard</h1>

      <div style={{ marginBottom: 20 }}>

        <Link href="/add-candidate">
          <button style={btn}>Add Candidate</button>
        </Link>

        <Link href="/leaderboard">
          <button style={btn}>Leaderboard</button>
        </Link>

      </div>

      <h3>Candidates</h3>

      <div style={listBox}>

        {candidates.length === 0 && (
          <p>No candidates yet</p>
        )}

        {candidates.map((c) => (
          <div key={c.id} style={candidateRow}>

            <span>{c.name}</span>

            <Link href={`/candidate/${c.name}`}>
              <button style={btnSmall}>Evaluate</button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

const btn = {
  padding: "8px 14px",
  marginRight: 10,
  cursor: "pointer"
};

const btnSmall = {
  padding: "6px 12px",
  cursor: "pointer"
};

const listBox = {
  background: "white",
  padding: 20,
  borderRadius: 8
};

const candidateRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10
};
