import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function NewQuestion() {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // State
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      navigate("/");
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const { value } = e.target;

    switch (fieldName) {
      case "optionOne":
        setOptionOne(value);
        break;
      case "optionTwo":
        setOptionTwo(value);
        break;

      default:
        console.log("field name mismatch");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if both options are provided
    if (!optionOne || !optionTwo) {
      alert("please fill both options");
      return;
    }
    await dispatch(handleAddQuestion(optionOne, optionTwo));
    setIsSubmitted(true);
  };

  return (
    <div className="center">
      <Card
        style={{
          width: "50rem",
          padding: "10px",
          border: "3px solid #00ced1",
        }}
      >
        <h2 style={{ margin: "20px", color: "#00ced1", fontweight: "800" }}>
          Would you Rather{" "}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={optionOne}
            name="optionOne"
            placeholder="Option 1: Learn JavaScript"
            required
          />
          <br />
          <input
            onChange={handleChange}
            type="text"
            value={optionTwo}
            name="optionTwo"
            placeholder="Option 2: Learn PHP"
            required
          />
          <input className="btn btn-outline-info" type="submit"></input>
        </form>
      </Card>
    </div>
  );
}

export default NewQuestion;
