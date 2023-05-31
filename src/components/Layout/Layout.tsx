// import { useContext } from "react";
import { PropsWithChildren } from "react";
// import { PersonContext } from "../../store/person-context";
import PersonList from "../Person/List/PersonList";
import "./Layout.css";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <PersonList/>
      <main>{children}</main>
    </>
  );
}

export default Layout;
