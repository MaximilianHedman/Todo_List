import React, { useContext } from "react";
import { TodoContext } from '../../../context/TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
    const { toggleTodo, handleDeleteTodo, toggleOngoing } = useContext(TodoContext);

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
                        onClick={() => toggleTodo(todo.id)}
                    >
                        Done <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    </button>
                )}

                {!todo.completed && (
                    <button
                        className={`btn btn-start ${todo.ongoing ? "undo" : ""}`}
                        onClick={() => toggleOngoing(todo.id)}
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

                <button className="btn btn-delete" onClick={() => handleDeleteTodo(todo.id, todo.completed, todo.ongoing)}>
                    Delete <FontAwesomeIcon icon={["fas", "trash"]} />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;