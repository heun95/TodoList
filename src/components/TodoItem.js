import React from "react";

function TodoItem(props) {
    const delItem = (event) => {
        event.target.parentNode.remove()
    }
    return (
        <div className="todo-item">
            {props.item}
            <button onClick={delItem}>삭제</button>
        </div>
    )
}

export default TodoItem