const ResultCard = ({ data }) => {
  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-lg font-bold">Goal</h2>
      <p>{data.goal}</p>

      <h3 className="mt-2 font-semibold">Problems</h3>
      <ul>
        {data.problems.map((p, i) => (
          <li key={i}>- {p}</li>
        ))}
      </ul>

      <h3 className="mt-2 font-semibold">Options</h3>
      <ul>
        {data.options.map((o, i) => (
          <li key={i}>- {o}</li>
        ))}
      </ul>

      <h3 className="mt-2 font-semibold">Next Steps</h3>
      <ul>
        {data.nextSteps.map((s, i) => (
          <li key={i}>- {s}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;