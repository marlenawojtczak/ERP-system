import { Link } from "react-router-dom";
import { Aside } from "./Layout.styled";
import Calculators from "../pages/Calculators";

export const SideBar = () => {
  return (
    <>
      <Aside>
        <ul>
          <li>
            <Link to="/">Lista zamówień</Link>
          </li>
          <li>
            <Link to="/example">Instrukcje dla developerów</Link>
          </li>
          <li>
            <Link to="/form">Formularz</Link>
          </li>
          <li>
            <Calculators />
          </li>
        </ul>
      </Aside>
    </>
  );
};
