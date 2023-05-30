import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Person } from "../../../interfaces/Person";

function DetailpersonComponent({ persons }: { persons: Person[] }) {
  const [person, setPerson] = useState<Person | undefined>();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = (persons: Person[]) => {
      return persons.find((person: Person) => person.id?.toString() === id);
    };

    if (persons.length) setPerson(getUserById(persons));
  }, [id, persons]);

  return <span>details : {person?.email}</span>;
}

export default DetailpersonComponent;
