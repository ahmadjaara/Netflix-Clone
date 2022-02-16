import { Modal, Button, Form } from "react-bootstrap";
import {useRef} from 'react'
function ModalMovie(props) {
    const commentRef= useRef();
    function handelcommit(e){
        e.preventDefault();
        const usercommit=commentRef.current.value;
        const newdata={...props.movie,usercommit};
         props.updatecommitt(newdata,props.movie.id) ;   

    }
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          props.handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{props.movie.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="col-md-12 text-center">
            <img
              src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
              alt="pic"
            />
          </div>
          <p>{props.movie.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>commit caption</Form.Label>
              <Form.Control type="text" placeholder="commit here" ref={commentRef} />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={handelcommit}>
            add commit
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalMovie;
