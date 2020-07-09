import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import _ from "lodash";
import moment from "moment";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/database";

export default () => {
  const database = firebase.database();

  const [users, setUsers] = useState([]);
  const [complates, setComplates] = useState([]);
  const [notComplates, setNotComplates] = useState([]);

  useEffect(() => {
    database.ref("users").once("value", (data) => setUsers(data.toJSON()));
  }, [database]);

  useEffect(() => {
    if (!_.isEmpty(users)) {
      database.ref("files").once("value", (data) => {
        let result = [];
        Object.keys(data.val()).forEach((key) => {
          const file = data.val()[key];
          if (file.date.match(moment().format("YYYY-MM-DD"))) {
            result = result.concat(users[file.user].name);
          }
        });

        let notResults = [];
        Object.keys(users).forEach((key) => {
          if (!result.includes(users[key].name)) {
            notResults = notResults.concat(users[key].name);
          }
        });
        setComplates(result);
        setNotComplates(notResults);
      });
    }
  }, [database, users]);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <Card.Title>
                {moment().format("YYYY-MM-DD")} 미달성 {notComplates.length}
              </Card.Title>
              {notComplates.map((notComplate) => (
                <Card.Text>{notComplate}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{ textAlign: "center" }}>
            <Card.Body>
              <Card.Title>
                {moment().format("YYYY-MM-DD")} 달성 {complates.length}
              </Card.Title>
              {complates.map((complate) => (
                <Card.Text>{complate}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
