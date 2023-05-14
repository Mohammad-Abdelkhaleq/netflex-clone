import Movie from '../Movie/Movie'
import './MovieList.css'
function MovieList (props){
    return(
        <>
        <div className='movieList'>
        {
            props.data.map((element,index)=>{
                return(
                    <Movie theMovie={element}/>
                 );
            })

        }
        </div>
        </>
    )
}
export default MovieList;