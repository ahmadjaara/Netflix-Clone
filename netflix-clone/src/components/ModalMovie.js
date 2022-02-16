import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";
function ModalMovie(props) {
  const commentRef = useRef();
  function handelcommit(e) {
    e.preventDefault();
    const usercommit = commentRef.current.value;
    const newdata = { ...props.movie, usercommit };
    props.updatecommitt(newdata, props.movie.id);
  }
  async function addToFav(movie){
   try{
     const res = await fetch(`${process.env.React_App_SERVER}/addMovie`,{
     method:"post",
     headers:{
       'Acceept':'application/json',
       'Content-Type':'application/json'
     },
     body:JSON.stringify({
       title:movie.title,
       poster_path:movie.poster_path,
       overview:movie.overview
     })

     })
     const data= await res.json();
        
    
    }catch(error){
      console.log("error",error)
    }
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
          <div className ="col-md-12 text-center">
            <img
              src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
              alt="pic"
            />
          </div>
          <p>{props.movie.overview}</p>
        </Modal.Body>
        <Button variant="primary" size="sm" onClick={()=>addToFav(props.movie)}>
          add Favarite
        </Button>
        <Modal.Footer>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>commit caption</Form.Label>
              <Form.Control
                type="text"
                placeholder="commit here"
                ref={commentRef}
              />
              <Button variant="primary" onClick={handelcommit}>
                add commit
              </Button>
              <p> {!props.movie.iscommite ? props.movie.comment : " "} </p>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
            </Form.Group>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalMovie;
