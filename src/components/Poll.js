import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import { Card } from "react-bootstrap";
import AnsweredQuestion from "./AnsweredQuestion";
import NotFound from "./NotFound";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Poll() {
  // hooks
  const dispatch = useDispatch();

  // params
  const { question_id } = useParams();
  //   state
  const state = useSelector((state) => state);
  const { questions, users, currentUser } = state;
  //   get question and author
  const question = questions[question_id];
  let author = users[question.author];
  author = author ? author : "";

  // State
  const [questionStatus, setQuestionStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    const answerStatus =
      question.optionOne.votes.includes(currentUser.id) ||
      question.optionTwo.votes.includes(currentUser.id);
    if (answerStatus) {
      setQuestionStatus("answered");
    }
  }, [question]);

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmitAnswer = async (e, questionID) => {
    e.preventDefault();
    if (userAnswer === "") {
      setIsError(true);
    } else {
      setIsError(false);
      await dispatch(handleSaveAnswer(questionID, userAnswer));
      setQuestionStatus("answered");
    }
  };

  if (!question || !author) {
    return <NotFound />;
  }

  let content = "";

  if (questionStatus === "answered") {
    content = (
      <AnsweredQuestion
        question={question}
        author={author}
        currentUser={currentUser}
      />
    );
  } else {
    content = (
      <div>
        <div className="parentQ">
          <h3 className="question">Would you rather</h3>
        </div>
        <form onSubmit={(e) => handleSubmitAnswer(e, question.id)}>
          <input
            type="radio"
            value="optionOne"
            name="answer"
            onChange={handleChange}
          />{" "}
          {question.optionOne.text}
          <br />
          <input
            type="radio"
            value="optionTwo"
            name="answer"
            onChange={handleChange}
          />{" "}
          {question.optionTwo.text}
          <br />
          <input className=" answerButton btn btn-outline-info" type="submit" />
        </form>
      </div>
    );
  }

  return (
    <div className="center">
      <Card
        style={{ width: "50rem", padding: "10px", border: "3px solid #00ced1" }}
      >
        <h2 style={{ margin: "20px" }}>View Question </h2>
        {isError ? (
          <div className="alert alert-danger" role="alert">
            Please Select an answer
          </div>
        ) : (
          ""
        )}
        <div className="questionInfo">
          <img
            className="leaderboardDisplay"
            src={author.avatarURL}
            alt="avatar"
          />
          <h5>
            {author.name} {questionStatus === "answered" ? "asked" : "asks"}:
          </h5>
          <br />
          {content}
          <br />
        </div>
      </Card>
    </div>
  );
}

export default Poll;
