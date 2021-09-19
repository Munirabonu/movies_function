import React from "react";

export default class Search extends React.Component {
    state = {
        search: 'panda',
        type: "all"
    }
    handValue = (e) => {
        this.setState({ search: e.target.value })
    }
    handclick = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }
    // clik =() =>{
    //      if (this.state.search===' '){
    //         this.props.searchMovies(this.state.search)
    //     }
    // }
    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }
    render() {
        const { search } = this.state
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            value={search}
                            placeholder='search'
                            type="search"
                            className="search"
                            onChange={this.handValue}
                            onKeyDown={this.handclick}
                        />
                        <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search movies</button>
                        {/* <button className='btn search-btn' onClick={this.clik}>Search movies</button> */}
                    </div>
                    <div>
                        <label>
                            <input
                                class="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={this.handleFilter}
                                checked={this.state.type === "all"}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                class="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === "movie"}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                class="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={this.handleFilter}
                                checked={this.state.type === "series"}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
