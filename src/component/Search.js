import React, { useState } from "react";

export default function Search({ searchMovies }) {
    const [search, setSearch] = useState("panda");
    const [type, setType] = useState("all")


    const handclick = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type)
        }
    }

    const handleFilter = (e) => {
        setType(e.target.dataset.type)
        searchMovies(search, e.target.dataset.type)
    }
    return (
        <div className="row">
            <div className="col s12">
            <div className="input-field">
                <input
                    type="text"
                    value={search}
                    placeholder='search'
                    type="search"
                    className="search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handclick}
                />
                <button
                    className='btn search-btn'
                    onClick={() =>
                        searchMovies(search, type)}>
                    Search movies</button>
            </div>
            <div>
                <label>
                    <input
                        class="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleFilter}
                        checked={type === "all"}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        class="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={handleFilter}
                        checked={type === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        class="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        checked={type === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
        </div>
    )
}

