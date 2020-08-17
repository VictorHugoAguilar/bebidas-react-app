import React from 'react';

const Receta = ({ receta }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h4 className="card-header">{receta.strDrink}</h4>
                <img className="card-img-top" src={receta.strDrinkThumb}
                    alt={receta.strDrink} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary" >
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Receta;