import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos, onToggleDone, onDeleteTodo, onToggleOngoing }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleDone={onToggleDone}
                    onDeleteTodo={onDeleteTodo}
                    onToggleOngoing={onToggleOngoing} // ✅ Ensure function is passed
                />
            ))}
        </div>
    );
};

export default TodoList;