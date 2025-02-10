import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [modal, setModal] = useState({
        isVisible: false,
        message: "",
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleDeleteTodo = (id, completed) => {
        if (!completed) {
            showModal("Cannot delete a todo that is not completed!");
            return;
        }

        deleteTodo(id);
    };

    const showModal = (message) => {
        setModal({ isVisible: true, message });
    };

    const closeModal = () => {
        setModal({ isVisible: false, message: "" });
    };


    const value = {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        handleDeleteTodo,
        modal,
        showModal,
        closeModal,
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};