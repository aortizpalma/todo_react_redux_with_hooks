import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions';

const Notes = () => {
    const notes = useSelector((state) => state);
    // const notes = useSelector((state) => state.notes);
    // const text = useSelector((state) => state.texts);

    const dispatch = useDispatch();

    const toggleTodo = (id) => ({
        type: actionTypes.TOGGLE_TODO,
        id: id,
    })

    return (
        <ul>
            {notes.map((note)=> (
                <li key={note.id} onClick={()=>dispatch(toggleTodo(note.id))} className={note.completed ? "strike todo" : "todo"}>{note.text}</li>
            ))}
        </ul>

    );
};

export default Notes;