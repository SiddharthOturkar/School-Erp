import React from "react";

const UsersList = props => {
    return <ul>
        {props.users.map(user =>
             <li>
                {user.name} ({user.roll})
            </li>
            )}
    </ul>
};

export default UsersList;