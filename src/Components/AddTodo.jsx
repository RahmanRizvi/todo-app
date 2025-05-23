import { useState } from "react";

const AddTodo = ({addTodo, todos}) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text === '') {
            return;
        }

        const todo = todos.find(item => item.text === text);
        if (todo) {
            alert('Todo already exists');
            setText('');
            return;
        }

        addTodo(text);
        setText('');
    };

    return (
        <div className="position-fixed bottom-0 start-0 end-0 shadow-lg py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <input
                    type="text"
                    className="form-control me-2 border1 fs-5 py-2 px-4 rounded-4 border-2"
                    placeholder="Add a new todo"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button className="btn btn-primary rounded-4 d-flex p-2 align-items-center justify-content-center" onClick={handleSubmit}>
                    <i className='bx bx-plus fs-3 text-white'></i>
                </button>
            </div>
         </div>
    );
};

export default AddTodo;