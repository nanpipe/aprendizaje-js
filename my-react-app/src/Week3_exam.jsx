import { useState, useEffect } from "react";

import { useTheme } from './contexts/ThemeContext';



function Week3_exam() {
    const { theme } = useTheme();
    console.log("El tema en el examen es:", theme);
    // Counter
    const [count, setCount] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    // Total Prices
    const [items, setItems] = useState([{ id: 1, name: "nombre", price: 3000 }])
    const randomItems = [
        "Coffee mug",
        "Backpack",
        "Rubber duck",
        "Headphones",
        "Notebook",
        "Sunglasses",
        "Houseplant",
        "Flashlight",
        "Water bottle",
        "Alarm clock",
        "Keychain",
        "Smartphone",
        "Candle",
        "Umbrella",
        "Socks",
        "Pizza cutter",
        "Pen",
        "Pillow",
        "Wallet",
        "Bicycle bell"
    ];
    const randomItem = (value) => {

        if (value) {
            const randomChoice = Math.ceil(Math.random() * 19);
            console.log(randomChoice)
            setItems([...items, { id: items.length + 1, name: randomItems[randomChoice], price: Math.ceil(randomChoice * 3000 * Math.random()) }])
        }

        else {
            if (items.length > 0) {
                setItems(prev => prev.slice(0, -1));
            }
        }
    }

    const clearCart = () => {
        setItems([])
    }

    // ProductListing

    const [newName, setNewName] = useState("")
    const [newPrice, setNewPrice] = useState(0)
    const [newInStock, setNewInStock] = useState(false)

    const handleAddProduct = () => {
        setProducts([...products, {
            id: products.length + 1,
            name: newName,
            price: newPrice,
            inStock: newInStock
        }]);

        // Clear form
        setNewName('');
        setNewPrice(0);
        setNewInStock(false);
    };

    const [stockOnly, setStockOnly] = useState(false)
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 1000, inStock: true },
        { id: 2, name: "Smartphone", price: 700, inStock: true },
        { id: 3, name: "Headphones", price: 150, inStock: false },
        { id: 4, name: "Keyboard", price: 90, inStock: true },
        { id: 5, name: "Mouse", price: 50, inStock: false }
    ])
    const filteredProducts = stockOnly
        ? products.filter(product => product.inStock)
        : products;


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    async function fetchData() {
        try {
            setLoading(true)
            const result = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            if (!result.ok) {
                throw new Error("Algo pasó?");
            }
            const json = await result.json()
            setData(json)
            console.log(json)
        } catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }


    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
       

            <div className={`app-container ${theme}`}>
            
            <p>Examen is here</p>
            <div>
                <h2>Counter</h2>
                <p>Count: {count}</p>
            </div>

            <div>
                <h2>List of items</h2>
                <button onClick={() => randomItem(true)}>add+</button> <button onClick={() => randomItem(false)}>remove -</button>
                {items.map(item => <li className={item.price > 10000 ? "ColorGreen" : "ColorGrey"} key={item.id}>id: {item.id} <strong>Item:</strong> {item.name} <strong>Price:</strong> {item.price}</li>)}

                <p>total: {items.reduce((acc, item) => acc = acc + item.price, 0)}</p>
                <button onClick={clearCart}>clear cart</button>
            </div>

            <div>
                <h2>List of Products</h2>
                <input
                    type="checkbox"
                    checked={stockOnly}
                    onChange={() => setStockOnly(!stockOnly)}
                    placeholder="Show inStock only"

                /><span> Show inStock only</span>
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            id: {product.id}{" "}
                            <strong>Product:</strong> {product.name}{" "}
                            <strong>Price:</strong> {product.price}{" "}
                            inStock: {product.inStock ? "Si" : "No"}
                        </li>
                    ))}
                </ul>

                <div>
                    <h3>Add Product</h3>
                    <input
                        type="text"
                        placeholder="Product name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={newInStock}
                            onChange={(e) => setNewInStock(e.target.checked)}
                        />
                        In Stock
                    </label>
                    <button onClick={handleAddProduct}>Add Product</button>
                </div>

            </div>

            <div>{loading ?
                "Loading..."
                : <ul>
                    {data?.map(title => <li key={title.id}> title: {title.title} <input type="checkbox" name="option" checked={title.completed} disabled></input></li>)}
                </ul>
            }</div>

            <button onClick={() => fetchData()}>refresh</button>

            <p>{error ? error : ""}</p>

        </div>

    )
}
export default Week3_exam;