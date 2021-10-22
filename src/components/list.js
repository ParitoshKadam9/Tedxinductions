 import React, { useState, useEffect } from 'react'
import Form from './form';



const List= () => {
    const [names, setNames] = useState([ ]);
    const addName = (title) => {
        setNames([...names, { title: title }]);

    }
    useEffect(() => {
        localStorage.setItem('names',JSON.stringify(names))
    });
    return (
        <div>
            <Form addName={addName}/>
            {names.map(name => {
                return (
                    <div className="seggs">
                        <li>{name.title}</li>
                        </div>
                );
            })}
        </div>
    );
}
export default List;