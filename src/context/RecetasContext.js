import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [receta, setReceta] = useState([]);
    const [busqueda, buscarReceta] = useState({
        ingrediente: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);

    const { ingrediente, categoria} = busqueda;

    useEffect( () => {
        if(consultar){
        const obtenerRecetas = async ( ) => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
            const resultado = await axios.get(url);
            //console.log(resultado.data.drinks)
            setReceta(resultado.data.drinks);
            setConsultar(false);
        }
        obtenerRecetas(); 
        }
    }, [busqueda]);



    return (
        <RecetasContext.Provider
            value={{
                buscarReceta,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;