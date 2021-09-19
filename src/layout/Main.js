import React from 'react'
import Loader from '../component/Loader'
import Movies from '../component/Movies'
import Search from '../component/Search'
export default class Main extends React.Component {
    state = {
        movie: [],
        loading:true
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=3594ee6d&s=panda')
            .then(response => response.json())
            .then(data => this.setState({ movie: data.Search, loading:false }))
            
    }
    searchMovie=(str,type = 'all')=> {
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3594ee6d&s=${str}${type !=='all' ?`&type=${type}` :''}`)
            .then(response => response.json())
            .then(data => this.setState({ movie: data.Search , loading:false}))
    
    }
    render() {
        return (
            <div className='container content'>
                <Search searchMovies={this.searchMovie} />
                {this.state.loading ?<Loader/>  :(<Movies Movies={this.state.movie} />) }
            </div>
        )
    }
}