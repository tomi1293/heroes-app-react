
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ),[publisher]);

    return (
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}