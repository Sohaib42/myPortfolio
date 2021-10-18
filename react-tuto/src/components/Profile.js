import { Container, Col, Image } from "react-bootstrap";

function Profile() {
    return (
        <>
            <Container id="whois" className="flexHeight">
                <section className="whois">
                    <h1 className="sectionTitle">
                        Qui suis-je ?
                    </h1>
                    <p>

                    </p>
                    <Container lg="12" className="d-flex flex-wrap">
                    <Col lg="2">
                        </Col>

                        <Col lg="3" xs="5">
                            <Image src="/maphoto.jpg" alt="Nice picture of me" className="img-responsive hover-shadow" rounded fluid>
                            </Image>    
                        </Col>
                        <Col lg="2">

                        </Col>
                        <Col lg="4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Recusandae nisi architecto, aliquid aperiam saepe et fugiat.
                                Amet nobis sit vel sed porro possimus distinctio nam, cumque nostrum atque, laborum est?
                                Illum sit praesentium nostrum neque, fugit id aut nihil dolores laudantium est repellendus ipsam fuga expedita quod vel?
                                Nihil corrupti amet quia error corporis veniam enim, odit eligendi repellat expedita laborum placeat.
                                Quaerat, dolor. Consequatur exercitationem suscipit corrupti sit ullam molestiae voluptatibus omnis quidem provident perspiciatis ab,
                                eius repellendus consectetur necessitatibus impedit, modi maxime corporis accusamus quae placeat officiis facere error. Dolorem, autem. Porro blanditiis tenetur sunt vitae voluptate laudantium.
                            </p>
                        </Col>
                    </Container>
                </section>
            </Container>
        </>
    )
}
export default Profile;
