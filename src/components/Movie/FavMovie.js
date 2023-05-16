import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import UpdateModal from '../ModalMovie/UpdateModal';

function FavMovie(props) {
    // console.log("fav movie", props.theMovie);
    // let [sendDatatoParent, setsendDatatoParent] = useState([]);

    let deleteIt= async()=>{
        let serverUrl=`${process.env.REACT_APP_SERVER_URL}/DELETE/${props.theMovie.id}`;
        console.log(serverUrl);
        let response = await axios.delete(serverUrl)
        console.log(response.data);
        let serverUrl2=`${process.env.REACT_APP_SERVER_URL}/getmovies`;
        let response2 = await axios.get(serverUrl2)
        // setsendDatatoParent(response2.data);
        // props.handleTheDelete(response2.data);
        props.handleArr(response2.data)
        console.log('data after deletion',response2.data);
    }
    // ################################################################################################
    
    let [showFlag, setshowFlag] = useState(false);
    let  [obj, setobj] = useState({});
    
    let handleshow=(theMovie)=>{
        setshowFlag(true);
        setobj(theMovie);
    }

    let handleClose=()=>{
        setshowFlag(false);
    }
    
    function handleupdateArr(data){
        props.handleupdateArr(data);
    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.theMovie.poster_path}`} />
            <Card.Body>
                <div style={{ height: '350px', overflow: 'scroll' }}>
                    <Card.Title>{props.theMovie.title}</Card.Title>
                    <Card.Text>
                    <p> {props.theMovie.overview}</p>
                    <h6>your comment</h6>
                    <p style={{backgroundColor:'yellow'}}> {props.theMovie.comment}</p>
                    </Card.Text>
                </div>
                <Button variant="primary" onClick={()=>handleshow(props.theMovie)} >update</Button>
                <Button variant="primary"  onClick={deleteIt}  style={{marginLeft:'2em', backgroundColor:'red'}}>delete</Button>
                
            </Card.Body>
        </Card>
        <UpdateModal show={showFlag} hide={handleClose} theMovie={obj} handleupdateArr={handleupdateArr}  />
        </>
    );
}
export default FavMovie;