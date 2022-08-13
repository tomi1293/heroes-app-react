import { useForm } from "../../hooks/useForm";
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //queryString viene de un paquete de terceros que nos permite procesar los query para que no tengamos que hacerlo todo manualmente 
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0 && heroes.length === 0);

  //En este caso le mandamos la q porque si recargamos el navegador, se limpia el input, pero el filtro sigue aplicado.
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = ( e ) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  }
  
  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <form className="row" onSubmit={onSearchSubmit}>
        <div className="col-10">
          <input 
            type="text" 
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
            />
        </div>
        <div className="col-2">
          <button className="btn btn-outline-primary w-100">
            Search
          </button>
        </div>
      </form>

      <div className="mt-2">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '')
              ?<div className="alert alert-primary"> Search a hero </div>
              : (heroes.length === 0) 
                && <div className="alert alert-danger"> No hero with <b>{q}</b></div>
          } */}

          <div 
            className="alert alert-primary animate__animated animate__fadeIn" 
            style={{display: showSearch ? '' : 'none'}}
          >
            Search a hero 
          </div>
          <div 
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{display: showError ?'' : 'none'}}
          >
            No hero with <b>{q}</b>
          </div>
          <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
          </div>

        </div>
    
    </>
  )
}
