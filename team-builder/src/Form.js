import React, { useState } from 'react';

function Form(props) {
    const [formInput, setFormInput] = useState('');

    const handleInput = event => {
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addMember([...props.memberList, formInput]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
          <input type="text" name="name" onChange={handleInput}></input>
            </label>
            <label>
                E-mail:
          <input type="text" name="email" onChange={handleInput}></input>
            </label>
            <label>
                Role:
          <input type="text" name="role" onChange={handleInput}></input>
            </label>
            <button> Submit </button>
        </form>
    )
}

export default Form;