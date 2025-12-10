import { useState, useEffect } from "react";

function ParkingSpot() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const respuesta = await response.json()
                setData(respuesta)
                console.log("todo ok")
                console.log(respuesta)
            } catch (err) {
                console.log(err)
                setError(err)
            }
            finally {
                setLoading(false)

            }

        }
        fetchData();
    }, [refresh])


    function RefreshData() {
        setLoading(true);  // ← Add this
        setRefresh(prev => prev + 1);  // Triggers useEffect
    }

    return (
        <>
            {loading ?
                <p>Cargando Datos...</p> : data.map(user => <p key={user.id}>Post ID: {user.id} - {user.title}</p>)
            }

            <button onClick={RefreshData}>Refresh</button>
            {error && <p>Error: {error.message}</p>}

        </>
    )

}

export default ParkingSpot;