import { useContext } from "react";
import { Link } from "react-router-dom";
// import { Person } from "../../../interfaces/Person";
import { PersonContext } from "../../../store/person-context";
import "./PersonList.style.css";

const PersonListComponent = () => {
  const {persons} = useContext(PersonContext)
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
