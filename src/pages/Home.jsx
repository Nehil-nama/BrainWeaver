import { useState } from "react";
import ThoughtInput from "../components/ThoughtInput";
import ResultCard from "../components/ResultCard";

const Home = () => {
  const [result, setResult] = useState(null);

  const handleAnalyze = (text) => {
    // dummy data for now
    const dummy = {
      goal: "Switch career",
      problems: ["fear", "uncertainty"],
      options: ["learn new skill", "stay in job"],
      nextSteps: ["research field", "talk to mentor"]
    };

    setResult(dummy);
  };

  return (
    <div className="p-6">
      <ThoughtInput onAnalyze={handleAnalyze} />
      {result && <ResultCard data={result} />}
    </div>
  );
};

export default Home;