import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Spinner, Badge } from "react-bootstrap";
import CalendarMonthView from "@joungsik/react-calendar-month-view";
import moment from "moment";
import _ from "lodash";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { SUCCESS } from "utils/redux";
import { userAction } from "redux/modules/user";
import { fileAction, monthlyFileAction } from "redux/modules/file";

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

  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(moment().format("MM"));

  const users = useSelector((store) => store.user.users);
  const files = useSelector((store) => store.file.files);
  const monthlyFiles = useSelector((store) => store.file.monthlyFiles);

  const [complates, setComplates] = useState([]);
  const [notComplates, setNotComplates] = useState([]);

  const getFilePath = (date, fileName) =>
    `https://github.com/OnlineAlgorismStudy/OnAlSt/blob/master/src/question/month${moment(
      date
    ).format("MM")}/day${moment(date).format("MMDD")}/${fileName}`;

  const onClickDay = (day) => {
    window.open(
      getFilePath(day, `${moment(day).format("MMDD")}.JPG`),
      "_blank"
    );
  };

  useEffect(() => {
    dispatch(userAction());
    dispatch(monthlyFileAction(month));
  }, [dispatch]);

  useEffect(() => {
    if (users.status === SUCCESS && files.status === SUCCESS) {
      setComplates(
        files.data.map((file) => {
          const user = users.data.find((user) => user.github === file.name);
          if (!_.isEmpty(user)) {
            return {
              name: user.name,
              files: file.files,
            };
          } else {
            return file;
          }
        })
      );
      setNotComplates(
        users.data.filter((user) => {
          const file = files.data.find((file) => file.name === user.github);
          return _.isEmpty(file);
        })
      );
    }
  }, [dispatch, files, users]);

  const getFiles = (date) => {
    setShow(true);
    setDate(date);
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
          {users.status === SUCCESS && files.status === SUCCESS && (
            <>
              <p style={{ color: "red" }}>미 달성자</p>
              <p>
                {notComplates.map((notComplate) => notComplate.name).join(", ")}
              </p>
              <p style={{ color: "blue" }}>달성자</p>
              {complates.map((complate) => (
                <a
                  key={complate.name}
                  href={getFilePath(date, complate.files[0].name)}
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
      <CalendarMonthView
        dayNameTextStyle={{ textAlign: "center" }}
        renderDay={(args) => (
          <Day date={args} onClick={() => getFiles(args)}>
            {monthlyFiles.status === SUCCESS &&
              monthlyFiles.data.map(
                (data) =>
                  data.date === moment(args).format("YYYY-MM-DD") &&
                  data.length >= users.data.length && <Image key={files.key} />
              )}
          </Day>
        )}
        onClickDay={onClickDay}
      />
    </Container>
  );
};
