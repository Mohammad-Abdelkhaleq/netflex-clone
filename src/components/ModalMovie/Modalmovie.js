import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modalmovie.css'
import axios from 'axios';
function Modalmovie(props) {
    const [text, setText] = useState('');
    let handlecomment = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setText(e.target.value);
        console.log(text);
    }
    let addToFav = async () => {
        let obj = {
            title: props.modalData.title,
            poster_path: props.modalData.poster_path,
            overview: props.modalData.overview,
            comment: text
        }
        await axios.post(`http://localhost:3000/addFavMovie`, obj)
        props.hideModal();
    }
    return (
        <>

            <Modal show={props.showModal} onHide={props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Image src={`https://image.tmdb.org/t/p/w500${props.modalData.poster_path}`} fluid />
                    <div>
                        <label >Enter your comment:</label>
                        <textarea typeof='text' id="message" name="message" rows="4" cols="40" onChange={handlecomment} placeholder="Type your comment here..."></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.hideModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addToFav} >
                        add to favorite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modalmovie;