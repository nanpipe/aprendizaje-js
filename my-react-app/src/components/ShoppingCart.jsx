import { useReducer } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Define initial state here
const initialState = {
    items: [],
    total: 0
};


function cartReducer(state, action) {
   
    switch (action.type) {
        case 'ADD_ITEM':
           
            const newItems = [...state.items, action.payload];
            const newTotal = newItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
            return {
                items: newItems,
                total: newTotal
            };
        case 'REMOVE_ITEM':
            
            const remainingItems = state.items.filter(item => item.id !== action.id);
            const remainingTotal = remainingItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

            return {
                items: remainingItems,
                total: remainingTotal
            };
        case 'UPDATE_QTY':
            const updatedItems = state.items
                .map(item => {
                    if (item.id === action.id) {
                        return { ...item, quantity: item.quantity + action.quantity };
                    }
                    return item;
                })
                .filter(item => item.quantity > 0);

            

            const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

            return {
                items: updatedItems,
                total: updatedTotal
            };
        default:
            return state;
    }
}

function ShoppingCart() {
    const { theme } = useTheme();
    const [state, dispatch] = useReducer(cartReducer, initialState);

    
    const addSampleItem = () => {
        const sampleItems = [
            { id: Date.now(), product: 'Laptop', price: 1000, quantity: 1 },
            { id: Date.now() + 1, product: 'Mouse', price: 25, quantity: 1 },
            { id: Date.now() + 2, product: 'Keyboard', price: 75, quantity: 1 },
        ];

        const randomItem = sampleItems[Math.floor(Math.random() * sampleItems.length)];
        dispatch({ type: 'ADD_ITEM', payload: randomItem });
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', id: id });
    }

    const updateItem = (id, qty) => {
        dispatch({ type: 'UPDATE_QTY', id: id, quantity: qty });
    }

    return (
        <div className={`app-container ${theme}`}>
            <h1>🛒 Shopping Cart</h1>

            <button onClick={addSampleItem}>Add Random Item</button>

            <h3>Total: ${state?.total}</h3>

            {state.items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {state.items.map(item => {
                        return <li key={item.id}>id: {item.id} - product: {item.product} - qty: {item.quantity} - price: {item.price}
                            <button style={{ background: 'rgb(187, 150, 0)' }} onClick={() => updateItem(item.id, -1)}>-</button>
                            <button style={{ background: '#b10' }} onClick={() => removeItem(item.id)}>delete</button>
                            <button style={{ background: 'rgb(47, 187, 0)' }} onClick={() => updateItem(item.id, 1)}>+</button></li>;
                    })
                    }
                </ul>
            )
            }
        </div >
    );
}

export default ShoppingCart;