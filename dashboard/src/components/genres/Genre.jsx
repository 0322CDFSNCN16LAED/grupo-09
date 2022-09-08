import React from "react";

function Genre({ name, productos }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card text-white bg-dark  shadow">
                <div className="card-body">
                    {name} - {productos.length}
                </div>
            </div>
        </div>
    );
}
export default Genre;
