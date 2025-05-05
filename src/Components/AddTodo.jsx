import { useState } from "react";

const AddTodo = ({addTodo, todos}) => {
    const [text, setText] = useState('')
    
    const handleSubmit = () => {
        if (text == '') {
            return
        }

        const todo = todos.find(item => item.text === text)
        if (todo) {
            alert('Todo already exists')
            setText('')
            return
        }
        
        addTodo(text)
        setText('');
    }

    return(
        <div className="d-flex justify-content-center mb-4 gap-2">
        <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Add a new todo"
            className="form-control rounded-4 w-100 text-wrap"
        />
        <button onClick={handleSubmit} className="bg-primary border rounded-4 border-0 fs-3 d-flex justify-content-center align-items-center text-white" style={{width: '50px', height: '50px'}}>
            <i className='bx bx-plus-circle'></i>
        </button>
    </div>
    )
}

export default AddTodo;