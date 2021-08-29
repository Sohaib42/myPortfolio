import logo from '../logo.svg';
import {Container, NavLink, Row, Col} from 'react-bootstrap';

const rowDirection = {
    flexDirection: 'row',
};

function HeadNav(){
    return(
        <>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="chooseList">
        <Row lg="12" md="4">
            <Col lg="6" md="3">
            <NavLink href="#whois">
                <li className="tabs">
                Qui suis-je?
                </li>
            </NavLink>
          </Col>
          <Col lg="6" md="3">
            <NavLink href="#whatido">
                <li className="tabs">
                Que fais-je?
                </li>
            </NavLink>
          </Col>
          <Col lg="6" md="3">
            <NavLink href="#experiences">
                <li className="tabs">
                Mes expériences passées
                </li>
            </NavLink>
          </Col>
          <Col lg="6" md="3">
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
    )
}
export default HeadNav;