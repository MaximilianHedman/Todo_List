import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TodoItem.scss";

const TodoItem = ({ todo, onToggleDone, onDeleteTodo, onToggleOngoing }) => {
    return (
        <div className="todo-item">
            <p className={`${todo.completed ? "completed-task" : ""} ${todo.ongoing ? "ongoing-text" : ""}`}>
                {todo.title}
                {todo.ongoing && !todo.completed && <span className="ongoing-indicator">⏳</span>}
                {todo.completed && (
                    <span className="completed-check">
                        <FontAwesomeIcon icon={["fas", "check"]} />
                    </span>
                )}
            </p>

            {/* If task is ongoing, show "Done" first, then "Undo", then "Delete" */}
            {todo.ongoing ? (
                <>
                    <button
                        className={`btn btn-done ${todo.completed ? "completed" : ""}`}
                        onClick={() => onToggleDone(todo.id)}
                    >
                        Done <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    </button>

                    <button
                        className="btn btn-start undo"
                        onClick={() => onToggleOngoing(todo.id)}
                    >
                        Undo <FontAwesomeIcon icon={["fas", "undo"]} />
                    </button>
                </>
            ) : (
                // If task is not ongoing, show "Start" button instead
                !todo.completed && (
                    <button
                        className="btn btn-start"
                        onClick={() => onToggleOngoing(todo.id)}
                    >
                        Start <FontAwesomeIcon icon={["fas", "play"]} />
                    </button>
                )
            )}

            {/* Delete button remains last in both cases */}
            <button className="btn btn-delete" onClick={() => onDeleteTodo(todo.id, todo.completed)}>
                Delete <FontAwesomeIcon icon={["fas", "trash"]} />
            </button>
        </div>
    );
};

export default TodoItem;