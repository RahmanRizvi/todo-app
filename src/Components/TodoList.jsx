const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    return (
        <div className="list-group mb-5"> {/* mb-5 to avoid overlap with fixed input */}
            {todos.map(item => (
                <div key={item.id} className="list-group-item d-flex justify-content-between border2 align-items-center shadow-sm rounded-4 border-2 mb-2 bg-light">
                    <div className="d-flex align-items-center gap-2">
                        <input
                            type="checkbox"
                            checked={item.isCompleted}
                            className="form-check-input border border-2 d-flex align-items-center mb-1"
                            onChange={() => toggleComplete(item.id)}
                        />
                        <span className={item.isCompleted ? "completed" : "fs-5"}>
                            {item.text}
                        </span>
                    </div>
                    <button onClick={() => deleteTodo(item.id)} className="btn btn-warning btn-sm rounded-5 p-2 d-flex align-items-center justify-content-center">
                        <i className='bx bxs-trash fs-4'></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;