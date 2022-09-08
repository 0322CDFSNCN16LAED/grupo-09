import React from "react";

function Tour({ name, city }) {
    return (
        <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-dark  shadow">
                            <div className="card-body">
                               {name} - {city} 
                            </div>
                        </div>
                    </div>
    );
}
export default Tour;