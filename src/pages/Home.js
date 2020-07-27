import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Spinner, Badge } from "react-bootstrap";
import CalendarMonthView from "@joungsik/react-calendar-month-view";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { SUCCESS } from "utils/redux";
import { userAction } from "redux/modules/user";
import { fileAction, originFileAction } from "redux/modules/file";

import image from "assets/images/good.png";

const Day = styled.div`
  background-color: white;
  border: 0.25px solid #f8f8f8;
  text-align: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 10%;
  background-size: contain;
  background-image: url(${image});
`;

export default () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const users = useSelector((store) => store.user.users);
  const files = useSelector((store) => store.file.files);
  const originFiles = useSelector((store) => store.file.origin);

  const [complates, setComplates] = useState([]);
  const [notComplates, setNotComplates] = useState([]);

  useEffect(() => {
    dispatch(userAction());
    dispatch(originFileAction());
  }, [dispatch]);

  useEffect(() => {
    if (files.status === SUCCESS) {
      setComplates(
        users.data
          .filter((user) =>
            files.data.map((file) => file.user).includes(user.key)
          )
          .map((user) => user.value)
      );
      setNotComplates(
        users.data
          .filter(
            (user) => !files.data.map((file) => file.user).includes(user.key)
          )
          .map((user) => user.value)
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
              {complates.map((complate) => (
                <a
                  key={complate.github}
                  href={
                    "https://github.com/OnlineAlgorismStudy/OnAlSt/blob/master/" +
                    files.data.find(
                      (file) => file.user.split("_")[0] === complate.key
                    ).name
                  }
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Badge style={{ fontSize: 18 }} variant="primary">
                    {complate.name}
                  </Badge>{" "}
                </a>
              ))}
            </>
          )}
        </Modal.Body>
      </Modal>
      {originFiles.status === SUCCESS && (
        <CalendarMonthView
          dayNameTextStyle={{ textAlign: "center" }}
          renderDay={(args) => (
            <Day date={args} onClick={() => getFiles(args)}>
              {originFiles.data.map(
                (files) =>
                  files.key === moment(args).format("YYYY-MM-DD") &&
                  Object.keys(files.value).length === users.data.length && (
                    <Image key={files.key} />
                  )
              )}
            </Day>
          )}
          onClickDay={(day) =>
            window.open(
              `https://github.com/OnlineAlgorismStudy/OnAlSt/blob/master/src/question/day${moment(
                day
              ).format("MMDD")}/${moment(day).format("MMDD")}.JPG`,
              "_blank"
            )
          }
        />
      )}
    </Container>
  );
};
