import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos, onToggleDone, onDeleteTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleDone={onToggleDone}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;