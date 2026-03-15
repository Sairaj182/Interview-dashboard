"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {

  const [data, setData] = useState([]);

  async function load() {
    const res = await fetch("/api/candidates");
    const d = await res.json();
    setData(d);
  }

  useEffect(() => {
    load();
  }, []);

  data.sort((a, b) => {

    const ta =
      a.commScore + a.reactScore + a.expressScore + a.dsaScore;

    const tb =
      b.commScore + b.reactScore + b.expressScore + b.dsaScore;

    return tb - ta;
  });

  return (
    <div>

      <h1>Leaderboard</h1>

      <div style={box}>

        <table style={table}>

          <thead>
            <tr>
              <th>Name</th>
              <th>Comm</th>
              <th>React</th>
              <th>Express</th>
              <th>DSA</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>

            {data.map((c) => {

              const total =
                c.commScore +
                c.reactScore +
                c.expressScore +
                c.dsaScore;

              return (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.commScore}</td>
                  <td>{c.reactScore}</td>
                  <td>{c.expressScore}</td>
                  <td>{c.dsaScore}</td>
                  <td>{total}</td>
                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}

const box = {
  background: "white",
  padding: 20,
  borderRadius: 8
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};
