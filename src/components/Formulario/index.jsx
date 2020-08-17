import React, { useContext, useState } from 'react';
// Importamos los context
import { CategoriasContext } from '../../context/CategoriasContext';
import { RecetasContext } from '../../context/RecetasContext'; 

const Formulario = () => {

    const [ busqueda, setBusqueda ] = useState({
        ingrediente: '',
        categoria: ''
    });

    const { categorias } = useContext(CategoriasContext);
    const {  buscarReceta, setConsultar  } = useContext(RecetasContext);

    // funcion para leer los contenidos 
    const getDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }


    return (
        <form className="col-12"
            onSubmit = {
                e => {
                    e.preventDefault();
                    setConsultar(true);
                    buscarReceta(busqueda);
                }
            }
        >
            <fieldset className="text-center">
                <legend>Buscar bebidas por categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="ingrediente"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingredientes" 
                        onChange={getDatosReceta}
                        />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={getDatosReceta}
                    >
                        <option value=""> -- Selecciona Categoría -- </option>
                        {categorias?.map((categoria, index) => (
                            <option
                                key={index}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Receta de Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;