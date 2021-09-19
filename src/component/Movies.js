 import Movie from "./Movie"
 
 export default function Movies(props) {
    const {Movies= []}=props;

    return (
        <div className='movies'>
            {Movies.length ? Movies.map(movie =>(
                <Movie key={movie.imdbID} {...movie} />
            )): 
            <h4>Noting found</h4>}
        </div>
    )
}

// {Movies.map(movie=>(
//     <Movie key={movie.imdbID} {...movie}/>
// ))}