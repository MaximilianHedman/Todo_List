import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos, onToggleDone, onDeleteTodo, onToggleOngoing }) => {
    const [sortedTodos, setSortedTodos] = useState([...todos]);

    useEffect(() => {
        const sorted = [...todos].sort((a, b) => b.ongoing - a.ongoing);
        setSortedTodos(sorted);
    }, [todos]);

    return (
        <div className="todo-list">
            {sortedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleDone={onToggleDone}
                    onDeleteTodo={onDeleteTodo}
                    onToggleOngoing={onToggleOngoing}
                />
            ))}
        </div>
    );
};

export default TodoList;