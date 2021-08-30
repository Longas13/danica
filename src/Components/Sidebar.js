import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
      <Link to="/movies" className="btn btn-primary">
        Movies
      </Link>
    </div>
  );
};

export default Sidebar;
