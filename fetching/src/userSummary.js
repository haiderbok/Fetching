import React from "react";


const userSummary = ({users}) => {
    return (

        <div className="card">
        <div className={"card z-depth-0 fund-summary"}>
            <div className={"card-content grey-text text-darken-3"}>
                <span className={"card-title"}>Name {': ' + users.name}</span>
                <p>username: {users.username}</p>
                <p>email: {users.email}</p>
            </div>
        </div>
        </div>
    )
}

export default userSummary;