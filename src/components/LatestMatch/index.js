import "./index.css";

const LatestMatch = ({ latestMatchData }) => {
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData || {};

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">{competingTeam || "N/A"}</p>
            <p className="latest-match-date">{date || "N/A"}</p>
            <p className="match-details">{venue || "N/A"}</p>
            <p className="match-details">{result || "N/A"}</p>
          </div>
          {competingTeamLogo && (
            <img
              src={competingTeamLogo}
              className="latest-match-team-logo"
              alt={`Latest match ${competingTeam}`}
            />
          )}
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">{firstInnings || "N/A"}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings || "N/A"}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">{manOfTheMatch || "N/A"}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">{umpires || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestMatch;
