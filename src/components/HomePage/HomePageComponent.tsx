import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetch } from "../../utils/api/fetch";
import Layout from "../Layout/Layout";
import DetailpersonComponent from "../Person/Details/PersonDetailsComponent";

function HomePage() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => setPersons(resp))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Layout persons={persons}>
        <Routes>
          <Route
            path="details/:id"
            element={<DetailpersonComponent persons={persons} />}
          ></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default HomePage;
