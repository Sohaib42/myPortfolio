import logo from '../logo.svg';
import { NavLink, Row, Col } from 'react-bootstrap';
function HeadNav() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="chooseList">
          <Row lg="12" md="3">
            <Col lg="3" md="3">
              <NavLink href="#whois">
                <li className="tabs">
                  Qui suis-
                </li>
              </NavLink>
            </Col>
            <Col lg="3" md="3">
              <NavLink href="#whatido">
                <li className="tabs">
                  Que fais-je?
                </li>
              </NavLink>
            </Col>
            <Col lg="3" md="3">
              <NavLink href="#experiences">
                <li className="tabs">
                  Expérience
                </li>
              </NavLink>
            </Col>
            <Col lg="3" md="3">
              <NavLink href="#abilities">
                <li className="tabs">
                  Capacités
                </li>
              </NavLink>
            </Col>
          </Row>
        </ul>
      </header>
    </>
  );
}
export default HeadNav;