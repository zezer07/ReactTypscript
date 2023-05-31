// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
// import { PersonContext } from "../../store/person-context";
// import { PersonContext } from "../../store/person-context";
// import { fetch } from "../../utils/api/fetch";
import Layout from "../Layout/Layout";
import PersonDetails from "../Person/Details/PersonDetails";


function HomePage() {
  
  // const [persons, setPersons] = useState([]);
  // const personContext = useContext(PersonContext)

  console.log('homePageRendering');
  
  // useEffect(() => {
  //   console.log('homePageEffect');
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((resp) => {
  
  //       setPersons(resp)
  //     }
  //       )
  //     .catch((error) => console.log("error", error));
  // }, []);

  return (

      <Layout>
        <Routes>
          <Route
            path="details/:id"
            element={<PersonDetails/>}
          ></Route>
        </Routes>
      </Layout>

  );
}

export default HomePage;
