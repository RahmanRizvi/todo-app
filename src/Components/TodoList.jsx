const TodoList = ({todos, deleteTodo}) => {
    return(
        <>
        <div className="list-group">
        {todos.map(item => (
              <div key={item.id} className="list-group-item bg-dark text-white rounded-4 mt-2 d-flex justify-content-between align-items-center text-wrap flex-grow-1"> {item.text} 

              <button onClick={() => deleteTodo(item.id)} className="btn btn-danger btn-sm rounded-3 d-flex justify-content-between align-items-center fs-5 p-2 ms-1"><i className='bx bxs-trash'></i></button>
              </div>
        ))}
        </div>
        </>
    )
}

export default TodoList;