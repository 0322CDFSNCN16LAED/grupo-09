import GenresInDb from "./genres/GenresInDb";
import MiniCard from "./MiniCard";
import ToursInDb from "./tours/ToursInDb";
import UltimoTour from "./tours/UltimoTour";

const miniCards = [
    {
        id: "5",
        title: "Total de tours",
        color: "success",
        value: "25",
        icon: "fa-film",
    },
    {
        id: "24",
        title: "Total de usuarios",
        color: "success",
        value: "79",
        icon: "fa-award",
    },
    {
        id: "32",
        title: "Total de categorias",
        color: "success",
        value: "49",
        icon: "fa-user",
    },
];

export default function Dashboard() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Tripstarter Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <div className="row">
                {/* <!-- Movies in Data Base --> */}
                {miniCards.map((data) => {
                    return <MiniCard {...data} key={data.id} />;
                })}
            </div>
            {/* <!-- End movies in Data Base --> */}

            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Ultimo tour creado --> */}
                <UltimoTour />
                {/* <!-- Fin ultimo tour creado --> */}

                {/* <!-- Genres in DB --> */}
                
                <ToursInDb />
            </div>
        </>
    );
}
