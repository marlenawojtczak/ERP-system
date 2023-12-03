import { Link } from "react-router-dom";
import { Aside } from "./Layout.styled";

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
        </ul>
      </Aside>
    </>
  );
};
