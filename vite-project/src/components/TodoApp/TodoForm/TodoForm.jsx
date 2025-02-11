import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TodoForm.scss";

const TodoForm = ({ onAddTodo }) => {
    const [inputTodo, setInputTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTodo.trim()) {
            alert("Todo input can't be empty");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: inputTodo,
            completed: false,
        };

        onAddTodo(newTodo);
        setInputTodo("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <textarea
                type="text"
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter a new todo"
            />
            <button type="submit">
                Add <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            </button>
        </form>
    );
};

export default TodoForm;