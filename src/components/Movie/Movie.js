import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Modalmovie from '../ModalMovie/Modalmovie';




function Movie(props) {
    let [showFlag, setshowFlag] = useState(false);
    let [movie, setMovie] = useState({});
    let showModal = (movie) => {
        setshowFlag(true);
        console.log(showFlag);
        setMovie(movie);
        console.log(movie);

    }
    let hideModal = () => {
        setshowFlag(false);
    }

    return (
        <>
            <div>

                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.theMovie.poster_path}`} />
                        <Card.Body>
                            <div style={{ height: '350px', overflow: 'scroll' }}>
                                <Card.Title>{props.theMovie.title}</Card.Title>
                                <Card.Text>
                                    {props.theMovie.overview}
                                </Card.Text>
                            </div>
                            <Button variant="primary" onClick={()=>{showModal(props.theMovie)}}>add to favorite</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <Modalmovie showModal={showFlag} hideModal={hideModal} modalData={movie} />
        </>
    )
}
export default Movie;