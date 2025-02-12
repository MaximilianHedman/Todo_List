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
        setTodos([{ ...todo, ongoing: false }, ...todos]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed, ongoing: false }
                    : todo
            )
        );
    };

    const toggleOngoing = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                ongoing: todo.id === id ? !todo.ongoing : false,
            }))
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleDeleteTodo = (id, completed, ongoing) => {
        if (!completed && !ongoing) {
            showDeleteConfirmation(id);
            return;
        }

        if (!completed) {
            showModal("Cannot delete a todo that is not completed!");
            return;
        }

        showDeleteConfirmation(id);
    };

    const showDeleteConfirmation = (id) => {
        setModal({
            isVisible: true,
            message: "Are you sure you want to delete this task?",
            confirmAction: () => {
                deleteTodo(id);
                closeModal();
            },
        });
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
        toggleOngoing,
        deleteTodo,
        handleDeleteTodo,
        showDeleteConfirmation,
        modal,
        showModal,
        closeModal,
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};