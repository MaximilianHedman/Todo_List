import React, { useState } from "react";
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
        setInputTodo(""); // Clear input after submitting
    };

    // ✅ Listen for Enter key press inside textarea
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevent new line (default behavior)
            handleSubmit(e);
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <textarea
                type="text"
                value={inputTodo}
                onChange={(e) => setInputTodo(e.target.value)}
                onKeyDown={handleKeyDown} // ✅ Handle Enter key press
                placeholder="Enter a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;