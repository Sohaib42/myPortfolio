import {Container, Col, Image} from "react-bootstrap";
import {ReactComponent as TeraCampus} from "./tera-campus.svg";
function Skills(){
    return(
        <>
        <Container id="whatido" fluid className="flexHeight">
            <section className="whatido">
                <h1 className="sectionTitle">
                    Diplômes et formations
                </h1>
                <Container lg="12" className="d-flex flex-wrap">
                    <Col lg="12" className="align-self-center">
                        <ul className="styList">

                        <li>
                            <h5>
                                Tera Campus - Télé-présentiel
                            </h5>
                            <TeraCampus/>
                            <p>
                                Bac + 3 ( Titre RNCP niveau 6) - Administrateur des systèmes d'informations<br/>
                                <i>
                                    04 octobre 2021 - 30 septembre 2022
                                </i>
                            </p>
                        </li>
<hr className="separator" />
                        <li className="human-booster">
                            <h5>
                                Human Booster - Saint-Etienne (42)
                            </h5>
                            <Image src='/humanbooster.jpg' height="50"/>
                            <p>
                                Bac + 2 (Titre RNCP niveau 5) - Développeur Web/ Web mobile<br/>                     
                                <i>
                                    24 mars 2020 - 10 décembre 2020
                                </i>
                            </p>
                        </li>
<hr className="separator" />
                        <li>
                            <h5>
                                Lycée honoré d'Urfé - Saint-Etienne (42)
                            </h5>
                            <p>
                            BAC Economie Sociale<br/>
                                <i>
                                    Diplomée en 2018
                                </i>
                            </p>
                        </li>
                        </ul>
                    </Col>
                <Col lg="12">
                <br></br>
                </Col>
                    <Col lg="5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae nisi architecto, aliquid aperiam saepe et fugiat.
                            Amet nobis sit vel sed porro possimus distinctio nam, cumque nostrum atque, laborum est?
                            Illum sit praesentium nostrum neque, fugit id aut nihil dolores laudantium est repellendus ipsam fuga expedita quod vel?
                            Nihil corrupti amet quia error corporis veniam enim, odit eligendi repellat expedita laborum placeat.
                            Quaerat, dolor. Consequatur exercitationem suscipit corrupti sit ullam molestiae voluptatibus omnis quidem provident perspiciatis ab, eius repellendus consectetur necessitatibus impedit, modi maxime corporis accusamus quae placeat officiis facere error. Dolorem, autem. Porro blanditiis tenetur sunt vitae voluptate laudantium.
                        </p>
                    </Col>
                </Container>
                
            </section>
        </Container>
        </>
    )
}
export default Skills;