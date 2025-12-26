import { useState } from "react";



function ProductSearch() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])
    const [doSearch, setdoSearch] = useState(false)
    const [error, setError] = useState(null);


    async function searchText() {
        const urlSearch = `https://jsonplaceholder.typicode.com/posts?q=`;

        console.log("Searching for:", search);
        setdoSearch(true)
        try {
            const response = await fetch(`${urlSearch}${search}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const respuesta = await response.json()
            setData(respuesta)
            console.log(respuesta)
        } catch (error) {
            console.log(error)
            setError(error)
        }
        finally {
            setdoSearch(false)

        }

    }

    return (
        <>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchText}>Search</button>
            </div>
            <h1>Search: {search}</h1>

            {doSearch ? <p> Buscando información</p> : data.length == 0 ? <p>No hubo resultados</p> : data.map(user => <p key={user.id}> User ID {user.userId} - {user.title}</p>)}
        </>
    );
}

export default ProductSearch;