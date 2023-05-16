import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function UpdateModal(props) {

    let [newcomment, setnewcomment] = useState('');

    let obj = {
        // id: props.theMovie.id,
        // title: props.theMovie.title,
        // poster_path: props.theMovie.poster_path,
        // overview: props.theMovie.overview,
        comment: newcomment
    }
    console.log("my object", obj.comment);
    let updateIt = async () => {
        let serverUrl = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${props.theMovie.id}`;
        console.log(serverUrl);
        let response = await axios.put(serverUrl, obj);
        console.log(response.data);

        let serverUrl2 = `${process.env.REACT_APP_SERVER_URL}/getmovies`;
        let response2 = await axios.get(serverUrl2);
        props.handleupdateArr(response2.data);
        props.hide();

    }

    function handlecomment(e) {
        setnewcomment (e.target.value);
        console.log(newcomment);
    }

    return (
        <>
            <Modal show={props.show} onHide={props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label >Enter your comment:</label>
                        <textarea typeof='text' id="message" name="message" rows="4" cols="40" onChange={handlecomment} placeholder="Type your comment here..."></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.hide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateIt}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateModal;