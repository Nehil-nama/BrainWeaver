import { useState } from "react";

const ThoughtInput = ({ onAnalyze }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onAnalyze(input);
  };

  return (
    <div className="mb-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="4"
        placeholder="Write your thoughts..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Analyze
      </button>
    </div>
  );
};

export default ThoughtInput;