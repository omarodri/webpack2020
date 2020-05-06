import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";

console.log(data);

function App() {
    const [loaderList, setLoaderList] = useState([]);
    function handleClick() {
        setLoaderList(data.loaders);
    }
    return (
        <div>
            Que linda aplicacion hecha en React.js
            <ul>
                {loaderList.map((item) => (
                    <Loader {...item} key={item.id} />
                ))}
            </ul>
            <button onClick={handleClick}>Mostrar los temas</button>
        </div>
    );
}

export default App;
