import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Person } from "../../../interfaces/Person";
import { PersonContext } from "../../../store/person-context";
import getById from "../../../utils/crud/getById";

function PersonDetails() {

  console.log('DetailsRendering');

  const [person, setPerson] = useState<Person>();
  const { email } = person || {};
  const {id} = useParams();
  const {persons} = useContext(PersonContext)

  // const getUserById = useCallback((userId?:string) => {
  //   return persons.find(({id}) => id == userId);
  // },[persons])

  const getPersonById = useCallback((id?:string)=>{

   return getById(persons,id)

  },[persons])

  useEffect(() => {
    console.log('DetailsEffect');
    setPerson(getPersonById(id));
    
  }, [id,getPersonById]);

  return email ? <span>details : {email}</span>:<span/>;
}

export default PersonDetails;
