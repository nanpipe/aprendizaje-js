import { useEffect, useState } from "react";
import { useFetch } from "./src/hooks/useFetch";

function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    
    setUsers(useFetch())

    return (
        <div>
            <h2>Users</h2>
            {loading ? <p>loading</p> :
                users.map(user => (
                    <p key={user.id}>{user.name}</p>
                ))
            }
            {error && <p>Error: {error}</p>}


        </div>
    );
}

export default UserList;
