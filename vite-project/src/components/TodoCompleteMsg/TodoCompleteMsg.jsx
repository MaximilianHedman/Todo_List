import React from "react";
import "./TodoCompleteMsg.scss";

const TodoCompleteMsg = ({ allCompleted }) => {
    if (!allCompleted) return null;

    return (
        <div className="complete-msg">
            <p>🎉 All tasks completed! Well done! 🎉</p>
        </div>
    );
};

export default TodoCompleteMsg;