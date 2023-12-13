import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Calculators = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Kalkulatory
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to="/kalkulator1">Kalkulator 1</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/kalkulator2">Kalkulator 2</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/kalkulator3">Kalkulator 3</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/kalkulator4">Kalkulator 4</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Calculators;
