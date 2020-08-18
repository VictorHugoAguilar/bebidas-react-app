import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // creamos el state del provider
    const [idReceta, setIdReceta] = useState(null);
    const [infoReceta, setReceta] = useState({});

    // una vez que tenemos id llamar a la api
    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idReceta) {
                return;
            }
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado = await axios.get(url);
            // console.log(resultado.data.drinks[0])
            setReceta(resultado.data.drinks[0]);
        };
        obtenerReceta();
    }, [idReceta]);

    return (
        <ModalContext.Provider
            value={{
                infoReceta,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;