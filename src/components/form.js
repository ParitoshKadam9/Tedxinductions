import React, { useState } from 'react';


const Form = ({addName}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addName(title);
        console.log(title);
    }
    return (
        <form className="form" >
            <div className="navbar">TEDxInductions</div>
            
            <input type="text" placeholder="Full name" className="inner top" value={title} required onChange={(e) => { setTitle(e.target.value) }} />
                <button className="inner button" onClick={handleSubmit}>Add</button>
               
        </form>
    );
}
export default Form;