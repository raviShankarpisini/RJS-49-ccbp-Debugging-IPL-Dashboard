import { Link } from "react-router-dom";
import "./index.css";

const TeamCard = ({ teamDetails }) => {
  const { name, id, teamImageURL } = teamDetails;

  return (
    <li className="team-item">
      <Link
        to={`/team-matches/${id}`}
        className="link"
        aria-label={`View matches for ${name}`}
      >
        <img
          src={teamImageURL}
          alt={name}
          className="team-logo"
          onError={(e) => {
            e.target.src = "path/to/default-image.png";
          }} // Fallback image
        />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  );
};

export default TeamCard;
