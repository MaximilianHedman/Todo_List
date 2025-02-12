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

            <div className="button-group">
                {todo.ongoing && (
                    <button
                        className={`btn btn-done ${todo.completed ? "completed" : ""}`}
                        onClick={() => onToggleDone(todo.id)}
                    >
                        Done <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    </button>
                )}

                {!todo.completed && (
                    <button
                        className={`btn btn-start ${todo.ongoing ? "undo" : ""}`}
                        onClick={() => onToggleOngoing(todo.id)}
                    >
                        {todo.ongoing ? (
                            <>
                                Undo <FontAwesomeIcon icon={["fas", "undo"]} />
                            </>
                        ) : (
                            <>
                                Start <FontAwesomeIcon icon={["fas", "play"]} />
                            </>
                        )}
                    </button>
                )}

                {/* Delete Button - Now Triggers Confirmation */}
                <button className="btn btn-delete" onClick={() => onDeleteTodo(todo.id, todo.completed, todo.ongoing)}>
                    Delete <FontAwesomeIcon icon={["fas", "trash"]} />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;