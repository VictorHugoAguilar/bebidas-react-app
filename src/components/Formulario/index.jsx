import React, { useContext } from 'react';
import { CategoriasContext } from '../../context/CategoriasContext';

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext);

    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Buscar bebidas por categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingredientes" />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
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