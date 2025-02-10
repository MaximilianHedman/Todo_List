import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import TodoCompleteMsg from "../TodoCompleteMsg/TodoCompleteMsg"; // Updated name
import "./TodoApp.scss";

const TodoApp = () => {
    const { todos, addTodo, toggleTodo, handleDeleteTodo, modal, closeModal } =
        useContext(TodoContext);

    // Check if all todos are completed
    const allCompleted = todos.length > 0 && todos.every(todo => todo.completed);

    return (
        <main className="todo-app">
            <h2>Todo List</h2>
            <TodoForm onAddTodo={addTodo} />
            <TodoList
                todos={todos}
                onToggleDone={toggleTodo}
                onDeleteTodo={handleDeleteTodo} // ✅ Use handleDeleteTodo from context
            />

            {/* Show message when all tasks are completed */}
            <TodoCompleteMsg allCompleted={allCompleted} />

            {/* Modal for delete confirmation */}
            {modal.isVisible && (
                <Modal onClose={closeModal}>
                    <p>{modal.message}</p>
                </Modal>
            )}
        </main>
    );
};

export default TodoApp;