import React, { useContext } from 'react';
// importamos el context
import { RecetasContext } from '../../context/RecetasContext';
// importamos los componentes personalizados
import Receta from '../Receta';

const ListaRecetas = () => {

    // extraemos las recetas del context
    const { recetas } = useContext(RecetasContext);
    //console.log(recetas);

    return (
        <div className="row mt-4">
            {recetas?.map(receta => (
                <Receta
                    receta={receta}
                    key={receta.idDrink}
                />
            ))
            }
        </div>
    );
}

export default ListaRecetas;