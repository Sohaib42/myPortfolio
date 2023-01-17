import logo from '../logo.svg';
import { NavLink, Row, Col } from 'react-bootstrap';
function HeadNav() {
  return (
    <>
      <header className="App-header">
        <ul className="chooseList">
          <Row lg="12" md="4">
            <Col lg="3" md="3">
              <NavLink href="#whois">
                <li className="tabs">
                  Qui suis-je?
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
                  Mes expériences passées
                </li>
              </NavLink>
            </Col>
            <Col lg="3" md="3">
              <NavLink href="#abilities">
                <li className="tabs">
                  De quoi je suis capable?
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