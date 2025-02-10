import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ todo, onToggleDone, onDeleteTodo }) => {
    return (
        <div className="todo-item">
            <p className={todo.completed ? "line-over" : ""}>{todo.title}</p>
            <button
                className={`btn btn-done ${todo.completed ? "completed" : ""}`}
                onClick={() => onToggleDone(todo.id)}
            >
                Done
            </button>
            <button className="btn btn-delete" onClick={() => onDeleteTodo(todo.id, todo.completed)}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;