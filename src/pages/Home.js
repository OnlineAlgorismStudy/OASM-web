import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Spinner, Badge } from "react-bootstrap";
import CalendarMonthView from "@joungsik/react-calendar-month-view";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import { SUCCESS } from "utils/redux";
import { userAction } from "redux/modules/user";
import { fileAction } from "redux/modules/file";
import styled from "styled-components";

const Day = styled.div`
  background-color: white;
  border: 0.25px solid #f8f8f8;
`;

export default () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const users = useSelector((store) => store.user.users);
  const files = useSelector((store) => store.file.files);
  const [complates, setComplates] = useState([]);
  const [notComplates, setNotComplates] = useState([]);

  useEffect(() => {
    dispatch(userAction());
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

  const getFiles = (date) => {
    setShow(true);
    dispatch(fileAction({ date: moment(date).format("YYYY-MM-DD") }));
  };

  return (
    <Container>
      <Modal
        show={show}
        size="lg"
        centered
        backdrop="static"
        onHide={() => setShow(false)}
      >
        <Modal.Header>
          <Modal.Title>달성 확인</Modal.Title>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          {files.status !== SUCCESS && (
            <Spinner animation="grow" variant="dark" />
          )}
          {files.status === SUCCESS && (
            <>
              <p style={{ color: "red" }}>미 달성자</p>
              <p>
                {notComplates.map((notComplate) => notComplate.name).join(", ")}
              </p>
              <p style={{ color: "blue" }}>달성자</p>
              {/* {complates.map((complate) =>
                console.log(
                  files.data.find((file) => file.user === complate.github)
                )
              )} */}
              {complates.map((complate) => (
                <a href={"https://google.com"}>
                  <Badge key={complate.github} variant="primary">
                    {complate.name}
                  </Badge>{" "}
                </a>
              ))}
            </>
          )}
        </Modal.Body>
      </Modal>
      <CalendarMonthView
        dayNameTextStyle={{ textAlign: "center" }}
        renderDay={(args) => <Day date={args} onClick={() => getFiles(args)} />}
      />
    </Container>
  );
};
