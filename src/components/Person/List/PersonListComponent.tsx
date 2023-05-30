import { Link } from "react-router-dom";
import "./PersonListComponent.css";

const PersonListComponent = ({ persons }: { persons: any[] }) => {
  return (
    <div>
      <h1 className="title"> List of Persons </h1>
      <ul>
        {persons.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/details/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonListComponent;
