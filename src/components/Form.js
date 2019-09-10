import React, { useState } from 'react';

const Form = props => {

    const [newMember, createNewMember] = useState(
        {
            name: "",
            email: "",
            role: ""
        });

    const handleChange = event => {
        createNewMember({
            ...newMember,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newMember);
        props.setMember([...props.member, newMember]);
    };

    const resetForm = event => {
        event.preventDefault();
        createNewMember({
            name: "",
            email: "",
            role: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="name" 
                placeholder="Name"
                onChange={handleChange}
                value={newMember.name}
            />

            <input 
                name="email" 
                placeholder="e-mail" 
                onChange={handleChange}
                value={newMember.email}
            />

            <select name="role" onChange={handleChange} value={newMember.role}>
                <option>Back End Engineer</option>
                <option>Front End Engineer</option>
                <option>UX Designer</option>
            </select>

            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    )
}

export default Form;