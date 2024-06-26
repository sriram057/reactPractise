import React, { Fragment, useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import "./AddUser.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [clgName, setClgName] = useState("");
  const [error, setError] = useState();

  const UserNameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const AgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clgHandler = (event) => {
    setClgName(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      clgName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid details",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, clgName);
    setEnteredAge("");
    setEnteredUsername("");
    setClgName("");
  };

  const confirmHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={UserNameHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeHandler}
          />

          <label htmlFor="Clg">College Name</label>
          <input
            id="clg"
            type="text"
            value={clgName}
            onChange={clgHandler}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
