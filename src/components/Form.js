import React from 'react';

function Form(props){
    return(
        <form>
            <input name="name" />
            <input name="email" />
            <select name="role">
                <option>Back End Engineer</option>
                <option>Front End Engineer</option>
                <option>UX Designer</option>
            </select>
            <button type="button">Submit</button>
        </form>
    )
}

export default Form;