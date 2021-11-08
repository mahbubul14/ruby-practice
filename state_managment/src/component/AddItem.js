import React, { useState, useContext } from 'react';
import {TodoContext} from '../component/Todocontext'

const AddItem = () => {
    const [item, setItem] = useState('');
    const [time, setTime] = useState('');
    const [tasks, setTasks] = useContext(TodoContext);

    const updateItem = (e) => {
        setItem(e.target.value)
    }

    const updateTime = (e) => {
        setTime(e.target.value)
    }

    const addItem= (e) => {
        e.preventDefault();
        setTasks(prevTasks => [...prevTasks, { title: item, time: time }]);
    };

    return(
        <form onSubmit={addItem}>
            <input type='text' name="task" value={item} onChange={updateItem} />
            <input type='text' name="time" value={time} onChange={updateTime} />
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default AddItem;