import { ReactNode } from "react";
import { Person } from "./Person";

export default interface LayoutProps {
	persons: Person[];
	children: ReactNode;
  }