import React, { createContext, useState , useEffect}  from 'react';
import axios from 'axios';

// Creamos el Context
export const CategoriasContext = createContext();

// Creamos el providers es donde se encuentrar las funciones y state
const CategoriasProvider = (props) => {

    // Creamos el state del context
    const [ categorias, setCategorias ] = useState([]);

    // ejecutar el llamado a la api
useEffect( () => {
    const obtenerCategorias = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        // realiazamos la peticion
        const categorias = await axios.get(url);
        // guardamos las categorias
        setCategorias(categorias.data.drinks);
    }
    obtenerCategorias();
}, []);

    return (
        <CategoriasContext.Provider
            value = {{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;