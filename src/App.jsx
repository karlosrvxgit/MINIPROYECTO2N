import { useEffect, useState } from "react";
import "./App.css";
import "/components/Card.css";
import '/components/Nav.css';
import Nav from "/components/Nav.jsx";
import Card from "../components/Card";
import Image from 'react'
import logo from './img/logo.png'


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
    <nav id='search'>
      <div id='img-logo'>
        <img src={logo} with='96'/>
      </div>
    </nav>
  
      <div>
        <Nav />
       </div>
       <div>
        <Card />
       </div>
      
      

    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
      {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>;
      })}
    </>
  );
}

export default App;
