import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  //Definir el State
  const [busquedaletra, guardarBusquedaletra] = useState({});

  // State para la letra

  const [letra, guardarLetra] = useState({});

  useEffect(() => {
    //La primera vez busqueda letra va a estar vacio
    // este codigo es para revisar si un object() viena vacio
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      // Extraer Propiedades de busquedaletra
      const { artista, cancion } = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado = await axios(url);

      guardarLetra(resultado.data.lyrics);
    };
    consultarApiLetra();
  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario guardarBusquedaletra={guardarBusquedaletra} />
    </Fragment>
  );
}

export default App;
