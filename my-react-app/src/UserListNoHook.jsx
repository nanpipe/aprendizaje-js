import { useEffect, useState } from "react";

function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setUsers(result);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])


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
