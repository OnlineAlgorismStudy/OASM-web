import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { SUCCESS } from "utils/redux";
import { userAction } from "redux/modules/user";
import {
  fileAction,
  fileMonAction,
  fileTueAction,
  fileWedAction,
  fileThuAction,
  fileFriAction,
} from "redux/modules/file";

export default () => {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.user.users);
  const files = useSelector((store) => store.file.files);
  const mon = useSelector((store) => store.file.mon);
  const tue = useSelector((store) => store.file.tue);
  const wed = useSelector((store) => store.file.wed);
  const thu = useSelector((store) => store.file.thu);
  const fri = useSelector((store) => store.file.fri);

  const days = [
    moment().startOf("isoWeek").format("YYYY-MM-DD"),
    moment().startOf("isoWeek").add(1, "days").format("YYYY-MM-DD"),
    moment().startOf("isoWeek").add(2, "days").format("YYYY-MM-DD"),
    moment().startOf("isoWeek").add(3, "days").format("YYYY-MM-DD"),
    moment().startOf("isoWeek").add(4, "days").format("YYYY-MM-DD"),
  ];

  const [complates, setComplates] = useState([]);
  const [notComplates, setNotComplates] = useState([]);

  const [monComplates, setMonComplates] = useState([]);
  const [monNotComplates, setMonNotComplates] = useState([]);

  const [tueComplates, setTueComplates] = useState([]);
  const [tueNotComplates, setTueNotComplates] = useState([]);

  const [wedComplates, setWedComplates] = useState([]);
  const [wedNotComplates, setWedNotComplates] = useState([]);

  const [thuComplates, setThuComplates] = useState([]);
  const [thuNotComplates, setThuNotComplates] = useState([]);

  const [friComplates, setFriComplates] = useState([]);
  const [friNotComplates, setFriNotComplates] = useState([]);

  useEffect(() => {
    dispatch(userAction());
    dispatch(fileAction({ date: moment().format("YYYY-MM-DD") }));
    dispatch(fileMonAction({ date: days[0] }));
    dispatch(fileTueAction({ date: days[1] }));
    dispatch(fileWedAction({ date: days[2] }));
    dispatch(fileThuAction({ date: days[3] }));
    dispatch(fileFriAction({ date: days[4] }));
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

  useEffect(() => {
    if (mon.status === SUCCESS) {
      setMonComplates(
        users.data.filter((user) =>
          mon.data.map((file) => file.user).includes(user.github)
        )
      );
      setMonNotComplates(
        users.data.filter(
          (user) => !mon.data.map((file) => file.user).includes(user.github)
        )
      );
    }
  }, [dispatch, users, mon]);

  useEffect(() => {
    if (tue.status === SUCCESS) {
      setTueComplates(
        users.data.filter((user) =>
          tue.data.map((file) => file.user).includes(user.github)
        )
      );
      setTueNotComplates(
        users.data.filter(
          (user) => !tue.data.map((file) => file.user).includes(user.github)
        )
      );
    }
  }, [dispatch, users, tue]);

  useEffect(() => {
    if (wed.status === SUCCESS) {
      setWedComplates(
        users.data.filter((user) =>
          wed.data.map((file) => file.user).includes(user.github)
        )
      );
      setWedNotComplates(
        users.data.filter(
          (user) => !wed.data.map((file) => file.user).includes(user.github)
        )
      );
    }
  }, [dispatch, users, wed]);

  useEffect(() => {
    if (thu.status === SUCCESS) {
      setThuComplates(
        users.data.filter((user) =>
          thu.data.map((file) => file.user).includes(user.github)
        )
      );
      setThuNotComplates(
        users.data.filter(
          (user) => !thu.data.map((file) => file.user).includes(user.github)
        )
      );
    }
  }, [dispatch, users, thu]);

  useEffect(() => {
    if (fri.status === SUCCESS) {
      setFriComplates(
        users.data.filter((user) =>
          fri.data.map((file) => file.user).includes(user.github)
        )
      );
      setFriNotComplates(
        users.data.filter(
          (user) => !fri.data.map((file) => file.user).includes(user.github)
        )
      );
    }
  }, [dispatch, users, fri]);

  return (
    <Container>
      <Row style={{ textAlign: "center", marginTop: 50 }}>
        {days.map((day, index) => (
          <Col md>
            <Card>
              <Card.Body>
                <Card.Title>{day}</Card.Title>
                <Card.Text style={{ color: "brown" }}>미달성자</Card.Text>
                {index === 0 &&
                  monNotComplates.map((notComplate) => (
                    <Card.Text key={notComplate.github}>
                      {notComplate.name}
                    </Card.Text>
                  ))}
                {index === 1 &&
                  tueNotComplates.map((notComplate) => (
                    <Card.Text key={notComplate.github}>
                      {notComplate.name}
                    </Card.Text>
                  ))}
                {index === 2 &&
                  wedNotComplates.map((notComplate) => (
                    <Card.Text key={notComplate.github}>
                      {notComplate.name}
                    </Card.Text>
                  ))}
                {index === 3 &&
                  thuNotComplates.map((notComplate) => (
                    <Card.Text key={notComplate.github}>
                      {notComplate.name}
                    </Card.Text>
                  ))}
                {index === 4 &&
                  friNotComplates.map((notComplate) => (
                    <Card.Text key={notComplate.github}>
                      {notComplate.name}
                    </Card.Text>
                  ))}
                <Card.Text style={{ color: "blue" }}>달성자</Card.Text>
                {index === 0 &&
                  monComplates.map((complate) => (
                    <Card.Text key={complate.github}>{complate.name}</Card.Text>
                  ))}
                {index === 1 &&
                  tueComplates.map((complate) => (
                    <Card.Text key={complate.github}>{complate.name}</Card.Text>
                  ))}
                {index === 2 &&
                  wedComplates.map((complate) => (
                    <Card.Text key={complate.github}>{complate.name}</Card.Text>
                  ))}
                {index === 3 &&
                  thuComplates.map((complate) => (
                    <Card.Text key={complate.github}>{complate.name}</Card.Text>
                  ))}
                {index === 4 &&
                  friComplates.map((complate) => (
                    <Card.Text key={complate.github}>{complate.name}</Card.Text>
                  ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <Row>
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
      </Row> */}
    </Container>
  );
};
