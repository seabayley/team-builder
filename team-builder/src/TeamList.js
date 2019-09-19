import React, { useState } from 'react';

function TeamList(props) {
    return (
        props.teamList.map(member => {
            return (
                <div className="team_member">
                    <p>Name: {member.name}</p>
                    <p>E-Mail: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            )
        })
    )
}

export default TeamList;