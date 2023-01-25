import "./index.css";

function TeamStats({points}) {
  return (
    <div className="teamstats">
      <h2>Total team points: {points}/4000</h2>
      <h3>Goal rewards:</h3>
      <ul>
        <li>25% - Half-day off</li>
        <li>50% - Day off</li>
        <li>100% - team activity</li>
      </ul>
    </div>
  );
}

export default TeamStats;
