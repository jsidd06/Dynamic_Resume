import React from 'react'
import {Card, Container,Row,Col,Label} from 'reactstrap'
function Home() {
  return (
    <Container>
      <Card>
        <Row>
          <Col className="text-center">
            <h2>Home</h2>
          </Col>
          <Row>
            <Col className="text-center">
              <p>
                <Label>Email</Label>:xyz@gmail.com
                <i class="fa-solid fa-pen-to-square"></i>
              </p>
            </Col>
            <Col>
              {" "}
              <Label>Address</Label>:123, ABC Street, XYZ City, ABC State, 12345
              <i class="fa-solid fa-pen-to-square"></i>
            </Col>
            <Col>
              {" "}
              <Label>Phone Number</Label>:+91-1234567890
              <i class="fa-solid fa-pen-to-square"></i>
            </Col>
          </Row>
          <Container>
            <h3>Objective</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <i class="fa-solid fa-pen-to-square"></i>
            </p>
            <h3>Experience</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <i class="fa-solid fa-pen-to-square"></i>
            </p>
          </Container>
          <Container>
            <h3>Education</h3>
            <ul>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <i class="fa-solid fa-pen-to-square"></i>
              </li>
            </ul>
            <h3>External Skills</h3>
            <ul>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <i class="fa-solid fa-pen-to-square"></i>
              </li>
            </ul>
            <h3>Personal Info</h3>
            <ul>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <i class="fa-solid fa-pen-to-square"></i>
              </li>
            </ul>
          </Container>
        </Row>
      </Card>
    </Container>
  );
}

export default Home