import React, { useRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import actions from '../../consts/actions';
import { changeShowResult, citisSelector, searchResultSelector } from '../../redux/slice/searchSlice';
import SearchResult from './SearchResult';

type Props = {}

const SearchComponent = (props: Props) => {

    const showSearchResult = useAppSelector(searchResultSelector);
    const citis = useAppSelector(citisSelector);
    const dispatch = useAppDispatch();

    const searchInputRef = useRef<HTMLInputElement | null>(null)

    return (
        <>
            <OutsideClickHandler onOutsideClick={e => dispatch(
                changeShowResult(false)
            )}>
                <div className="search" >
                    <input type="text" className="search__input input placeholder-theme-13" placeholder="Search..."
                        onFocus={e => dispatch(
                            changeShowResult(true)
                        )}
                        onChange={e => dispatch({
                            type: actions.GET_CITIS_SEARCH,
                            payload: e.target.value
                        })}
                        ref={searchInputRef}
                    />
                </div>
                <SearchResult showSearchResult={showSearchResult} citis={citis} searchInput={searchInputRef?.current?.value} />
            </OutsideClickHandler>
        </>
    )
}

export default SearchComponent