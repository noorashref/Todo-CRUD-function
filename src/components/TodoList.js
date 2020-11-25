import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./TodoList.css";
import db from "./firebase";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TodoList(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        task: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>Edit here</h1>
          <input
            placeholder={props.todo.task}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update</Button>
        </div>
      </Modal>
      <List className="todolist">
        <ListItem className="todo__list">
          <ListItemText primary="Todo" secondary={props.todo.task} />
        </ListItem>

        <div className="box">
          <Button>
            <EditIcon type="button" onClick={handleOpen}></EditIcon>
          </Button>

          <Button>
            <DeleteForeverOutlinedIcon
              onClick={(event) => {
                db.collection("todos").doc(props.todo.id).delete();
              }}
            />
          </Button>
        </div>

        <hr />
      </List>
    </>
  );
}

export default TodoList;
