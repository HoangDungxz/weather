import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import actions from '../../consts/actions';
import { City } from '../../models';

type Props = {
    showSearchResult: boolean,
    citis: City[],
    searchInput: string | undefined
}

const SearchResult = (props: Props) => {
    const { showSearchResult, citis, searchInput } = props;
    const dispatch = useAppDispatch();
    return (
        <div className={`search-result ${showSearchResult === true ? 'search-result__show' : ''}`}>
            <div className="search-result__content">
                <ul className="">
                    {citis.length !== 0 ? citis.map(city => {
                        return <li key={city.id}
                            className="search-result-child"
                            onClick={() =>
                                dispatch({
                                    type: actions.GET_WEATHER, weatherParam: { lat: city.lat, lon: city.lng }
                                })
                            }
                        >
                            <div className="search-result-content">
                                <div className="flag">
                                    <img alt="flag" className="rounded-full"
                                        src={`https://flagcdn.com/48x36/${city?.iso2?.toLowerCase()}.png`} />
                                </div>
                                <div className="search-result__country"><strong>{city.city}</strong>, {city.country}</div>
                                <div className="search-result__text">{city.city?.slice(0, city.city?.toLowerCase()
                                    .search(searchInput?.toLowerCase() || ""))}
                                    <strong>{city.city?.slice(
                                        city.city?.toLowerCase()
                                            .search(searchInput?.toLowerCase() || ""),
                                        city.city?.toLowerCase()
                                            .search(searchInput?.toLowerCase() || "") + Number(searchInput?.length || 0)
                                    )}</strong>
                                    {city.city?.slice(city.city.toLowerCase()
                                        .search(searchInput?.toLowerCase() || '') + Number(searchInput?.length || 0))}
                                </div>
                            </div>
                        </li>
                    }) : ''}

                </ul>
            </div>
        </div>
    )
}

export default SearchResult