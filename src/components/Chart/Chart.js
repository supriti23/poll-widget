import "./Chart.css";

const Chart = ({ options, pollResult }) => {
  let totVotes;
  let votes = Object.values(pollResult);
  if (votes.length > 0) {
    totVotes = votes.reduce((acc, val) => acc + val);
  }
  let pollData = {};
  options.map((value) => {
    pollData[`${value.id}: ${value.ans}`] = Math.round(
      (pollResult[value.id] / totVotes) * 100
    );
  });
  return (
    <div className="col-md-12 col-xs-12 col-sm-12">
      {Object.keys(pollData).map((item, idx) => (
        <>
          <div>{item}</div>
          <div className="progress" key={idx}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${pollData[item]}%` }}
              aria-valuenow={pollData[item]}
              aria-valuemin="20"
              aria-valuemax="100"
            >
              {pollData[item]}%
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default Chart;
