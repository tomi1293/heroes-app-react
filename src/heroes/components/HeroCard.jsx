import { Link } from "react-router-dom";

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    // const heroImageUrl = `/src/img/heroes/${id}.jpg`;


    return (
        <div className="col  animate__animated animate__fadeIn">
            <div className="card">
                <img src = {heroImageUrl} className="card-img-top" alt={ superhero }/>
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    <Link to={`/hero/${id}`}>Mas..</Link>
                </div>
            </div>
        </div>
    )
}