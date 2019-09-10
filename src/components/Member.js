import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

const Member = props => {
    return(
        <>
          {props.member.map((member, index) => (
            <div className="member" key={index}>
              <h1>{member.name}</h1>
              <h2>{member.email}</h2>
              <h2>{member.role}</h2>
              <EditIcon className="edit-button" />
            </div>
          ))}
        </>
    )
}

export default Member;