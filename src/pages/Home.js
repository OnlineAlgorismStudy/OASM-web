import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { SUCCESS } from "utils/redux";
import { userAction } from "redux/modules/user";
import { fileAction } from "redux/modules/file";

export default () => {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.user.users);
  const files = useSelector((store) => store.file.files);

  const [complates, setComplates] = useState([]);
  const [notComplates, setNotComplates] = useState([]);

  useEffect(() => {
    dispatch(userAction());
    dispatch(fileAction({ date: moment().format("YYYY-MM-DD") }));
  }, [dispatch]);

  useEffect(() => {
    if (files.status === SUCCESS) {
      setComplates(
        users.data.filter((user) =>
          files.data.map((file) => file.user).includes(user.github)
        )
      );
      setNotComplates(
        users.data.filter(
          (user) => !files.data.map((file) => file.user).includes(user.github)
        )
      );
    }
  }, [dispatch, users, files]);

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
                <Card.Text key={notComplate.github}>
                  {notComplate.name}
                </Card.Text>
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
                <Card.Text key={complate.github}>{complate.name}</Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
