import React from 'react';

const Member = props => {
    return(
        <>
        {props.member.map((member, index) => (
        <div className="member" key={index}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
        </>
    )
}

export default Member;