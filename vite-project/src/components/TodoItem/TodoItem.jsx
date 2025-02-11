import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TodoItem.scss";

const TodoItem = ({ todo, onToggleDone, onDeleteTodo }) => {
    return (
        <div className="todo-item">
            <p className={todo.completed ? "line-over" : ""}>{todo.title}</p>
            <button
                className={`btn btn-done ${todo.completed ? "completed" : ""}`}
                onClick={() => onToggleDone(todo.id)}
            >
                {todo.completed ? (
                    <>
                        Undo <FontAwesomeIcon icon={["fas", "undo"]} className="icon-undo" />
                    </>
                ) : (
                    <>
                        Done <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    </>
                )}
            </button>
            <button className="btn btn-delete" onClick={() => onDeleteTodo(todo.id, todo.completed)}>
                Delete <FontAwesomeIcon icon={["fas", "trash"]} />
            </button>
        </div>
    );
};

export default TodoItem;