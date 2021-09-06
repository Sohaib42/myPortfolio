import {Container,  Col,Image} from "react-bootstrap";

function Profile(){
     return(
         <>
         <Container id="whois" fluid className="flexHeight">
            <section className="whois">
                    <h1 className="sectionTitle">
                            Qui est pascal ?
                    </h1>
                    <Container lg="12" className="d-flex flex-wrap">
                    <Col lg="6">
                        <Image src="/maphoto.jpg" alt="Nice picture of me" className="img-responsive hover-shadow" height="600" rounded responsive>
                        </Image>
                    </Col>
                    <Col lg="4" className="align-self-center">
                        <ul>
                            <li className="tabs profileTabs">thing to do</li>
                            <li className="tabs profileTabs">thing to do</li>
                            <li className="tabs profileTabs">thing to do</li>
                            <li className="tabs profileTabs">thing to do</li>
                            <li className="tabs profileTabs">thing to do</li>
                            <li className="tabs profileTabs">thing to do</li>
                            <li className="tabs profileTabs">thing to do</li>
                        </ul>
                    </Col>
                <Col lg="12">
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
