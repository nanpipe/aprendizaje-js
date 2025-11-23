import { useState } from 'react';


function App() {
    const [showCarsOnly, setShowCarsOnly] = useState(false);
    const [vehicles, setVehicles] = useState([
        { id: 1, plate: "ABC123", type: "auto" },
        { id: 2, plate: "XYZ789", type: "moto" },
        { id: 3, plate: "DEF456", type: "auto" }
    ]);

    const [newPlate, setNewPlate] = useState('');
    const [newType, setNewType] = useState('auto');

    function addNewVehicle() {
        const newVehicle = {
            id: vehicles.length + 1,    
            plate: newPlate,
            type: newType
        };
        setVehicles([...vehicles, newVehicle]);
        setNewPlate('');
        setNewType('auto');

    }

    return (
        <div>
            <h1>Pipe Solarte</h1>
            <p>Key as id</p>
            <ul>
                {vehicles.filter(vehicle => showCarsOnly ? vehicle.type === 'auto' : true)
                    .map(vehicle => (
                        <li key={vehicle.id}>
                            {vehicle.plate} ({vehicle.type})
                        </li>
                    ))}
            </ul>


            <button onClick={() => setShowCarsOnly(!showCarsOnly)}>{showCarsOnly ? `Show All` : `Show cars only`}</button>

            <p>{showCarsOnly.toString()}</p>


            <div style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '50px', border: '1px solid white', padding: '10px', width: '300px', marginTop: '20px' }}>
                <h3>Add new vehicle</h3>
                <p>Type</p>
                <select value={newType} onChange={(e) => setNewType(e.target.value)}>
                    <option value="auto">Auto</option>
                    <option value="moto">Moto</option>
                </select>
                <p>Plate</p>
                <input type="text" value={newPlate} onChange={(e) => setNewPlate(e.target.value)} />
                <br /><br />
                <button onClick={() => {
                    addNewVehicle()
                }}> Add Vehicle</button>
            </div>

        </div>




    );
}

export default App;

