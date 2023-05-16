import FavMovie from '../Movie/FavMovie';
function FavMovieList(props){

function handleArr(arr){
props.newDataAfterDelete(arr);
}
function handleupdateArr(arr){
    props.newDataAfterUpdate(arr);
}

    return(
        <>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        {
            props.data.map((element,index)=>{
                return(
                    <FavMovie theMovie={element} handleArr={handleArr} handleupdateArr={handleupdateArr} />
                 );
            })

        }
        </div>
        </>
    )
}
export default FavMovieList;