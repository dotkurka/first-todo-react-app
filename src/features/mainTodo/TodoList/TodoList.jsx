import React from "react";
import TodoPost from "../TodoPost/TodoPost";

const TodoList = ({ posts, tittle, toggleTodo }) => {
    return (
        <div>
            <h1>{tittle}</h1>
            {posts.map((post, index) => (
                <TodoPost post={post} key={post.id} number={index + 1} toggleTodo={toggleTodo} />
            ))}
        </div>
    );
};

export default TodoList;
