import React, { useEffect, useState } from 'react'
import {Card, Container,Row,Col,Label} from 'reactstrap'
import Axios from "../config/Axios"
function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    Axios.get('/details').then(res => {
      console.log(res.data)
      setData(res.data)
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <Container>
      <Card>
        <Row>
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((item, index) => (
              <>
                <Container key={index}>
                  <Card>
                    <Row>
                      <Col className="text-center">
                        <h3>
                          {item.name}
                          <i class="fa-solid fa-pen-to-square"></i>
                        </h3>
                      </Col>
                      <Container>
                        <Row style={{ marginLeft: 50 }}>
                          <Col md="4">
                            <Label>Email:-{item.email}</Label>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Col>
                          <Col md="4">
                            <Label>Address:-{item.address}</Label>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Col>
                          <Col md="4">
                            <Label>Phone:-{item.phone}</Label>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </Col>
                        </Row>
                      </Container>
                      <Row style={{ marginLeft: 20 }}>
                        <Container >
                          <h3>Objective</h3>
                          <p>
                            {item.objective}
                            <i class="fa-solid fa-pen-to-square"></i>
                          </p>
                          <h3>Experience</h3>
                          <p>
                            {item.experience}
                            <i class="fa-solid fa-pen-to-square"></i>
                          </p>
                        </Container>
                        <Container>
                          <h3>Education</h3>
                          <ul>
                            <li>
                              <p>
                                {item.education}
                                <i class="fa-solid fa-pen-to-square"></i>
                              </p>
                            </li>
                          </ul>
                          <h3>Skills</h3>
                          <ul>
                            <li>
                              <p>
                                {item.skills}
                                <i class="fa-solid fa-pen-to-square"></i>
                              </p>
                            </li>
                          </ul>
                          <h3>Projects</h3>
                          <ul>
                            <li>
                              <p>
                                {item.projects}
                                <i class="fa-solid fa-pen-to-square"></i>
                              </p>
                            </li>
                          </ul>
                          <h3>Personal Info</h3>
                          <ul>
                            <li>
                              <p>
                                {item.personal_info}
                                <i class="fa-solid fa-pen-to-square"></i>
                              </p>
                            </li>
                          </ul>
                        </Container>
                      </Row>
                    </Row>
                  </Card>
                </Container>
              </>
            ))
          )}
        </Row>
      </Card>
    </Container>
  );
}

export default Home
