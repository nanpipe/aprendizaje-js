import { useState } from "react";

function RandomUser() {
    const url = "https://jsonplaceholder.typicode.com/users/"
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getUser() {
        setLoading(true)
        console.log('entré')
        let userId = Math.floor(1 + Math.random() * 10)
        try {
            const response = await fetch(`${url}${userId}`)
            //console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const respuesta = await response.json()
            //console.log(respuesta)
            setUser(respuesta)

        } catch (error) {
            throw new Error(response.error)
        }
        finally {
            setLoading(false)
        }
    }

    console.log(user)
    return (
        <>
            <p>Random User here</p>
            {loading ? <p>nadie</p> : user ? (
                <p>{user.id} - {user.username} - {user.name}</p>) :
                (
                    <p>Click to load user</p>)
            }
            < button onClick={getUser}>Get User</button>
        </>
    )
}

export default RandomUser;