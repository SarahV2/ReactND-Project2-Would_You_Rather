import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import image from "../utils/avatars/00.png";
import { handleLogin } from "../actions/currentUser";
import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Init users list
  let usersList = [];

  // Global State
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser);

  // State
  const [loggedIn, setLoggedIn] = useState(false);
  const [chosenUser, setChosenUser] = useState(null);
  // UseEffect
  useEffect(() => {
    if (currentUser) {
      handleNavigation();
    }
  }, [currentUser]);

  const handleNavigation = () => {
    const statePath = location.state;
    if (loggedIn) {
      let targetPath;
      if (statePath) {
        targetPath = statePath?.previousPath;
      } else {
        targetPath = "/";
      }

      console.log("target path", targetPath);
      return navigate(targetPath);
    }
  };

  // Set the users' list
  for (let u in users) {
    var user = users[u];
    usersList.push(user);
  }

  const handleSubmit = () => {
    if (chosenUser) {
      dispatch(handleLogin(chosenUser));
      setLoggedIn(true);
      handleNavigation();
    } else {
      console.log("No user was selected");
    }
  };

  const handleChange = (e) => {
    const userIndex = e.target.value;
    setChosenUser(usersList[userIndex]);
    let img = document.getElementById("loginImage");
    img.setAttribute("src", usersList[userIndex].avatarURL);
  };

  return (
    <div className="center">
      <Card
        style={{ width: "30rem", padding: "10px", border: "3px solid #00ced1" }}
      >
        <h2>Log In</h2>
        <Alert variant="warning">Log in to continue</Alert>
        <div className="center">
          <img id="loginImage" src={image} alt="avatar" />
        </div>
        <Card.Body>
          <Card.Text>
            <select
              onChange={(e) => handleChange(e)}
              className="select"
              defaultValue="choose"
            >
              <option value="choose" disabled>
                Log in as ..
              </option>
              {usersList &&
                usersList.map((user, index) => (
                  <option key={user.id} value={index}>
                    {user.name}
                  </option>
                ))}
            </select>
          </Card.Text>
          <Button onClick={handleSubmit} variant="outline-info">
            Log in
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginPage;
