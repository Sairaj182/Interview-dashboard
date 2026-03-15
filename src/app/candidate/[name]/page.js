"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import QuestionGenerator from "@/components/QuestionGenerator";

export default function CandidatePage() {

  const params = useParams();
  const router = useRouter();

  const name = decodeURIComponent(params.name);

  const [commScore, setCommScore] = useState(0);
  const [reactScore, setReactScore] = useState(0);
  const [expressScore, setExpressScore] = useState(0);
  const [dsaScore, setDsaScore] = useState(0);
  const [notes, setNotes] = useState("");

  async function saveScore() {

    await fetch("/api/score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        commScore,
        reactScore,
        expressScore,
        dsaScore,
        notes
      })
    });

    router.push("/leaderboard");
  }

  useEffect(() => {

    function handleKey(e) {

      if (e.ctrlKey && e.key === "Enter") {
        saveScore();
      }

    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [commScore, reactScore, expressScore, dsaScore, notes]);

  return (
    <div>

      <QuestionGenerator />

      <h2>Candidate: {name}</h2>

      <div style={box}>

        <Score label="Communication" value={commScore} set={setCommScore}/>
        <Score label="React" value={reactScore} set={setReactScore}/>
        <Score label="Express" value={expressScore} set={setExpressScore}/>
        <Score label="DSA" value={dsaScore} set={setDsaScore}/>

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e)=>setNotes(e.target.value)}
          style={textarea}
        />

        <button onClick={saveScore} style={btn}>
          Save Score (Ctrl + Enter)
        </button>

      </div>

    </div>
  );
}

function Score({ label, value, set }) {

  return (
    <div style={{marginBottom:20}}>

      <div style={{marginBottom:6}}>
        <strong>{label}</strong>
      </div>

      <div>

        {[0,1,2,3,4,5].map((num)=>(
          <button
            key={num}
            onClick={()=>set(num)}
            style={{
              ...scoreBtn,
              background: value===num ? "#2563eb" : "#e5e7eb",
              color: value===num ? "white" : "black"
            }}
          >
            {num}
          </button>
        ))}

      </div>

    </div>
  );
}

const box = {
  background:"white",
  padding:25,
  borderRadius:8
};

const textarea = {
  width:"100%",
  height:90,
  marginTop:10,
  marginBottom:15
};

const btn = {
  padding:"10px 16px",
  cursor:"pointer"
};

const scoreBtn = {
  marginRight:6,
  padding:"6px 10px",
  cursor:"pointer",
  border:"none",
  borderRadius:4
};
