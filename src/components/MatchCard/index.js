import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const MatchCard = ({ matchDetails }) => {
  const {
    competingTeamLogo,
    competingTeam = "Unknown Team",
    matchStatus,
    result = "Result Not Available",
  } = matchDetails;

  const matchStatusClassName = `match-status ${
    matchStatus === "Won" ? "match-won" : "match-lost"
  }`;

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`Competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  );
};

MatchCard.propTypes = {
  matchDetails: PropTypes.shape({
    competingTeamLogo: PropTypes.string.isRequired,
    competingTeam: PropTypes.string,
    matchStatus: PropTypes.string.isRequired,
    result: PropTypes.string,
  }).isRequired,
};

export default MatchCard;
