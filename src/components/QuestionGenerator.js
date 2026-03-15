"use client";

import { useState } from "react";
import { reactQuestions, expressQuestions, dsaQuestions } from "@/data/questions";

export default function QuestionGenerator(){

  const [reactQ,setReactQ] = useState("");
  const [expressQ,setExpressQ] = useState("");
  const [dsaQ,setDsaQ] = useState("");

  function randomQuestion(list){
    return list[Math.floor(Math.random()*list.length)];
  }

  function generate(){

    setReactQ(randomQuestion(reactQuestions));
    setExpressQ(randomQuestion(expressQuestions));
    setDsaQ(randomQuestion(dsaQuestions));

  }

  return(

    <div style={box}>

      <h3>Questions</h3>

      <button onClick={generate} style={btn}>
        Generate Questions
      </button>

      {reactQ && (
        <div style={questionBox}>
          <b>React:</b> {reactQ}
        </div>
      )}

      {expressQ && (
        <div style={questionBox}>
          <b>Express:</b> {expressQ}
        </div>
      )}

      {dsaQ && (
        <div style={questionBox}>
          <b>DSA:</b> {dsaQ}
        </div>
      )}

    </div>

  )
}

const box = {
  marginTop:30,
  background:"white",
  padding:20,
  borderRadius:8
}

const btn = {
  padding:"8px 14px",
  marginBottom:15,
  cursor:"pointer"
}

const questionBox = {
  marginTop:10
}
