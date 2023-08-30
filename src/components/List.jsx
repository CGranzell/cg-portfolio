
// Filename: List.jsx
import React from 'react';
 
const List = (props) => {
    return (
        <div>
            <div>Name of student {props.name}</div>
            <div>Roll number of student {props.id}</div>
        </div>
    );
};
 
export default List;