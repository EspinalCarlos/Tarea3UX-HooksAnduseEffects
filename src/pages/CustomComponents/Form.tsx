import { relative } from 'path';
import * as React from 'react';
import { useState, useRef ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [selectedTodos, setSelectedTodos] = useState<Set<number>>(new Set());
    
     
     useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    
    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);
    
    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };
    const handleTodoSelection = (index: number) => {
        setSelectedTodos((prevSelected) => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(index)) {
                newSelected.delete(index);
            } else {
                newSelected.add(index);
            }
            return newSelected;
        });
    };

    const handleCompleteSelectedChores = () => {
        const newTodos = todos.filter((_, index) => !selectedTodos.has(index));
        setTodos(newTodos);
        setSelectedTodos(new Set());
    };


    const getImageSrc = () => {
        if (todos.length === 0) {
            return '/gay.png'; 
        } else if (todos.length <= 5) {
            return '/gat.png';
        } else {
            return '/large_list.png'; 
        }
    };


    return (
        <div id='Body'
            style={
                {
                    position: 'relative',
                    backgroundColor: 'grey',
                    width: '800px',
                    height: '900px',
                    maxHeight: '100%',

                }
            }>
            <div id='TituloForm'
                style={
                    {
                        backgroundColor: '#b9b9b9',
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'relative',
                        top: '10px',
                        marginBottom: '50px',
                        justifyContent: 'center',
                        fontSize: '50px',
                    }
                }>
                To-do List
                <img src='/glorp.png'
                    style={{
                        height: '80px',
                        position: 'absolute',
                        left: '90%',

                    }}></img>

            </div>
            <div id='FormControls'
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <div id="input"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '20px',

                    }}>
                    <label htmlFor="todoInput" className="form-label"></label>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="To-do Chore"
                        style={{
                            borderRadius: '5px',
                            height: '40px',
                            color: 'black',
                            padding: '10px',
                        }}
                    />
                </div>
                <div id='button1'>
                    <button type="button" className="btn btn-outline-light"
                        onClick={handleAddTodo}
                        style={{

                            marginLeft: '20px',
                            marginTop: '5px',
                            color: 'white',
                            padding: '10px',
                            paddingRight: '50px',
                            borderRadius: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '150px',
                        }}>Add Chore</button>
                </div>

            </div>
            <div id='List'
                style={{
                    margin: '20px',
                    fontSize: '20px',
                    backgroundColor: '#dfdddd',
                    padding: '20px',
                    position: 'relative',
                    maxWidth: '200px'
                }}>
                {todos.map((todo, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="chores"
                            id={`chore${index}`}
                            value={todo}
                            onChange={() => handleTodoSelection(index)} 
                            checked={selectedTodos.has(index)} 
                            
                        />
                        <label className="form-check-label" htmlFor={`chore${index}`}>
                            {todo}
                        </label>
                    </div>
                ))}
            </div>
            <div id = 'buttonsDelete'
            style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '20px',
                gap: '20px',
                
            }}>
                <button type='button' className="btn btn-outline-light"
                 onClick={handleCompleteSelectedChores}>Complete Selected Chores</button>
                <button type='button' className="btn btn-outline-light">Complete All Chores</button>
                
            </div>
            <div id= 'imagenGato'
            style={{
                position: 'absolute',
                left: '60%'
            }}>
                <img src = {getImageSrc()}
                style={{
                    height: '250px',
                }}></img>
            </div>
        </div>
    );
};

export default Form;