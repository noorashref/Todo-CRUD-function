import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import TodoList from "./components/TodoList";
import db from "./components/firebase";
import firebase from "firebase";

function App() {
  // const [todos, setTodos] = useState(["Pray", "Dhkir"]);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("it loads when starts");
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, task: doc.data().task }))
        );
      });
  }, []);

  const onChanges = (e) => {
    setInput(e.target.value);
  };
  // console.log(input);

  //This function stores data locally
  // const addTodo = (e) => {
  //   e.preventDefault();
  //   console.log("this function connected to button");
  //   setTodos([...todos, input]);
  //   setInput("");
  // };

  //This function stores data to live database
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1>Ashref</h1>
      <form>
        <FormControl>
          <InputLabel>Write Todo</InputLabel>
          <Input value={input} onChange={onChanges} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoList todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
