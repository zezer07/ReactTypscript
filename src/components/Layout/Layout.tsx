import LayoutProps from "../../interfaces/LayoutProps";
import PersonListComponent from "../Person/List/PersonListComponent";
import "./Layout.css";

function Layout({ persons, children }: LayoutProps) {
  return (
    <div>
      <PersonListComponent persons={persons} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
